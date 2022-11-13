import { render, screen } from 'test-utils';
import PortfolioSummary from './PortfolioSummary';
import { portfolioSummaryData } from 'testData/portfolioSummaryData';

describe('PortfolioSummary', () => {
  it('Renders the component', () => {
    render(<PortfolioSummary data={portfolioSummaryData} />);
  });

  it("Renders component's content", () => {
    render(<PortfolioSummary data={portfolioSummaryData} />);
    screen.getByText('Total Value');
    screen.getByText('$7.11');
  });
});
