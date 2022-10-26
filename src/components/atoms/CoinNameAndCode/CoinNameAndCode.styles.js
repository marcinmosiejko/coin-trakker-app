import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;

  text-align: left;
`;

export const Code = styled.div`
  font-size: 1.7rem;
  color: ${({ theme, isCoinDetails }) => {
    if (!isCoinDetails) return theme.colors.tintSecondary.light1;
    return theme.colors.tintSecondary.light10;
  }};
`;

export const Name = styled.div`
  font-size: ${({ isCoinDetails, isSearchResult }) => {
    if (isCoinDetails) return '2.8rem';
    if (isSearchResult) return '1.4rem';
    return ' 1.3rem';
  }};
  color: ${({ theme, isCoinDetails }) => {
    if (isCoinDetails) return theme.colors.tintSecondary.light1;
    return theme.colors.tintSecondary.light10;
  }};
`;
