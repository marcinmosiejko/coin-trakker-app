import { compareObjBy } from 'helpers/general';

function getLastPage(data, perPageLimit) {
  return Math.ceil(data.length / perPageLimit);
}

export function getCurPageCoinsList({
  coinsData,
  currentPage,
  perPageLimit,
  showWatchlist,
  watchlistCoinCodesList,
  setLastPage,
  setShowWatchlist,
}) {
  const pageStartIndex = (currentPage - 1) * perPageLimit;
  const pageEndIndex = currentPage * perPageLimit;

  // showWatchlist controls what will be set as coinsCurrentPageCoinsList
  let curPageCoinsList;
  if (!showWatchlist || watchlistCoinCodesList.length === 0) {
    curPageCoinsList = coinsData.slice(pageStartIndex, pageEndIndex);

    setShowWatchlist(false);
    setLastPage(getLastPage(coinsData, perPageLimit));
  } else {
    // Get watchlistCoinsList from watchlistCoinCodes and based on that calculate last page as watchlistCoinCodes will be stored in localStorage / backend and between user sessions coinsData may change and not all coins that are stored will be avaiable on coinsData (due to new coins getting into top fetched coins) which may skew the result
    const watchlistCoinsList = watchlistCoinCodesList
      .map((coinCode) => {
        const watchedCoin = coinsData.find((coin) => coin.code === coinCode);
        return watchedCoin;
      })
      .sort(compareObjBy.bind('rank'));

    setLastPage(getLastPage(watchlistCoinsList, perPageLimit));

    curPageCoinsList = watchlistCoinsList.slice(pageStartIndex, pageEndIndex);
  }

  return curPageCoinsList;
}
