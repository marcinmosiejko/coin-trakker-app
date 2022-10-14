import React from 'react';
import TableRow from 'components/atoms/TableRow/TableRow';
import { Table } from './CoinsTable.styles';
import { StyledRank } from 'components/atoms/TableRow/TableRow.styles';
import { StyledTd } from 'components/atoms/StyledTd/StyledTd';

const CoinsTable = ({ data }) => {
  return (
    <Table>
      {data ? (
        <>
          <thead>
            <tr>
              <StyledRank>#</StyledRank>
              <StyledTd isLeft>Coin</StyledTd>
              <StyledTd>Price</StyledTd>
              <StyledTd>Market Cap</StyledTd>
              <StyledTd>Volume 24h</StyledTd>
              <StyledTd>24h</StyledTd>
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
