import { theme } from 'assets/styles/theme';

export const getChartConfig = (chartDataset) => {
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
      },
    },
  };

  const labels = ['1', '2', '3', '4', '5', '6', '7'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
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
