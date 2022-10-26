import React, { useEffect, useState } from 'react';
import { Wrapper } from './FullChart.styles';
import { getFullChartConfig } from 'helpers/chartConfig';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

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
      {chartData && chartOptions ? (
        <Line options={chartOptions} data={chartData} />
      ) : null}
    </Wrapper>
  );
};

export default FullChart;
