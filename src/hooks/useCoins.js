import { useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useLcwCoinsData } from './useLcwCoinsData';

export const useCoins = () => {
  const { coinsData, handleSetCoinsCurPageCoinsList } = useLcwCoinsData();
  const [coinsCurPageCoinsList, setCoinsCurPageCoinsList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    if (!coinsData) return;

    const pageStartIndex = (currentPage - 1) * perPageLimit;
    const pageEndIndex = currentPage * perPageLimit;

    const curPageCoinsList = coinsData.slice(pageStartIndex, pageEndIndex);

    setCoinsCurPageCoinsList(curPageCoinsList);
    handleSetCoinsCurPageCoinsList(curPageCoinsList);
  }, [coinsData, currentPage, perPageLimit, handleSetCoinsCurPageCoinsList]);

  useEffect(() => {
    if (!coinsData) return;

    setLastPage(Math.ceil(coinsData.length / perPageLimit));
  }, [coinsData, perPageLimit]);

  const handlePageChange = function (event) {
    setCurrentPage(event.selected + 1);
    window.scrollBy({
      top: this.current.getBoundingClientRect().y - 90,
      behavior: 'smooth',
    });
  };

  return {
    coinsCurPageCoinsList,
    lastPage,
    handlePageChange,
  };
};
