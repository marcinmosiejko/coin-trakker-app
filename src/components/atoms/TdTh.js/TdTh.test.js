import { render, screen } from 'test-utils';
import TdTh from './TdTh';

describe('TdTh', () => {
  it('Renders the component', () => {
    render(
      <table>
        <TdTh>Test</TdTh>
      </table>
    );
    screen.getByText('Test');
  });
});
