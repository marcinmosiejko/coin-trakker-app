import React, { useEffect, useState } from 'react';
import { Wrapper } from './Coin7dChart.styles';
import { useLcwCoinsList } from 'hooks/useLcwCoinsList';
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

const getChartDataset = (data, coinCode) => {
  return data?.find((item) => item.code === coinCode)?.history;
};

const Coin7dChart = ({ coinCode }) => {
  const { history7dCoinsList } = useLcwCoinsList();
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const chartDataset = getChartDataset(history7dCoinsList, coinCode);
    const { chartData, chartOptions } = getChartConfig(chartDataset);
    setChartData(chartData);
    setChartOptions(chartOptions);
  }, [history7dCoinsList, coinCode]);

  return (
    <Wrapper>
      {chartData && chartOptions ? (
        <Line options={chartOptions} data={chartData} />
      ) : null}
    </Wrapper>
  );
};

export default Coin7dChart;
