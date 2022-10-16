import React from 'react';
import TableRow from 'components/molecules/TableRow/TableRow';
import {
  Table,
  TableWrapper,
  TableContainer,
  StickyTable,
  SideShadow,
} from './CoinsTable.styles';
import { StyledTd } from 'components/atoms/StyledTd/StyledTd';
import { StyledRank } from 'components/atoms/StyledRank/StyledRank';
import { StyledPrice } from 'components/atoms/StyledPrice/StyledPrice';
import { StyledCapAndVol } from 'components/atoms/StyledCapAndVol/StyledCapAndVol';
import { Styled24h } from 'components/atoms/Styled24h/Styled24h';
import useStickyTableHead from 'hooks/useStickyTableHead';

const CoinsTable = ({ data }) => {
  const { tableRef, tableContainerRef, isSticky, leftPosition } =
    useStickyTableHead();

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          <StyledRank>#</StyledRank>
          <StyledTd isLeft>Coin</StyledTd>
          <StyledPrice>Price</StyledPrice>
          <StyledCapAndVol>Market Cap</StyledCapAndVol>
          <StyledCapAndVol>Volume 24h</StyledCapAndVol>
          <Styled24h>24h</Styled24h>
          <StyledTd>7d</StyledTd>
        </tr>
      </thead>
    );
  };

  return (
    <TableWrapper>
      <TableContainer ref={tableContainerRef}>
        <Table ref={tableRef}>
          <caption>Live Crypto Prices</caption>
          {data ? (
            <>
              {renderHeader()}
              <tbody>
                {data.map((crypto) => (
                  <TableRow
                    key={crypto.name + crypto.cap + crypto.rate}
                    data={crypto}
                  />
                ))}
              </tbody>
            </>
          ) : null}
        </Table>

        {isSticky && (
          <StickyTable leftPosition={leftPosition}>
            {renderHeader()}
          </StickyTable>
        )}

        <SideShadow />
      </TableContainer>
    </TableWrapper>
  );
};

export default CoinsTable;
