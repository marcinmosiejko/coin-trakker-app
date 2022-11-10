import React from 'react';
import PropTypes from 'prop-types';
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

SearchResultsItem.propTypes = {
  data: PropTypes.object.isRequired,
  isHighlighted: PropTypes.bool,
};

export default SearchResultsItem;
