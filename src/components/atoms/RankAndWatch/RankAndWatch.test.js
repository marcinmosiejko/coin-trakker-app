import { render, screen } from 'test-utils';
import RankAndWatch from './RankAndWatch';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';
import { theme } from 'assets/styles/theme';

describe('RankAndWatch', () => {
  it('Renders the component', () => {
    coinsCurPageCoinsList.forEach((coin) => {
      render(<RankAndWatch coinCode={coin.code}>{coin.rank}</RankAndWatch>);
      screen.getByText(coin.rank);
    });
  });

  it('Renders grey when NOT onWatchlist', () => {
    coinsCurPageCoinsList.forEach((coin) => {
      render(<RankAndWatch coinCode={coin.code}>{coin.rank}</RankAndWatch>);
      expect(screen.getByTestId(coin.code)).toHaveStyle(
        `fill: ${theme.colors.secondary}`
      );
    });
  });

  it('Renders yellow when onWatchlist', () => {
    coinsCurPageCoinsList.forEach((coin) => {
      render(
        <RankAndWatch onWatchlist coinCode={coin.code}>
          {coin.rank}
        </RankAndWatch>
      );
      expect(screen.getByTestId(coin.code)).toHaveStyle(
        `fill: ${theme.colors.yellow}`
      );
    });
  });
});
