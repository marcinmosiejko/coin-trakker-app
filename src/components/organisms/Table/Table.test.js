import { render, screen } from 'test-utils';
import Table from './Table';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';
import CoinsTableHead from 'components/molecules/CoinsTableHead/CoinsTableHead';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';

describe('Table', () => {
  it('Renders the component', () => {
    render(<Table />);
  });

  it('Renders Coins table', () => {
    render(
      <Table isCoins data={coinsCurPageCoinsList}>
        <CoinsTableHead />
      </Table>
    );
    screen.getByText('#');
  });

  it('Renders Portfolio table', () => {
    render(
      <Table isPortfolio data={coinsCurPageCoinsList}>
        <PortfolioTableHead />
      </Table>
    );
    screen.getByText('Quantity');
  });

  it('Renders spinner if theres no data', () => {
    render(
      <Table isCoins>
        <CoinsTableHead />
      </Table>
    );
    screen.getByTestId('spinner');
  });
});
