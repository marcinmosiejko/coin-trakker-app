import { render, screen } from 'test-utils';
import TdTh from './TdTh';

describe('TdTh', () => {
  it('Renders the component', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TdTh>Test</TdTh>
          </tr>
        </tbody>
      </table>
    );
    screen.getByText('Test');
  });
});
