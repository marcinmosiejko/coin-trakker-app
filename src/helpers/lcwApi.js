import axios from 'axios';
import { LCW_API_URL, API_LIMIT, API_CALLS } from 'config';
import dayjs from 'dayjs';

const lcwAPI = axios.create({ baseURL: LCW_API_URL });
lcwAPI.defaults.headers = {
  'content-type': 'application/json',
  'x-api-key': process.env.REACT_APP_LCW_TOKEN,
};

export const fetchCoinsListData = async (meta = false) => {
  try {
    let finalData = [];

    for (let i = 0; i < API_CALLS; i++) {
      const { data } = await lcwAPI.post('/coins/list', {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: i * API_LIMIT,
        limit: API_LIMIT,
        meta,
      });
      finalData = [...finalData, ...data];
    }
    return finalData;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCoinsHistoryData = async (code) => {
  try {
    const { data } = await lcwAPI.post('/coins/single/history', {
      currency: 'USD',
      code,
      start: dayjs().subtract(6, 'day').valueOf(),
      end: dayjs().valueOf(),
      meta: false,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getHistory7dCoinsList = async (
  pageCoinsList,
  history7dCoinsList
) => {
  // Iterate through pageCoinsList and check if in history7dCoinsList is data for each coin. If there is, return. If there isn't, fetch history data for that coin.
  if (!pageCoinsList) return;

  let historyList = await Promise.all(
    pageCoinsList.map(async (pc) => {
      const existingHistoryData = history7dCoinsList?.find(
        (hc) => hc.name === pc.name && hc.code === pc.code
      );

      if (existingHistoryData) return;

      const { history: historyData } = await fetchCoinsHistoryData(pc.code);

      const finalHistoryData = historyData.map((obj) => obj.rate);

      return {
        name: pc.name,
        code: pc.code,
        history: finalHistoryData,
      };
    })
  );

  // Filter out undefined values (a result of 'if (existingHistoryData) return;' statement when historical data for specified coin is already in state)
  historyList = historyList.filter((i) => i !== undefined);

  return historyList;
};

export const getUpdatedCoinsList = (prevState, newData) => {
  const updatedData = prevState.map((stateCoin) => {
    // If there's no matching coin fall back to current data
    const { rate, volume, cap, delta } =
      newData?.find((newCoin) => newCoin.code === stateCoin.code) || stateCoin;

    return {
      ...stateCoin,
      rate,
      volume,
      cap,
      delta,
    };
  });

  return updatedData;
};

export const getUpdatedCoinsListWithWatchlist = (
  prevState,
  watchlistCoinCodesList
) => {
  const updatedData = prevState.map((coin) => {
    if (watchlistCoinCodesList.includes(coin.code))
      return { ...coin, onWatchlist: true };

    return { ...coin, onWatchlist: false };
  });

  return updatedData;
};

export const getUpdatedCoinsListWithWatchlistCoinCode = (
  prevState,
  coinCode
) => {
  const updatedData = prevState.map((coin) => {
    if (coin.code === coinCode) {
      return { ...coin, onWatchlist: !coin.onWatchlist };
    }
    return coin;
  });

  return updatedData;
};

export const add7DayHistoryDataToCoinsData = (prevState, newHistory7dCoins) => {
  const enrichedState = prevState.map((stateCoin) => {
    const coinHistory = newHistory7dCoins.find(
      (c) => c.code === stateCoin.code
    );

    if (!coinHistory) return stateCoin;

    const enrichedCoinData = { ...stateCoin, history7d: coinHistory.history };
    return enrichedCoinData;
  });

  return enrichedState;
};
