import React from 'react';
import { StyledLi } from './SearchResultsItem.styles';
import CoinId from '../CoinId/CoinId';

const SearchResultsItem = React.forwardRef(
  ({ data, isHighlighted, ...props }, ref) => {
    return (
      <StyledLi ref={ref} isHighlighted={isHighlighted} {...props}>
        <CoinId data={data} isSearchResult maxNameLength={24} />
      </StyledLi>
    );
  }
);

export default SearchResultsItem;
