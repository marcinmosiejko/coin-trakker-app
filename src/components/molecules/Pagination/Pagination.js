import React from 'react';
import { StyledPagination } from './Pagination.styles';

const Pagination = ({ lastPage, handlePageChange }) => {
  return (
    <StyledPagination
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageChange}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={lastPage}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
