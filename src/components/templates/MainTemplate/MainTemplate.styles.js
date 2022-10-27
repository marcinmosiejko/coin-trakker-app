import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 28rem;
  min-height: 100vh;
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
