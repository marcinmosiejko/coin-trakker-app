import styled from 'styled-components';

export const TableHeadRow = styled.tr`
  font-size: 1.4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.tintSecondary.dark4};
  border-top: 2px solid ${({ theme }) => theme.colors.tintSecondary.dark4};

  th {
    padding: 0.8rem 1.5rem;
    padding-top: 1.6rem !important;
  }
`;
