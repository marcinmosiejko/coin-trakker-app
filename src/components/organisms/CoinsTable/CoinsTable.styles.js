import styled from 'styled-components';
import { scrollbar } from 'assets/styles/mixins';
import { breakPoints } from 'assets/styles/breakPoints';

export const TableWrapper = styled.div`
  min-height: 50rem;
  width: 100%;
  position: relative;

  table {
    table-layout: fixed;
    width: 91rem;
    border-collapse: collapse;

    td {
      padding: 0.8rem 1.5rem;
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;

  overflow: auto;
  ${scrollbar}
`;

export const Table = styled.table`
  caption {
    padding: 2rem 0 3.2rem;
    caption-side: bottom;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.colors.tintSecondary.light11};
  }

  /* tbody {
    tr:first-of-type {
      td {
        padding-top: 2rem;
      }
    }
  } */
`;

export const StickyTable = styled.table`
  position: fixed;
  top: 0;
  z-index: 10;
  left: ${({ leftPosition }) => `${leftPosition / 10}rem`};

  background-color: ${({ theme }) => theme.colors.secondary};

  thead tr {
    border-top: none;
  }
`;

export const SideShadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 100%;
  box-shadow: inset -20px 0px 10px -14px rgba(19, 22, 30, 0.9);

  @media only screen and (max-width: ${breakPoints.s}) {
    // Fixes 1px gap on small screens
    transform: translateX(1px);
  }
`;
