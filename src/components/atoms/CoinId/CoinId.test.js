import { render, screen } from 'test-utils';
import CoinId from './CoinId';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';

describe('CoinDataPoint', () => {
  it('Renders the component', () => {
    coinsCurPageCoinsList.forEach((coin) => {
      render(<CoinId data={coin} />);
      screen.getByText(coin.code);
    });
  });
});
