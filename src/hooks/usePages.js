import { useCallback, useState } from 'react';

export const usePages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const handleSetCurPage = useCallback((curPage) => {
    setCurrentPage(curPage);
  }, []);

  const handleSetLastPage = useCallback((lastPage) => {
    setLastPage(lastPage);
  }, []);

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
