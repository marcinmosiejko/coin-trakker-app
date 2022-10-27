import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ChartWrapper, ChartCaption } from './FullChart.styles';
import { getFullChartConfig } from 'helpers/chartConfig';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  // Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
  // Tooltip,
);

// ChartJS.defaults.font.size = '13';
// ChartJS.defaults.color = '#ffffff';

const FullChart = ({ chartDataset }) => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    if (!chartDataset) return;
    const { chartData, chartOptions } = getFullChartConfig(chartDataset);
    setChartData(chartData);
    setChartOptions(chartOptions);
  }, [chartDataset]);

  return (
    <Wrapper>
      <ChartWrapper>
        {chartData && chartOptions ? (
          <Line options={chartOptions} data={chartData} />
        ) : null}
        <ChartCaption>7D Live Chart</ChartCaption>
      </ChartWrapper>
    </Wrapper>
  );
};

FullChart.propTypes = {
  chartDataset: PropTypes.array,
};

export default FullChart;
