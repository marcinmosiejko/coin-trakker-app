import styled from 'styled-components';
import { scrollbar } from 'assets/styles/mixins';

export const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SearchResultsWrapper = styled.ul`
  width: 100%;
  max-height: 20rem;
  overflow: auto;
  position: absolute;
  z-index: 9;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.colors.tintSecondary.dark4};
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  ${scrollbar}
`;

export const SelectedCoin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(1rem, 0.85rem);

  img {
    border: none;
    width: 2.6rem;
    height: 2.6rem;
  }

  div {
    border: 1px solid ${({ theme }) => theme.colors.tintSecondary.dark9};
    border-radius: 50%;
    width: 2.6rem;
    height: 2.6rem;
  }
`;
