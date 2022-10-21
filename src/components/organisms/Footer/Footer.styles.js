import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light8};
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: center;
  align-items: center;
`;
