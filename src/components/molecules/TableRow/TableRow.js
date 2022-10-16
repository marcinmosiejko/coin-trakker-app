import React from 'react';
import {
  round,
  roundPrice,
  roundMarketCapAndVol,
  getPercentageChange,
} from 'helpers/general';
import { StyledRow } from './TableRow.styles';
import CoinBody from 'components/atoms/CoinBody/CoinBody';
import TdTh from 'components/atoms/TdTh.js/TdTh';

const TableRow = ({
  data,
  data: {
    rank,
    rate,
    cap,
    volume,
    delta: { day },
  },
}) => {
  return (
    <StyledRow>
      <TdTh type="rank">{rank}</TdTh>
      <CoinBody data={data} />
      <TdTh type="rate" isRight>
        ${roundPrice(rate)}
      </TdTh>
      <TdTh type="cap" isRight>
        {roundMarketCapAndVol(cap)}
      </TdTh>
      <TdTh type="vol" isRight>
        {roundMarketCapAndVol(volume)}
      </TdTh>
      <TdTh type="vol" isRight change={day}>
        {round(getPercentageChange(day))}%
      </TdTh>
      {/* <TdTh isRight>7d</TdTh> */}
    </StyledRow>
  );
};

export default TableRow;
