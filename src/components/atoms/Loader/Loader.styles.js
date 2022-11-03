import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ width }) => (width ? width : '100%')};
    fill: ${({ theme }) => theme.colors.primary};
    height: auto;
    stroke-linecap: round;
  }
`;
