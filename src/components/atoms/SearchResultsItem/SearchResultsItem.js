import React from 'react';
import styled from 'styled-components';
import CoinId from '../CoinId/CoinId';

export const StyledLi = styled.li`
  padding: 0 1.5rem;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tintSecondary.dark9};
  }

  background-color: ${({ isHighlighted, theme }) =>
    isHighlighted
      ? theme.colors.tintSecondary.dark5
      : theme.colors.tintSecondary.dark4d};
`;

const SearchResultsItem = React.forwardRef(
  ({ data, isHighlighted, ...props }, ref) => {
    return (
      <StyledLi ref={ref} isHighlighted={isHighlighted} {...props}>
        <CoinId data={data} isSearchResult />
      </StyledLi>
    );
  }
);

export default SearchResultsItem;
