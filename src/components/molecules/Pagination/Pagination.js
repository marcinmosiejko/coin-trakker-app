import React from 'react';
import { Wrapper } from './Pagination.styles';

const Pagination = ({ currentPage, handlePagination }) => {
  return (
    <Wrapper>
      <button onClick={() => handlePagination(-1)}>-</button>
      <span>{currentPage}</span>
      <button onClick={() => handlePagination(1)}>+</button>
    </Wrapper>
  );
};

export default Pagination;
