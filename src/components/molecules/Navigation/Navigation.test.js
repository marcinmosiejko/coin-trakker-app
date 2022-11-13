import { render, screen } from 'test-utils';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('Renders the component', () => {
    render(<Navigation />);
    screen.getByText('Coins');
    screen.getByText('Portfolio');
  });
});
