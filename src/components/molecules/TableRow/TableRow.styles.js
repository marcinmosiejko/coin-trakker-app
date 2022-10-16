import styled from 'styled-components';

export const StyledRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tintSecondary.dark3};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tintSecondary.dark7};
  }

  td {
    padding: 1.6rem 0;
  }
`;
