import React from 'react';
import { render, screen } from 'test-utils';
import TableBody from './TableBody';
import { coinsCurPageCoinsList } from 'testData/coinsCurPageCoinsList';
import { portfolioCurPageCoinsList } from 'testData/portfolioCurPageCoinsList';
import { RoundSmallValue } from 'helpers/general';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

describe('TableBody', () => {
  it('Renders the component', () => {
    render(
      <table>
        <TableBody />
      </table>
    );
  });

  it('Displays Coins table', () => {
    render(
      <table>
        <TableBody isCoins data={coinsCurPageCoinsList} />
      </table>
    );
    coinsCurPageCoinsList.forEach((coin) => {
      screen.getByText(coin.code);
    });
  });

  it('Displays Portfolio table', () => {
    render(
      <table>
        <TableBody isPortfolio data={portfolioCurPageCoinsList} />
      </table>
    );
    portfolioCurPageCoinsList.forEach((coin) => {
      screen.getByText(coin.code);
      screen.getByText(RoundSmallValue(coin.quantity));
    });
  });
});
