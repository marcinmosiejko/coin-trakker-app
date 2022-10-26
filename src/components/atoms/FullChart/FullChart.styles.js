import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ChartWrapper = styled.div`
  padding: 2rem 1.5rem 1.5rem;
  width: 100%;
  min-width: 25rem;
  background-color: ${({ theme }) => theme.colors.tintSecondary.dark5};

  canvas {
    // Without this, on (random) re-renders charts would be rendered in default (large) size and then adjusted / replaced with proper ones resulting in unexpected behavior
    height: 20rem !important;
  }
`;

export const ChartCaption = styled.div`
  padding-top: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.tintSecondary.light11};
`;
