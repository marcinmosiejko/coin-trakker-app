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
import { useLcwCoinsList } from 'hooks/useLcwCoinsList';

const CoinsTable = () => {
  const { pageCoinsList } = useLcwCoinsList();
  const { tableRef, tableContainerRef, isSticky, leftPosition } =
    useStickyTableHead();

  return (
    <TableWrapper>
      <TableContainer ref={tableContainerRef}>
        <Table ref={tableRef}>
          {pageCoinsList ? (
            <>
              <caption>Live Crypto Prices</caption>
              <TableHead />
              <tbody>
                {pageCoinsList.map((crypto) => (
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
