import styled from 'styled-components';

export const StyledRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tintSecondary.dark3};

  td {
    padding: 1.6rem 2rem;
  }
`;

export const StyledRank = styled.td`
  text-align: center;
`;
