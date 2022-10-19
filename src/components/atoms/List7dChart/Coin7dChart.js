import React, { useEffect, useState } from 'react';
import { Wrapper } from './Coin7dChart.styles';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import { getChartConfig } from 'helpers/chartConfig';
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

const Coin7dChart = ({ chartDataset }) => {
  const { history7dCoinsList } = useLcwCoinsData();
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const { chartData, chartOptions } = getChartConfig(chartDataset);
    setChartData(chartData);
    setChartOptions(chartOptions);
  }, [history7dCoinsList, chartDataset]);

  return (
    <Wrapper>
      {chartData && chartOptions ? (
        <Line options={chartOptions} data={chartData} />
      ) : null}
    </Wrapper>
  );
};

export default Coin7dChart;
