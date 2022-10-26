import { getChangeColor } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Description = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light10};
`;

export const DataPoint = styled.div`
  font-size: 2rem;
  color: ${({ theme, change }) => getChangeColor(change, theme)};
`;
