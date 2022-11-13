import { render, screen, fireEvent } from 'test-utils';
import PageId from './PageId';

describe('PageId', () => {
  it('Renders the component', () => {
    render(<PageId />);
    screen.getByText(/TRAKKER/);
    screen.getByPlaceholderText('Search a coin...');
  });

  it('Displays input value equal to entered value for "Search a coin..."', () => {
    render(<PageId />);
    const searchCoin = screen.getByPlaceholderText('Search a coin...');
    fireEvent.change(searchCoin, {
      target: { value: 'BTC' },
    });
    screen.getByDisplayValue('BTC');
  });
});
