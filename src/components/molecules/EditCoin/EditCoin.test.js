import { render, screen, fireEvent } from 'test-utils';
import EditCoin from './EditCoin';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';

describe('EditCoin', () => {
  it('Renders the component', () => {
    render(<EditCoin coinData={coinsCurPageCoinsList.at(0)} />);
  });

  it("Renders component's content", () => {
    render(<EditCoin coinData={coinsCurPageCoinsList.at(0)} />);
    screen.getByText('Edit coin');
    screen.getByText('Confirm');
    screen.getByText('Cancel');
    screen.getByPlaceholderText('Enter quantity...');
  });

  it('Displays input value equal to entered value for "Enter quantity..."', () => {
    render(<EditCoin coinData={coinsCurPageCoinsList.at(0)} />);
    const searchCoin = screen.getByPlaceholderText('Enter quantity...');
    fireEvent.change(searchCoin, {
      target: { value: 7 },
    });
    screen.getByDisplayValue(7);
  });
});
