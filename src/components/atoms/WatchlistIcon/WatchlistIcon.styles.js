import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.tintSecondary.light11};

  display: flex;
  justify-content: center;

  svg {
    height: 2.6rem;
    stroke-width: 1px;
    opacity: 0.95;
    stroke: ${({ theme, isYellow }) => {
      if (isYellow) return theme.colors.yellow;
      if (!isYellow) return theme.colors.tintSecondary.light11;
    }};
    fill: ${({ theme, isYellow }) => {
      if (isYellow) return theme.colors.yellow;
      if (!isYellow) return theme.colors.secondary;
    }};

    transition: all 0.3s;

    cursor: pointer;
  }
`;
