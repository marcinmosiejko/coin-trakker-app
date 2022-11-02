import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.tintSecondary.light11};

  display: flex;
  justify-content: center;

  svg {
    height: 16rem;
    stroke-width: 1px;
    opacity: 0.95;
    stroke: ${({ theme }) => theme.colors.tintPrimary.light10};
    fill: none;
    opacity: 0.8;

    transition: all 0.15s;
  }
`;
