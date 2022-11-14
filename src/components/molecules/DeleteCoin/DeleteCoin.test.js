import { render, screen } from 'test-utils';
import DeleteCoin from './DeleteCoin';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';

describe('DeleteCoin', () => {
  it('Renders the component', () => {
    render(<DeleteCoin coinData={coinsCurPageCoinsList.at(0)} />);
  });

  it("Renders component's content", () => {
    render(<DeleteCoin coinData={coinsCurPageCoinsList.at(0)} />);
    screen.getByText('Delete Coin');
    screen.getByText('Are you sure you want to delete?');
    screen.getByText('BTC');
    screen.getByText('Delete');
    screen.getByText('Cancel');
  });
});
