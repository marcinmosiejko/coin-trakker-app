import styled from 'styled-components';

export const StyledRow = styled.tr`
  font-size: 1.4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.tintSecondary.dark4};
  border-top: 2px solid ${({ theme }) => theme.colors.tintSecondary.dark4};

  td {
    padding: 1.6rem 0 1rem;
  }
`;
