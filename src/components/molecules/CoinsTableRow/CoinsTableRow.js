import React from 'react';
import {
  RoundSmallValue,
  roundLargeValue,
  getPercentageChange,
} from 'helpers/general';
import { StyledRow } from './CoinsTableRow.styles';
import CoinId from 'components/atoms/CoinId/CoinId';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import Coin7dChart from 'components/atoms/List7dChart/Coin7dChart';
import RankAndWatch from 'components/atoms/RankAndWatch/RankAndWatch';

const CoinsTableRow = ({
  data,
  data: {
    rank,
    code,
    rate,
    cap,
    volume,
    delta: { day },
    history7d,
    onWatchlist,
  },
}) => {
  return (
    <StyledRow>
      <TdTh>
        <RankAndWatch onWatchlist={onWatchlist} coinCode={code}>
          {rank}
        </RankAndWatch>
      </TdTh>
      <TdTh>
        <CoinId isLink data={data} />
      </TdTh>
      <TdTh isRight>${RoundSmallValue(rate)}</TdTh>
      <TdTh isRight>${roundLargeValue(cap)}</TdTh>
      <TdTh isRight>${roundLargeValue(volume)}</TdTh>
      <TdTh isRight change={day}>
        {getPercentageChange(day)}%
      </TdTh>
      <TdTh isRight>
        <Coin7dChart chartDataset={history7d} />
      </TdTh>
    </StyledRow>
  );
};

export default CoinsTableRow;
