import { render, screen } from 'test-utils';
import WatchlistIcon from './WatchlistIcon';
import { theme } from 'assets/styles/theme';

describe('WatchlistIcon', () => {
  it('Renders the component', () => {
    render(<WatchlistIcon />);
  });

  it('Renders grey fill when isYellow is false', () => {
    render(<WatchlistIcon />);
    expect(screen.getByTestId('watchlistIcon')).toHaveStyle(
      `fill: ${theme.colors.secondary}`
    );
  });

  it('Renders yellow fill when isYellow is true', () => {
    render(<WatchlistIcon isYellow />);
    expect(screen.getByTestId('watchlistIcon')).toHaveStyle(
      `fill: ${theme.colors.yellow}`
    );
  });
});
