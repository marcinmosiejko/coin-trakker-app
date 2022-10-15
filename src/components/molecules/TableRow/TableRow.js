import React from 'react';
import {
  round,
  roundPrice,
  roundMarketCapAndVol,
  getPercentageChange,
} from 'helpers/general';
import { StyledRow } from './TableRow.styles';
import { StyledRank } from 'components/atoms/StyledRank/StyledRank';
import { StyledTd } from '../../atoms/StyledTd/StyledTd';
import { StyledPrice } from 'components/atoms/StyledPrice/StyledPrice';
import { StyledCapAndVol } from 'components/atoms/StyledCapAndVol/StyledCapAndVol';
import { Styled24h } from 'components/atoms/Styled24h/Styled24h';
import CoinBody from 'components/atoms/CoinBody/CoinBody';

const TableRow = ({
  data,
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
      <CoinBody data={data} />
      <StyledPrice>${roundPrice(rate)}</StyledPrice>
      <StyledCapAndVol>{roundMarketCapAndVol(cap)}</StyledCapAndVol>
      <StyledCapAndVol>{roundMarketCapAndVol(volume)}</StyledCapAndVol>
      <Styled24h change={day}>{round(getPercentageChange(day))}%</Styled24h>
      <StyledTd>7d</StyledTd>
    </StyledRow>
  );
};

export default TableRow;
