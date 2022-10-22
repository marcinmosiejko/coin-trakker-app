import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.6rem;
  width: 100%;
  padding: 1.3rem 1.3rem;
  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.tintSecondary.light2};
  background-color: ${({ theme }) => theme.colors.tintSecondary.dark4};

  &:focus {
    outline: none;
    box-shadow: -2px 2px 10px rgba(115, 124, 142, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.tintSecondary.light13};
  }
`;
