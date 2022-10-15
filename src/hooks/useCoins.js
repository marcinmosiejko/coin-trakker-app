import { useEffect, useState } from 'react';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';

const handleSetDisplayData = ({
  coinsList,
  currentPage,
  perPageLimit,
  setDisplayData,
}) => {
  if (!coinsList) return;
  const pageStartIndex = (currentPage - 1) * perPageLimit;
  const pageEndIndex = currentPage * perPageLimit;

  const displayData = coinsList.slice(pageStartIndex, pageEndIndex);
  setDisplayData(displayData);
};

const useCoins = (coinsList) => {
  const [displayData, setDisplayData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    handleSetDisplayData({
      coinsList,
      currentPage,
      perPageLimit,
      setDisplayData,
    });

    if (!coinsList) return;
    setLastPage(Math.ceil(coinsList.length / perPageLimit));
  }, [coinsList, currentPage, perPageLimit]);

  const handlePagination = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return {
    displayData,
    currentPage,
    lastPage,
    perPageLimit,
    handlePagination,
  };
};

export default useCoins;
