import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  display: block;
  height: 1.4rem;
  font-size: 1.4rem;
  margin: 0.2rem 0 2rem;
`;
