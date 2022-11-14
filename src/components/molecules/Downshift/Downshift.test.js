import { render, screen, fireEvent } from 'test-utils';
import Downshift from './Downshift';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';
import { filterByCoinNameOrCode } from 'helpers/coinsData';

const findCoins = (query) => {
  return filterByCoinNameOrCode(coinsCurPageCoinsList, query);
};

describe('Downshift', () => {
  it('Renders the component', () => {
    render(
      <Downshift findCoins={findCoins} isSearch placeholder="placeholder" />
    );
    screen.getByPlaceholderText('placeholder');
  });

  it('Displays input value equal to entered value', () => {
    render(
      <Downshift
        findCoins={findCoins}
        isSearch
        placeholder="Search a coin..."
      />
    );
    const searchCoin = screen.getByPlaceholderText('Search a coin...');

    fireEvent.change(searchCoin, {
      target: { value: 'BTC' },
    });
    screen.getByDisplayValue('BTC');
  });

  it('Displays searched coin', () => {
    render(
      <Downshift findCoins={findCoins} isSearch placeholder="Search..." />
    );
    const searchCoin = screen.getByPlaceholderText('Search...');

    fireEvent.change(searchCoin, {
      target: { value: 'BT' },
    });
    screen.getByText('Bitcoin');

    fireEvent.change(searchCoin, {
      target: { value: 'Et' },
    });
    screen.getByText('Ethereum');
  });
});
