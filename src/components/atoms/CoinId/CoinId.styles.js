import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakPoints } from 'assets/styles/breakPoints';

export const Wrapper = styled.div`
  width: ${({ isCoinDetails }) => {
    if (isCoinDetails) return '18rem';
    return '13rem';
  }};
  height: ${({ isSearchResult }) => {
    if (isSearchResult) return '7rem';
  }};

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const StyledImage = styled.img`
  width: ${({ isCoinDetails }) => {
    if (isCoinDetails) return '4.8rem';
    return ' 2.8rem';
  }};

  @media only screen and (max-width: ${breakPoints.l}) {
    font-size: ${({ isCoinDetails }) => {
      if (isCoinDetails) return '4rem';
      return ' 2.8rem';
    }};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
