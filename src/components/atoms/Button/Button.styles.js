import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ isL, isWide }) => {
    if (isL) return '1.2rem 1.2rem 1.2rem 1.2rem';
    if (isWide) return '0.3rem 2.8rem 0.3rem';
    return '0.3rem 1.2rem 0.3rem';
  }};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${({ isL }) => {
    if (isL) return '1.5rem';
    return '1.4rem';
  }};

  color: ${({ theme, isPrimary, isRed }) => {
    if (isPrimary || isRed) return theme.colors.tintSecondary.dark1;
    return theme.colors.tintSecondary.light1;
  }};
  background-color: ${({ theme, isPrimary, isRed }) => {
    if (isPrimary) return theme.colors.primary;
    if (isRed) return theme.colors.redDark;
    return theme.colors.tintSecondary.dark8;
  }};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: ${({ theme, isPrimary, isRed }) => {
      if (isPrimary) return theme.colors.tintPrimary.dark11;
      if (isRed) return theme.colors.red;
      return theme.colors.tintSecondary.dark9;
    }};
  }
`;
