import { render, screen, fireEvent } from 'test-utils';
import AddCoin from './AddCoin';

describe('AddCoin', () => {
  it('Renders the component', () => {
    render(<AddCoin />);
    // Title
    screen.getByText('Add a Coin');
    // Input find a coin
    expect(screen.getByPlaceholderText('Find a coin...')).toBeInTheDocument();
    // Input quantity
    expect(
      screen.getByPlaceholderText('Enter quantity...')
    ).toBeInTheDocument();
    // Button
    screen.getByText('Add');
  });

  it('Displays input value equal to entered value for "Find a coin..."', () => {
    render(<AddCoin />);
    const findCoin = screen.getByPlaceholderText('Find a coin...');
    fireEvent.change(findCoin, {
      target: { value: 'btc' },
    });
    screen.getByDisplayValue('btc');
  });

  it('Displays input value equal to entered value for "Enter quantity..."', () => {
    render(<AddCoin />);
    const enterQuantity = screen.getByPlaceholderText('Enter quantity...');
    fireEvent.change(enterQuantity, {
      target: { value: 12 },
    });
    screen.getByDisplayValue('12');
  });
});
