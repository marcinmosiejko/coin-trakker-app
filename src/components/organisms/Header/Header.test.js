import { render, screen } from 'test-utils';
import Header from './Header';

describe('Header', () => {
  it('Renders the component', () => {
    render(<Header />);
    screen.getByText(/TRAKKER/);
    screen.getByText('Portfolio');
  });
});
