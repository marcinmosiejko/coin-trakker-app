import { useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useLcwCoinsList } from './useLcwCoinsList';

export const useCoins = (coinsList) => {
  const { handleSetPageCoinsList, setPageCoinsList } = useLcwCoinsList();
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    handleSetPageCoinsList({
      coinsList,
      currentPage,
      perPageLimit,
      setPageCoinsList,
    });

    if (!coinsList) return;
    setLastPage(Math.ceil(coinsList.length / perPageLimit));
  }, [
    coinsList,
    currentPage,
    perPageLimit,
    handleSetPageCoinsList,
    setPageCoinsList,
  ]);

  const handlePagination = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return {
    currentPage,
    lastPage,
    perPageLimit,
    handlePagination,
  };
};
