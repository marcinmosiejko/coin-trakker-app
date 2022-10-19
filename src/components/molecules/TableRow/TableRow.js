import React from 'react';
import {
  round,
  roundPrice,
  roundMarketCapAndVol,
  getPercentageChange,
} from 'helpers/general';
import { StyledRow } from './TableRow.styles';
import CoinID from 'components/atoms/CoinID/CoinID';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import Coin7dChart from 'components/atoms/List7dChart/Coin7dChart';
import RankAndWatch from 'components/atoms/RankAndWatch/RankAndWatch';

const TableRow = ({
  data,
  data: {
    rank,
    code,
    rate,
    cap,
    volume,
    delta: { day },
    history7d,
  },
}) => {
  return (
    <StyledRow>
      <TdTh type="rank">
        <RankAndWatch coinCode={code}>{rank}</RankAndWatch>
      </TdTh>
      <TdTh>
        <CoinID data={data} />
      </TdTh>
      <TdTh type="rate" isRight>
        ${roundPrice(rate)}
      </TdTh>
      <TdTh type="cap" isRight>
        ${roundMarketCapAndVol(cap)}
      </TdTh>
      <TdTh type="vol" isRight>
        ${roundMarketCapAndVol(volume)}
      </TdTh>
      <TdTh type="day" isRight change={day}>
        {round(getPercentageChange(day))}%
      </TdTh>
      <TdTh isRight>
        <Coin7dChart chartDataset={history7d} />
      </TdTh>
    </StyledRow>
  );
};

export default TableRow;
