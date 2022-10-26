import { theme } from 'assets/styles/theme';
import { RoundSmallValue } from './general';

export const getTableChartConfig = (chartDataset) => {
  const color =
    chartDataset?.at(0) > chartDataset?.at(-1)
      ? theme.colors.red
      : theme.colors.primary;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    animation: true,
    scales: { x: { display: false }, y: { display: false } },
    elements: {
      point: {
        display: false,
        hoverRadius: 0,
      },
    },
    layout: {
      padding: 0,
    },
    interaction: {
      intersect: false,
    },
  };

  const labels = chartDataset?.map((dp, i) => i);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price Action',
        data: chartDataset,
        borderColor: color,
        fill: true,
        backgroundColor: 'rgba(99, 230, 190, 0.1)',
        borderWidth: 1,
        pointRadius: 0,
        tension: 0,
      },
    ],
  };

  return { chartOptions: options, chartData: data };
};

export const getFullChartConfig = (chartDataset) => {
  const color =
    chartDataset?.at(0) > chartDataset?.at(-1)
      ? theme.colors.red
      : theme.colors.primary;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 3,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    animation: true,
    scales: {
      x: { display: false },
      y: {
        display: true,
        ticks: {
          color: `${theme.colors.tintSecondary.light7}`,
          font: { family: 'Roboto', size: '13' },
          maxTicksLimit: 7,
          callback: function (value) {
            return '$' + RoundSmallValue(value);
          },
        },
      },
    },
    elements: {
      point: {
        display: true,
        hoverRadius: 0,
      },
    },
    layout: {
      padding: 0,
    },
    // tooltips: { enabled: true, intersect: false },
  };

  const labels = chartDataset?.map((dp, i) => i);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: chartDataset,
        borderColor: color,
        fill: true,
        backgroundColor: color,
        borderWidth: 1,
        pointRadius: 0,
        tension: 0,
      },
    ],
  };

  return { chartOptions: options, chartData: data };
};
