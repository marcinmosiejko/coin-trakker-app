import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './CoinMainStats.styles';
import CoinDataPoint from 'components/atoms/CoinDataPoint/CoinDataPoint';
import { roundLargeValue } from 'helpers/general';

const CoinMainStats = ({
  data,
  data: { cap, volume, circulatingSupply, totalSupply, maxSupply, rate },
}) => {
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
        description="CIRC. SUPPLY"
        dataPoint={`${roundLargeValue(circulatingSupply)}`}
      />

      <CoinDataPoint
        description="TOTAL SUPPLY"
        dataPoint={`${roundLargeValue(totalSupply)}`}
      />
      <CoinDataPoint
        description="MAX SUPPLY"
        dataPoint={`${roundLargeValue(maxSupply)}`}
      />
      <CoinDataPoint
        description="TOTAL MCAP"
        dataPoint={`$${roundLargeValue(totalSupply * rate)}`}
      />
    </Wrapper>
  );
};

CoinMainStats.propTypes = {
  cap: PropTypes.number,
  volume: PropTypes.number,
  circulatingSupply: PropTypes.number,
  totalSupply: PropTypes.number,
};

export default CoinMainStats;
