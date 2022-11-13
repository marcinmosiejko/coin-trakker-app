import { render, screen } from 'test-utils';
import PageError from './PageError';

describe('PageError', () => {
  it('Renders the component', () => {
    render(<PageError code={404} message="Error message" />);
  });

  it("Renders component's content", () => {
    render(<PageError code={404} message="Error message" />);
    screen.getByText(/404/);
    screen.getByText('Error message');
    screen.getAllByTestId('sadIcon');
  });

  it("Renders component's content without sadIcon", () => {
    render(<PageError code={404} message="Error message" hasIcon={false} />);
    screen.getByText(/404/);
    screen.getByText('Error message');
    expect(screen.queryByTestId('sadIcon')).not.toBeInTheDocument();
  });
});
