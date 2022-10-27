import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './PriceChangeStats.styles';
import { getPercentageChange } from 'helpers/general';
import CoinDataPoint from 'components/atoms/CoinDataPoint/CoinDataPoint';

const PriceChangeStats = ({
  data: { hour, day, week, month, quarter, year },
}) => {
  return (
    <Wrapper>
      <CoinDataPoint
        dataPoint={`${getPercentageChange(hour)}%`}
        description="1H"
        change={hour}
      />
      <CoinDataPoint
        dataPoint={`${getPercentageChange(day)}%`}
        description="24H"
        change={day}
      />
      <CoinDataPoint
        dataPoint={`${getPercentageChange(week)}%`}
        description="7D"
        change={week}
      />
      <CoinDataPoint
        dataPoint={`${getPercentageChange(month)}%`}
        description="30D"
        change={month}
      />
      <CoinDataPoint
        dataPoint={`${getPercentageChange(quarter)}%`}
        description="90D"
        change={quarter}
      />
      <CoinDataPoint
        dataPoint={`${getPercentageChange(year)}%`}
        description="1Y"
        change={year}
      />
    </Wrapper>
  );
};

PriceChangeStats.propTypes = {
  hour: PropTypes.number,
  day: PropTypes.number,
  week: PropTypes.number,
  month: PropTypes.number,
  quarter: PropTypes.number,
  year: PropTypes.number,
};

export default PriceChangeStats;
