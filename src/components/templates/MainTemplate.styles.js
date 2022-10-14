import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  min-width: 95rem;

  background-color: ${({ theme }) => theme.colors.tintSecondary.dark3};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10rem;
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.footer`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: center;
  align-items: center;
`;
