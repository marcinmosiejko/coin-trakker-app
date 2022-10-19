import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.tintSecondary.light11};

  display: flex;
  justify-content: center;

  svg {
    height: 2.6rem;
    stroke-width: 1px;
    opacity: 0.95;
    stroke: ${({ theme, isOnWatchlist }) => {
      if (isOnWatchlist) return theme.colors.yellow;
      if (!isOnWatchlist) return theme.colors.tintSecondary.light11;
    }};
    fill: ${({ theme, isOnWatchlist }) => {
      if (isOnWatchlist) return theme.colors.yellow;
      if (!isOnWatchlist) return theme.colors.secondary;
    }};

    transition: all 0.3s;

    cursor: pointer;
  }
`;
