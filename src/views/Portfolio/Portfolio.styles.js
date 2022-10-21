import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100rem;
  width: 100%;
  max-width: 96rem;
  padding: 3rem 2rem 3rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
`;
