import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ padding }) => (padding ? padding : '1rem 0 2rem')};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ width }) => (width ? width : '100%')};
    height: auto;
    stroke-linecap: round;
  }

  circle {
    fill: none;
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 3.5;
    animation-name: preloader;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.4, -0.9, 0.2, 0);
    transform-origin: 170px 170px;
    will-change: transform;

    &:nth-of-type(1) {
      stroke-dasharray: 350px;
    }

    &:nth-of-type(2) {
      stroke-dasharray: 400px;
    }

    &:nth-of-type(3) {
      stroke-dasharray: 250px;
    }

    &:nth-of-type(4) {
      stroke-dasharray: 150px;
    }

    @for $i from 1 through 4 {
      &:nth-of-type(#{$i}) {
        animation-delay: -#{$i * 0.75}s;
      }
    }
  }

  @keyframes preloader {
    50% {
      transform: rotate(360deg);
    }
  }
`;
