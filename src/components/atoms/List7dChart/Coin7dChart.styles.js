import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  canvas {
    // Without this, on (random) re-renders charts would be rendered in default (large) size and then adjusted / replaced with proper ones resulting in unexpected behavior (like table having much larger width for a moment, which makes scrollbar visible / making it different size for a brief moment)
    height: 6rem !important;
    width: 14rem !important;
  }
`;
