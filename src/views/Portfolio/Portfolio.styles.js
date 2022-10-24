import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 2rem 3rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
