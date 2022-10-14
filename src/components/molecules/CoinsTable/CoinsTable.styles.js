import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  thead {
    tr {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.tintSecondary.light11};
    }

    td {
      padding: 1rem 2rem;
    }
  }

  tbody tr:first-of-type {
    td {
      padding-top: 2.2rem;
    }
  }
`;
