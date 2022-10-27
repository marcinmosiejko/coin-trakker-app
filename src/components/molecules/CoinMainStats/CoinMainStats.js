import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './CoinMainStats.styles';
import CoinDataPoint from 'components/atoms/CoinDataPoint/CoinDataPoint';
import { roundLargeValue, RoundSmallValue } from 'helpers/general';

const CoinMainStats = ({ data: { cap, volume, allTimeHighUSD } }) => {
  return (
    <Wrapper>
      <CoinDataPoint
        description="MARKET CAP"
        dataPoint={`${roundLargeValue(cap)}`}
      />
      <CoinDataPoint
        description="24H VOLUME"
        dataPoint={`$${roundLargeValue(volume)}`}
      />
      <CoinDataPoint
        description="ALL TIME HIGH"
        dataPoint={`$${RoundSmallValue(allTimeHighUSD)}`}
      />
    </Wrapper>
  );
};

CoinMainStats.propTypes = {
  cap: PropTypes.number,
  volume: PropTypes.number,
  allTimeHighUSD: PropTypes.number,
};

export default CoinMainStats;
