import { useCallback, useState } from 'react';

export const usePages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const handleSetCurPage = useCallback((curPage) => {
    setCurrentPage(curPage);
  }, []);

  const handleSetLastPage = useCallback((pageCount) => {
    setPageCount(pageCount);
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
    pageCount,
    handlePageChange,
    handleSetCurPage,
    handleSetLastPage,
  };
};
