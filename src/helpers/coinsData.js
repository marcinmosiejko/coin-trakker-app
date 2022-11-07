import { fetchCoinsHistoryData } from './lcwApi';
import { compareObjBy } from './general';

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

export const getUpdatedCoinsDataWithHistory7d = (prevState, history7dCoins) => {
  const enrichedState = prevState.map((stateCoin) => {
    const coinHistory = history7dCoins?.find((c) => c.code === stateCoin.code);

    if (!coinHistory) return stateCoin;

    const enrichedCoinData = { ...stateCoin, history7d: coinHistory.history };
    return enrichedCoinData;
  });

  return enrichedState;
};

export function getWatchlistCoinsList(coinsData, watchlistCoinCodes) {
  const watchlistCoinsList = watchlistCoinCodes
    .map((coinCode) => {
      const watchedCoin = coinsData.find((coin) => coin.code === coinCode);
      return watchedCoin;
    })
    // In case the coin on watchlistCoinsList (for example when retrieved from localStorage) does no longer exist (coins in coinsData has changed)
    .filter((item) => item !== undefined)
    .sort((a, b) => compareObjBy(a, b, 'rank', true));

  return watchlistCoinsList;
}

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
