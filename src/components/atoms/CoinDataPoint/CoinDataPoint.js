import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Description, DataPoint } from './CoinDataPoint.styles';

const CoinDataPoint = ({ dataPoint, description, change, isS }) => {
  return (
    <Wrapper isS={isS}>
      <Description>{description}</Description>
      <DataPoint change={change}>{dataPoint}</DataPoint>
    </Wrapper>
  );
};

CoinDataPoint.propTypes = {
  dataPoint: PropTypes.string,
  description: PropTypes.string,
  change: PropTypes.number,
};

export default CoinDataPoint;
