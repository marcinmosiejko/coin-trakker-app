import { render, screen } from 'test-utils';
import CoinDataPoint from './CoinDataPoint';

describe('CoinDataPoint', () => {
  it('Renders the component', () => {
    render(
      <CoinDataPoint dataPoint="$123 B" description="MCAP" change={1.2} />
    );
    screen.getByText('$123 B');
    screen.getByText('MCAP');
  });
});
