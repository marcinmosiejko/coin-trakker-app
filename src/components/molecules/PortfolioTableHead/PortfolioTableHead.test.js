import { render, screen } from 'test-utils';
import PortfolioTableHead from './PortfolioTableHead';

describe('PortfolioTableHead', () => {
  it('Renders the component', () => {
    render(
      <table>
        <PortfolioTableHead />
      </table>
    );
    screen.getByText('Quantity');
    screen.getByText('Value');
    screen.getByText('Share');
  });
});
