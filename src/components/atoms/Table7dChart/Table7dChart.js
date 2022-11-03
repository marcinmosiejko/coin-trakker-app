import React, { useEffect, useState } from 'react';
import { Wrapper } from './Table7dChart.styles';
import { useOnPageErrors } from 'hooks/useOnPageError';
import { getTableChartConfig } from 'helpers/chartConfig';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';
import PageError from 'components/molecules/PageError/PageError';
import Spinner from '../Spinner/Spinner';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const Table7dChart = ({ chartDataset }) => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);
  const { onPageErrors, resetOnPageError } = useOnPageErrors();

  useEffect(() => {
    const { chartData, chartOptions } = getTableChartConfig(chartDataset);
    setChartData(chartData);
    setChartOptions(chartOptions);

    return resetOnPageError('history7dData');
  }, [chartDataset, resetOnPageError]);

  return (
    <Wrapper>
      {onPageErrors.history7dData?.isError && !chartDataset ? (
        <PageError message="Data unavailable ;(" hasIcon={false} isS isDark />
      ) : (
        <>
          {chartData && chartOptions ? (
            <Line options={chartOptions} data={chartData} />
          ) : (
            <Spinner width="2.8rem" />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Table7dChart;
