import React from 'react';
import { Wrapper, Description, DataPoint } from './CoinDataPoint.styles';

const CoinDataPoint = ({ dataPoint, description, change }) => {
  return (
    <Wrapper>
      <Description>{description}</Description>
      <DataPoint change={change}>{dataPoint}</DataPoint>
    </Wrapper>
  );
};

export default CoinDataPoint;
