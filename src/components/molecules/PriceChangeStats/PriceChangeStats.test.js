import { render, screen } from 'test-utils';
import PriceChangeStats from './PriceChangeStats';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';

describe('PriceChangeStats', () => {
  it('Renders the component', () => {
    render(<PriceChangeStats data={coinsCurPageCoinsList.at(0).delta} />);
    screen.getByText('1H');
    screen.getByText('1Y');
  });
});
