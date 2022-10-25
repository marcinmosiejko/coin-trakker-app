import { useCallback, useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useLcwCoinsData } from './useLcwCoinsData';
import { getLastPage, getWatchlistCoinsList } from 'helpers/coins';
import { usePages } from './usePages';

export const useCoins = () => {
  const {
    coinsData,
    coinsCurPageCoinsList,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodes,
  } = useLcwCoinsData();
  const {
    currentPage,
    lastPage,
    handlePageChange,
    handleSetLastPage,
    handleSetCurPage,
  } = usePages();
  const [showWatchlist, setShowWatchlist] = useState(false);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    if (!coinsData) return;

    const pageStartIndex = currentPage * perPageLimit;
    const pageEndIndex = (currentPage + 1) * perPageLimit;

    // showWatchlist controls what will be set as coinsCurrentPageCoinsList
    let curPageCoinsList;
    if (!showWatchlist || watchlistCoinCodes.length === 0) {
      curPageCoinsList = coinsData.slice(pageStartIndex, pageEndIndex);
      setShowWatchlist(false);
      handleSetLastPage(getLastPage(coinsData, perPageLimit));
    } else {
      // Get watchlistCoinsList from watchlistCoinCodes and based on that calculate last page as watchlistCoinCodes will be stored in localStorage / backend and between user sessions coinsData may change and not all coins that are stored will be avaiable on coinsData (due to new coins getting into top fetched coins) which may skew the result
      const watchlistCoinsList = getWatchlistCoinsList(
        coinsData,
        watchlistCoinCodes
      );
      handleSetLastPage(getLastPage(watchlistCoinsList, perPageLimit));
      curPageCoinsList = watchlistCoinsList.slice(pageStartIndex, pageEndIndex);
      handleSetCurPage(0);
    }

    handleSetCoinsCurPageCoinsList(curPageCoinsList);
  }, [
    coinsData,
    currentPage,
    perPageLimit,
    showWatchlist,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodes,
    handleSetLastPage,
    handleSetCurPage,
    handleSetLastPage,
  ]);

  useEffect(() => {
    if (!coinsData) return;

    handleSetLastPage(Math.ceil(coinsData.length / perPageLimit));
  }, [coinsData, perPageLimit]);

  const handleSetShowWatchlist = useCallback(() => {
    setShowWatchlist((prevState) => !prevState);
  }, []);

  return {
    coinsCurPageCoinsList,
    currentPage,
    lastPage,
    showWatchlist,
    handlePageChange,
    handleSetShowWatchlist,
  };
};
