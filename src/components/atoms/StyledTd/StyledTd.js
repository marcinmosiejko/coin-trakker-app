import styled from 'styled-components';

export const StyledTd = styled.td`
  text-align: ${({ isLeft }) => (isLeft ? 'left' : 'right')};
`;
