import { render, screen } from 'test-utils';
import Footer from './Footer';

describe('Footer', () => {
  it('Renders the component', () => {
    render(<Footer />);
    screen.getByText(/2022/);
  });
});
