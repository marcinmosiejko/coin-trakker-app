import { render, screen } from 'test-utils';
import ShowWatchlist from './ShowWatchlist';
import { theme } from 'assets/styles/theme';

describe('RankAndWatch', () => {
  it('Renders the component', () => {
    render(<ShowWatchlist />);
    screen.getByText('Watchlist');
  });

  it('Renders grey star when showWatchlist is false', () => {
    render(<ShowWatchlist />);
    expect(screen.getByTestId('watchlistIcon')).toHaveStyle(
      `fill: ${theme.colors.secondary}`
    );
  });

  it('Renders yellow star when showWatchlist is true', () => {
    render(<ShowWatchlist showWatchlist />);
    expect(screen.getByTestId('watchlistIcon')).toHaveStyle(
      `fill: ${theme.colors.yellow}`
    );
  });
});
