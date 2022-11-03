import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ChartWrapper, ChartCaption } from './FullChart.styles';
import { useOnPageErrors } from 'hooks/useOnPageError';
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
import PageError from 'components/molecules/PageError/PageError';
import Spinner from '../Spinner/Spinner';

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
  const { onPageErrors, resetOnPageError } = useOnPageErrors();

  useEffect(() => {
    if (!chartDataset) return;
    const { chartData, chartOptions } = getFullChartConfig(chartDataset);
    setChartData(chartData);
    setChartOptions(chartOptions);

    return resetOnPageError('history7dData');
  }, [chartDataset]);

  return (
    <Wrapper>
      <ChartWrapper>
        {onPageErrors.history7dData?.isError && !chartDataset ? (
          <PageError
            isDark
            isS
            hasPageWrapper={false}
            message="History data is not available. We sincerely apologize for your
              inconvinience."
          />
        ) : (
          <>
            {chartData && chartOptions ? (
              <Line options={chartOptions} data={chartData} />
            ) : (
              <Spinner width="16rem" padding="2rem" />
            )}
            <ChartCaption>7D Live Chart</ChartCaption>
          </>
        )}
      </ChartWrapper>
    </Wrapper>
  );
};

FullChart.propTypes = {
  chartDataset: PropTypes.array,
};

export default FullChart;
