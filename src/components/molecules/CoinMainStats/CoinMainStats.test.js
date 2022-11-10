import { render, screen } from 'test-utils';
import CoinMainStats from './CoinMainStats';
import { roundLargeValue } from 'helpers/general';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';

describe('CoinMainStats', () => {
  it('Renders the component', () => {
    render(<CoinMainStats data={coinsCurPageCoinsList.at(0)} />);
    screen.getByText('MARKET CAP');
  });

  it('Renders entire content', () => {
    const coin = coinsCurPageCoinsList.at(0);
    const { cap, volume, circulatingSupply, totalSupply, maxSupply, rate } =
      coin;

    render(<CoinMainStats data={coin} />);
    screen.getByText('MARKET CAP');
    screen.getAllByText(`$${roundLargeValue(cap)}`);

    screen.getByText('24H VOLUME');
    screen.getByText(`$${roundLargeValue(volume)}`);

    screen.getByText('CIRC. SUPPLY');
    screen.getAllByText(roundLargeValue(circulatingSupply));

    screen.getByText('TOTAL SUPPLY');
    screen.getAllByText(roundLargeValue(totalSupply));

    screen.getByText('MAX SUPPLY');
    screen.getAllByText(roundLargeValue(maxSupply));

    screen.getByText('TOTAL MCAP');
    screen.getAllByText(`$${roundLargeValue(totalSupply * rate)}`);
  });
});
