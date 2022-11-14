import { render, screen } from 'test-utils';
import { portfolioCurPageCoinsList } from 'testData/portfolioCurPageCoinsList';
import {
  RoundSmallValue,
  roundLargeValue,
  convertToPercentage,
} from 'helpers/general';
import PortfolioTableRow from './PortfolioTableRow';

describe('PortfolioTableRow', () => {
  it('Renders the component', () => {
    render(
      <table>
        <tbody>
          <PortfolioTableRow data={portfolioCurPageCoinsList.at(0)} />
        </tbody>
      </table>
    );
  });

  it("Renders component's content", () => {
    portfolioCurPageCoinsList.forEach((coin) => {
      const { code, name, value, quantity, rate, share } = coin;
      render(
        <table>
          <tbody>
            <PortfolioTableRow data={coin} />
          </tbody>
        </table>
      );
      screen.getByText(code);
      screen.getByText(name);
      screen.getByText(`$${RoundSmallValue(rate)}`);
      screen.getByText(`$${roundLargeValue(value)}`);
      screen.getByText(RoundSmallValue(quantity));
      screen.getByText(`${convertToPercentage(share)}%`);
      screen.getAllByTestId('editIcon');
      screen.getAllByTestId('deleteIcon');
    });
  });
});
