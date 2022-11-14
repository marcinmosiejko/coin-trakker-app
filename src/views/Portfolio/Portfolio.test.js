import { render, screen } from 'test-utils';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
  it('Renders the component', () => {
    render(<Portfolio />);
    screen.getByText('Total Value');
    screen.getByText('Add a Coin');
  });
});
