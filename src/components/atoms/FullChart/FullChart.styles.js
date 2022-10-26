import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 60rem;
  background-color: ${({ theme }) => theme.colors.tintSecondary.dark5};

  canvas {
    // Without this, on (random) re-renders charts would be rendered in default (large) size and then adjusted / replaced with proper ones resulting in unexpected behavior
    height: 20rem !important;
  }
`;
