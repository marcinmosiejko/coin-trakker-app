import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';

export const Wrapper = styled.div`
  margin-bottom: 4.8rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: ${breakPoints.m}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const Rate = styled.div`
  font-size: 4.8rem;

  @media only screen and (max-width: ${breakPoints.l}) {
    font-size: 3.8rem;
  }
`;

export const RankBackground = styled.div`
  position: absolute;
  top: -5rem;
  right: -8rem;
  transform: rotate(45deg);
  width: 20rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Rank = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  transform: rotate(45deg);
  z-index: 9;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.tintSecondary.dark1};
`;
