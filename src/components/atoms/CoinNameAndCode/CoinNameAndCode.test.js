import { render, screen } from 'test-utils';
import CoinNameAndCode from './CoinNameAndCode';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';

describe('CoinDataPoint', () => {
  it('Renders the isCoinDetails component', () => {
    coinsCurPageCoinsList.forEach((coin) => {
      render(
        <CoinNameAndCode name={coin.name} code={coin.code} isCoinDetails />
      );
      screen.getByText(coin.code);
    });
  });

  it('Renders the isSearchResult component', () => {
    coinsCurPageCoinsList.forEach((coin) => {
      render(
        <CoinNameAndCode name={coin.name} code={coin.code} isCoinDetails />
      );
      screen.getByText(coin.code);
    });
  });

  it('Properly truncates coin name', () => {
    render(
      <CoinNameAndCode
        name="New Crazy Long Bitcoin Name"
        code="LBTC"
        maxNameLength={15}
        isSearchResult
      />
    );
    screen.getByText('New Crazy Lo...');
  });
});
