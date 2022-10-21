import { useCallback, useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useLcwCoinsData } from './useLcwCoinsData';
import { getLastPage, getWatchlistCoinsList } from 'helpers/coins';

export const useCoins = () => {
  const {
    coinsData,
    coinsCurPageCoinsList,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodes,
  } = useLcwCoinsData();
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
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
      setLastPage(getLastPage(coinsData, perPageLimit));
    } else {
      // Get watchlistCoinsList from watchlistCoinCodes and based on that calculate last page as watchlistCoinCodes will be stored in localStorage / backend and between user sessions coinsData may change and not all coins that are stored will be avaiable on coinsData (due to new coins getting into top fetched coins) which may skew the result
      const watchlistCoinsList = getWatchlistCoinsList(
        coinsData,
        watchlistCoinCodes
      );
      setLastPage(getLastPage(watchlistCoinsList, perPageLimit));
      curPageCoinsList = watchlistCoinsList.slice(pageStartIndex, pageEndIndex);
      setCurrentPage(0);
    }

    handleSetCoinsCurPageCoinsList(curPageCoinsList);
  }, [
    coinsData,
    currentPage,
    perPageLimit,
    showWatchlist,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodes,
  ]);

  useEffect(() => {
    if (!coinsData) return;

    setLastPage(Math.ceil(coinsData.length / perPageLimit));
  }, [coinsData, perPageLimit]);

  const handlePageChange = function (e, tableRef) {
    setCurrentPage(e.selected);
    window.scrollBy({
      top: tableRef.current.getBoundingClientRect().y - 90,
      behavior: 'smooth',
    });
  };

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
