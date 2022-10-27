import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';

export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 3.8rem;

  @media only screen and (max-width: ${breakPoints.m}) {
    margin-left: 0;
  }
`;
