import React from 'react';
import TableRow from 'components/molecules/TableRow/TableRow';
import {
  Table,
  TableWrapper,
  TableContainer,
  StickyTable,
  SideShadow,
} from './CoinsTable.styles';
import useStickyTableHead from 'hooks/useStickyTableHead';
import TableHead from 'components/molecules/TableHead/TableHead';
import Spinner from 'components/atoms/Spinner/Spinner';
import TableBody from '../TableBody/TableBody';

const CoinsTable = ({ data, tableRef }) => {
  const { tableContainerRef, isSticky, leftPosition } = useStickyTableHead({
    tableRef,
    defaultSticky: false,
  });

  return (
    <TableWrapper>
      {!data && <Spinner />}
      <TableContainer ref={tableContainerRef}>
        {data && <SideShadow />}
        <Table ref={tableRef}>
          {data && (
            <>
              <TableHead />
              <TableBody data={data} />
              <caption>Live Crypto Prices</caption>
            </>
          )}
        </Table>
        {isSticky && (
          <StickyTable leftPosition={leftPosition}>
            <TableHead />
          </StickyTable>
        )}
      </TableContainer>
    </TableWrapper>
  );
};

export default CoinsTable;
