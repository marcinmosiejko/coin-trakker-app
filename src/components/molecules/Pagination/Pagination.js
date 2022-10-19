import React from 'react';
import { StyledPagination } from './Pagination.styles';

const Pagination = ({ lastPage, handlePagination }) => {
  return (
    <StyledPagination
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePagination}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={lastPage}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
