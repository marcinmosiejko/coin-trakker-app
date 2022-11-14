import { render, screen } from 'test-utils';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';
import {
  RoundSmallValue,
  roundLargeValue,
  getPercentageChange,
} from 'helpers/general';
import CoinsTableRow from './CoinsTableRow';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

describe('CoinsTableRow', () => {
  it('Renders the component', () => {
    render(
      <table>
        <tbody>
          <CoinsTableRow data={coinsCurPageCoinsList.at(0)} />
        </tbody>
      </table>
    );
  });

  it("Renders component's content", () => {
    coinsCurPageCoinsList.forEach((coin) => {
      const {
        code,
        name,
        rate,
        volume,
        cap,
        delta: { day },
      } = coin;
      render(
        <table>
          <tbody>
            <CoinsTableRow data={coin} />
          </tbody>
        </table>
      );
      screen.getByText(code);
      screen.getByText(name);
      screen.getByText(`$${RoundSmallValue(rate)}`);
      screen.getByText(`$${roundLargeValue(cap)}`);
      screen.getByText(`$${roundLargeValue(volume)}`);
      screen.getByText(`${getPercentageChange(day)}%`);
    });
  });
});
