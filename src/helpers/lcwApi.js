import axios from 'axios';
import {
  LCW_API_URL,
  API_LIMIT,
  API_CALLS,
  LCW_API_DEFAULT_TIMEOUT,
} from 'config';
import dayjs from 'dayjs';

const lcwAPI = axios.create({
  baseURL: LCW_API_URL,
  timeout: LCW_API_DEFAULT_TIMEOUT,
});
lcwAPI.defaults.headers = {
  'content-type': 'application/json',
  'x-api-key': process.env.REACT_APP_LCW_TOKEN,
};

export const fetchCoinsData = async (meta = false) => {
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
    throw err;
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
    throw err;
  }
};

export const getHistory7dCoinsList = async (history7dCoinsList, coinsList) => {
  try {
    // Iterate through coinsList and check if in history7dCoinsList is data for each coin. If there is, return. If there isn't, fetch history data for that coin.
    if (!coinsList || coinsList.length === 0) return;

    let historyList = await Promise.all(
      coinsList.map(async (pc) => {
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
  } catch (err) {
    throw err;
  }
};

export const getUpdatedCoinsData = (prevState, newData) => {
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

// Updates all coins that are on watchlist after app start (comes from localStorage)
export const getUpdatedCoinsDataWithWatchlist = (
  prevState,
  watchlistCoinCodes
) => {
  const updatedData = prevState?.map((coin) => {
    if (watchlistCoinCodes.includes(coin.code))
      return { ...coin, onWatchlist: true };

    return { ...coin, onWatchlist: false };
  });

  return updatedData;
};

// Updates one coin after it's added to watchlist
export const getUpdatedCoinsDataWithWatchlistCoinCode = (
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

export const add7DayHistoryDataToCoinsData = (prevState, history7dCoins) => {
  const enrichedState = prevState.map((stateCoin) => {
    const coinHistory = history7dCoins?.find((c) => c.code === stateCoin.code);

    if (!coinHistory) return stateCoin;

    const enrichedCoinData = { ...stateCoin, history7d: coinHistory.history };
    return enrichedCoinData;
  });

  return enrichedState;
};

const isCoinValueMatchingQuery = (coin, key, query) => {
  return coin[key].toLowerCase().startsWith(query.toLowerCase());
};

export const filterByCoinNameOrCode = (coinsToFilter, queryString) => {
  if (!coinsToFilter) return [];

  return coinsToFilter.filter(
    (coin) =>
      isCoinValueMatchingQuery(coin, 'name', queryString) ||
      isCoinValueMatchingQuery(coin, 'code', queryString)
  );
};
