import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.3rem 1.5rem 0.3rem 1.2rem;
  border: none;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.tintSecondary.light1};
  background-color: ${({ theme }) => theme.colors.tintSecondary.dark8};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tintSecondary.dark9};
  }
`;
