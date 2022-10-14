import styled from 'styled-components';

export const StyledTd = styled.td`
  width: 8rem;
  text-align: ${({ isLeft }) => (isLeft ? 'left' : 'right')};
`;
