import styled from 'styled-components';

const getWidth = (type, theme) => {
  const width = theme.tableStyle.coins.tdth.width[type];
  if (!width) return '15rem';
  return width;
};

const getTextAlign = (isLeft, isRight) => {
  if (isLeft) return 'left';
  if (isRight) return 'right';
  return 'center';
};

const getColor = (change, theme) => {
  if (!change) return '';
  if (change < 1) return theme.colors.red;
  if (change >= 1) return theme.colors.primary;
};

const getTdThStyles = () => {
  return ``;
};

export const Td = styled.td`
  width: ${({ type, theme }) => getWidth(type, theme)};

  text-align: ${({ isLeft, isRight }) => getTextAlign(isLeft, isRight)};

  color: ${({ change, theme }) => getColor(change, theme)};
`;

export const Th = styled.th`
  width: ${({ type, theme }) => getWidth(type, theme)};

  text-align: ${({ isLeft, isRight }) => getTextAlign(isLeft, isRight)};

  color: ${({ change, theme }) => getColor(change, theme)};
`;
