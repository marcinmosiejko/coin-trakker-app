import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  box-shadow: inset -20px 0px 10px -14px rgba(19, 22, 30, 0.9);
`;

export const Table = styled.table`
  width: 100%;
  min-width: 90rem;
  border-collapse: collapse;

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
