import React from 'react';
import { Wrapper } from './Pagination.styles';

const Pagination = ({ page, handlePagination }) => {
  return (
    <Wrapper>
      <button onClick={() => handlePagination(-1)}>-</button>
      <span>{page + 1}</span>
      <button onClick={() => handlePagination(1)}>+</button>
    </Wrapper>
  );
};

export default Pagination;
