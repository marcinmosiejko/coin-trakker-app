import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';

export const Wrapper = styled.div`
  /* margin-left: auto; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3.8rem;
  margin-bottom: 1.2rem;

  @media only screen and (max-width: ${breakPoints.xl}) {
    gap: 3.2rem;
    justify-content: start;
  }
`;
