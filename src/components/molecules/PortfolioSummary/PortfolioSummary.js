import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  TotalValue,
  Description,
  Value,
} from './PortfolioSummary.styles';
import { roundLargeValue } from 'helpers/general';

const PortfolioSummary = ({ data }) => {
  return (
    <Wrapper>
      <TotalValue>
        <Description>Total Value</Description>
        <Value>${roundLargeValue(data.totalValue)}</Value>
      </TotalValue>
    </Wrapper>
  );
};

PortfolioSummary.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSummary;
