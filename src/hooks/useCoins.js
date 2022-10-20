import { useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useLcwCoinsData } from './useLcwCoinsData';

export const useCoins = () => {
  const { coinsData, handleSetCoinsCurPageCoinsList } = useLcwCoinsData();
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    handleSetCoinsCurPageCoinsList({
      currentPage,
      perPageLimit,
    });

    if (!coinsData) return;
    setLastPage(Math.ceil(coinsData.length / perPageLimit));
  }, [coinsData, currentPage, perPageLimit, handleSetCoinsCurPageCoinsList]);

  const handlePageChange = function (event) {
    setCurrentPage(event.selected + 1);
    window.scrollBy({
      top: this.current.getBoundingClientRect().y - 90,
      behavior: 'smooth',
    });
  };

  return {
    lastPage,
    handlePageChange,
  };
};
