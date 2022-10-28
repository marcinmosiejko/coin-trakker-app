import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';

export const Wrapper = styled.div`
  text-align: right;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  column-gap: 4.8rem;
  row-gap: 2.4rem;

  @media only screen and (max-width: ${breakPoints.m}) {
    justify-content: start;
    text-align: left;
    column-gap: 4.2rem;
    row-gap: 2rem;
  }
`;
