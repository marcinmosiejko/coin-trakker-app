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

const CoinsTable = ({ data }) => {
  const { tableRef, tableContainerRef, isSticky, leftPosition } =
    useStickyTableHead();

  return (
    <TableWrapper>
      <TableContainer ref={tableContainerRef}>
        <Table ref={tableRef}>
          <caption>Live Crypto Prices</caption>
          {data ? (
            <>
              <TableHead />
              <tbody>
                {data.map((crypto) => (
                  <TableRow key={crypto.name + crypto.symbol} data={crypto} />
                ))}
              </tbody>
            </>
          ) : null}
        </Table>

        {isSticky && (
          <StickyTable leftPosition={leftPosition}>
            <TableHead />
          </StickyTable>
        )}
        <SideShadow />
      </TableContainer>
    </TableWrapper>
  );
};

export default CoinsTable;
