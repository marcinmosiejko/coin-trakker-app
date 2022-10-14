import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95%;
  max-width: 100rem;
  min-height: 100rem;
  padding: 2rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: auto;

  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  button {
    cursor: pointer;
    padding: 0.2rem 2rem;
  }
`;
