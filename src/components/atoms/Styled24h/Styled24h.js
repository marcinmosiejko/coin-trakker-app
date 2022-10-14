import styled from 'styled-components';

export const Styled24h = styled.td`
  width: 10rem;
  text-align: right;

  color: ${({ change, theme }) => {
    if (change < 1) return theme.colors.red;
    if (change >= 1) return theme.colors.primary;
  }};
`;
