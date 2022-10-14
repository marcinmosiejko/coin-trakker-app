import React from 'react';
import TableRow from 'components/molecules/TableRow/TableRow';
import { Table } from './CoinsTable.styles';
import { StyledTd } from 'components/atoms/StyledTd/StyledTd';
import { StyledRank } from 'components/atoms/StyledRank/StyledRank';
import { StyledPrice } from 'components/atoms/StyledPrice/StyledPrice';
import { StyledCapAndVol } from 'components/atoms/StyledCapAndVol/StyledCapAndVol';
import { Styled24h } from 'components/atoms/Styled24h/Styled24h';

const CoinsTable = ({ data }) => {
  return (
    <Table>
      {data ? (
        <>
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
  );
};

export default CoinsTable;
