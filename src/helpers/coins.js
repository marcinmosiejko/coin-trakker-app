import { compareObjBy } from 'helpers/general';

export function getLastPage(data, perPageLimit) {
  return Math.ceil(data.length / perPageLimit);
}

export function getWatchlistCoinsList(coinsData, watchlistCoinCodesList) {
  const watchlistCoinsList = watchlistCoinCodesList
    .map((coinCode) => {
      const watchedCoin = coinsData.find((coin) => coin.code === coinCode);
      return watchedCoin;
    })
    .sort(compareObjBy.bind('rank'));

  return watchlistCoinsList;
}
