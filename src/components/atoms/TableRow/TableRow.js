import React from 'react';
import {
  round,
  roundPrice,
  roundMarketCapAndVol,
  getPercentageChange,
} from 'helpers/helpers';
import { StyledRow, StyledRank } from './TableRow.styles';
import { StyledTd } from '../StyledTd/StyledTd';

const TableRow = ({
  data: {
    rank,
    name,
    rate,
    cap,
    volume,
    delta: { day },
  },
}) => {
  return (
    <StyledRow>
      <StyledRank>{rank}</StyledRank>
      <StyledTd isLeft>{name}</StyledTd>
      <StyledTd>${roundPrice(rate)}</StyledTd>
      <StyledTd>{roundMarketCapAndVol(cap)}</StyledTd>
      <StyledTd>{roundMarketCapAndVol(volume)}</StyledTd>
      <StyledTd>{round(getPercentageChange(day))}%</StyledTd>
      <StyledTd>7d</StyledTd>
    </StyledRow>
  );
};

export default TableRow;
