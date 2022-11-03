import React from 'react';
import {
  StyledTable,
  TableWrapper,
  TableContainer,
  StickyTable,
  SideShadow,
} from './Table.styles';
import useStickyTableHead from 'hooks/useStickyTableHead';
import CoinsTableHead from 'components/molecules/CoinsTableHead/CoinsTableHead';
import Spinner from 'components/atoms/Spinner/Spinner';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';

const Table = ({ data, tableRef, children, isCoins, isPortfolio }) => {
  const { tableContainerRef, isSticky, leftPosition } = useStickyTableHead({
    tableRef,
    defaultSticky: false,
  });

  return (
    <TableWrapper>
      {!data && <Spinner padding="5rem 0" />}
      <TableContainer ref={tableContainerRef}>
        {data && <SideShadow />}
        <StyledTable ref={tableRef}>{children}</StyledTable>
        {isSticky && (
          <StickyTable leftPosition={leftPosition}>
            {isCoins ? <CoinsTableHead /> : null}
            {isPortfolio ? <PortfolioTableHead /> : null}
          </StickyTable>
        )}
      </TableContainer>
    </TableWrapper>
  );
};

export default Table;
