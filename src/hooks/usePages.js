import { useState } from 'react';

export const usePages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const handleSetCurPage = (curPage) => {
    setCurrentPage(curPage);
  };

  const handleSetLastPage = (lastPage) => {
    setLastPage(lastPage);
  };

  const handlePageChange = (curPage, tableRef) => {
    setCurrentPage(curPage);

    if (tableRef) {
      window.scrollBy({
        top: tableRef.current.getBoundingClientRect().y - 130,
        behavior: 'smooth',
      });
    }
  };

  return {
    currentPage,
    lastPage,
    handlePageChange,
    handleSetCurPage,
    handleSetLastPage,
  };
};
