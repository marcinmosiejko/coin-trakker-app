import { useCallback, useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useLcwCoinsData } from './useLcwCoinsData';
import { getCurPageCoinsList } from 'helpers/coins';

export const useCoins = () => {
  const {
    coinsData,
    coinsCurPageCoinsList,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodesList,
  } = useLcwCoinsData();
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    if (!coinsData) return;

    const curPageCoinsList = getCurPageCoinsList({
      coinsData,
      currentPage,
      perPageLimit,
      showWatchlist,
      watchlistCoinCodesList,
      setCurrentPage,
      setLastPage,
      setShowWatchlist,
    });

    handleSetCoinsCurPageCoinsList(curPageCoinsList);
  }, [
    coinsData,
    currentPage,
    perPageLimit,
    showWatchlist,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodesList,
  ]);

  useEffect(() => {
    if (!coinsData) return;

    setLastPage(Math.ceil(coinsData.length / perPageLimit));
  }, [coinsData, perPageLimit]);

  const handlePageChange = function (event) {
    setCurrentPage(event.selected);
    window.scrollBy({
      top: this.current.getBoundingClientRect().y - 90,
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
