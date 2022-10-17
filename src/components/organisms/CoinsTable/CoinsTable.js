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
import Spinner from 'components/atoms/Spinner/Spinner';

const CoinsTable = () => {
  const { pageCoinsList } = useLcwCoinsList();
  const { tableRef, tableContainerRef, isSticky, leftPosition } =
    useStickyTableHead();

  return (
    <TableWrapper>
      {!pageCoinsList && <Spinner />}
      <TableContainer ref={tableContainerRef}>
        {pageCoinsList && <SideShadow />}
        <Table ref={tableRef}>
          {pageCoinsList && (
            <>
              <TableHead />
              <tbody>
                {pageCoinsList.map((crypto) => (
                  <TableRow key={crypto.name + crypto.symbol} data={crypto} />
                ))}
              </tbody>
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
