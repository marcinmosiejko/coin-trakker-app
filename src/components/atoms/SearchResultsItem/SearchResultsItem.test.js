import { render, screen } from 'test-utils';
import SearchResultsItem from './SearchResultsItem';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';

describe('SearchResultsItem', () => {
  it('Renders the component', () => {
    coinsCurPageCoinsList.forEach((coin) => {
      render(<SearchResultsItem data={coin} />);
      screen.getByText(coin.code);
    });
  });
});
