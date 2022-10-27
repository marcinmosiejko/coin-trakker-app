import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';

export const WrapperWide = styled.div`
  min-width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: ${breakPoints.sm}) {
    display: none;
  }
`;

export const WrapperNarrow = styled.div`
  display: none;

  @media only screen and (max-width: ${breakPoints.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 0.2rem;
  }
`;

export const Rate = styled.div`
  font-size: 4.2rem;

  @media only screen and (max-width: ${breakPoints.l}) {
    font-size: 3.8rem;
  }
`;
