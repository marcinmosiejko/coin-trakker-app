import { render, screen } from 'test-utils';
import CoinsTableHead from './CoinsTableHead';

describe('CoinsTableHead', () => {
  it('Renders the component', () => {
    render(
      <table>
        <CoinsTableHead />
      </table>
    );
    screen.getByText('#');
    screen.getByText('Coin');
  });
});
