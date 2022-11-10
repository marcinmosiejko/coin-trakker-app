import styled from 'styled-components';
import { getChangeColor } from 'assets/styles/mixins';

const getTextAlign = (isLeft, isRight) => {
  if (isLeft) return 'left';
  if (isRight) return 'right';
  return 'center';
};

export const Td = styled.td`
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
  text-align: ${({ isLeft, isRight }) => getTextAlign(isLeft, isRight)};
  color: ${({ change, theme }) => getChangeColor(change, theme)};
`;

export const Th = styled.th`
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
  text-align: ${({ isLeft, isRight }) => getTextAlign(isLeft, isRight)};
  color: ${({ change, theme }) => getChangeColor(change, theme)};
`;
