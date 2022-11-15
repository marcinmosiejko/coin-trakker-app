import { useCallback, useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useLcwCoinsData } from './useCoinsData';
import { getPageCount } from 'helpers/general';
import { getWatchlistCoinsList } from 'helpers/coinsData';
import { usePages } from './usePages';
import { useSelector } from 'react-redux';

export const useCoins = () => {
  const coinsData = useSelector((state) => state.coinsData);
  const {
    coinsCurPageCoinsList,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodes,
  } = useLcwCoinsData();
  const {
    currentPage,
    pageCount,
    handlePageChange,
    handleSetPageCount,
    handleSetCurPage,
  } = usePages();
  const [showWatchlist, setShowWatchlist] = useState(false);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    handleSetCurPage(0);
  }, [showWatchlist, handleSetCurPage]);

  useEffect(() => {
    if (!coinsData) return;
    const pageStartIndex = currentPage * perPageLimit;
    const pageEndIndex = (currentPage + 1) * perPageLimit;

    // showWatchlist controls what will be set as coinsCurrentPageCoinsList
    let curPageCoinsList;
    if (!showWatchlist || watchlistCoinCodes.length === 0) {
      curPageCoinsList = coinsData.slice(pageStartIndex, pageEndIndex);
      setShowWatchlist(false);
    } else {
      // Get watchlistCoinsList from watchlistCoinCodes and based on that calculate last page as watchlistCoinCodes will be stored in localStorage / backend and between user sessions coinsData may change and not all coins that are stored will be avaiable on coinsData (due to new coins getting into top fetched coins) which may skew the result
      const watchlistCoinsList = getWatchlistCoinsList(
        coinsData,
        watchlistCoinCodes
      );
      curPageCoinsList = watchlistCoinsList.slice(pageStartIndex, pageEndIndex);
    }

    handleSetCoinsCurPageCoinsList(curPageCoinsList);
  }, [
    coinsData,
    currentPage,
    perPageLimit,
    showWatchlist,
    handleSetCoinsCurPageCoinsList,
    watchlistCoinCodes,
    handleSetPageCount,
    handleSetCurPage,
  ]);

  useEffect(() => {
    if (!coinsData) return;
    if (showWatchlist)
      handleSetPageCount(getPageCount(watchlistCoinCodes, perPageLimit));
    if (!showWatchlist)
      handleSetPageCount(getPageCount(coinsData, perPageLimit));
  }, [
    showWatchlist,
    coinsData,
    watchlistCoinCodes,
    perPageLimit,
    handleSetPageCount,
  ]);

  const handleSetShowWatchlist = useCallback(() => {
    setShowWatchlist((prevState) => !prevState);
  }, []);

  return {
    coinsCurPageCoinsList,
    currentPage,
    pageCount,
    showWatchlist,
    handlePageChange,
    handleSetShowWatchlist,
  };
};
