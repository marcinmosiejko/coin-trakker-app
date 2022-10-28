import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.4rem;
  column-gap: 3.2rem;

  @media only screen and (max-width: ${breakPoints.m}) {
  }
`;
