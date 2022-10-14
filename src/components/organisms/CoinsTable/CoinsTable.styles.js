import styled from 'styled-components';

export const Table = styled.table`
  width: 96%;
  border-collapse: collapse;
  padding: 2rem;

  td {
    padding: 1.6rem 2rem;
  }

  thead {
    tr {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.tintSecondary.light11};
    }

    td {
      padding-bottom: 1rem;
    }
  }

  tbody tr:first-of-type {
    td {
      padding-top: 2.2rem;
    }
  }
`;
