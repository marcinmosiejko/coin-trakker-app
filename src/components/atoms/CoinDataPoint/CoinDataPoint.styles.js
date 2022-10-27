import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';
import { getChangeColor } from 'assets/styles/mixins';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media only screen and (max-width: ${breakPoints.sm}) {
    &:last-child {
      display: none;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light10};
`;

export const DataPoint = styled.div`
  font-size: 2rem;
  color: ${({ theme, change }) => getChangeColor(change, theme)};
`;
