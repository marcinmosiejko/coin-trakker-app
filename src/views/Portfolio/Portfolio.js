import React, { useState, useRef } from 'react';
import { Wrapper } from './Portfolio.styles';
import Table from 'components/organisms/Table/Table';
import TableBody from 'components/organisms/TableBody/TableBody';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';

const Portfolio = () => {
  const [portfolioCurPageCoinsList, setPortfolioCurPageCoinsList] = useState(
    []
  );
  const [portfolioCoinsList, setPortfolioCoinsList] = useState([]);
  const tableRef = useRef(null);

  return (
    <Wrapper>
      <>
        <div>
          <Table
            tableRef={tableRef}
            data={portfolioCurPageCoinsList}
            isPortfolio
          >
            {portfolioCurPageCoinsList && (
              <>
                <PortfolioTableHead />
                <TableBody data={portfolioCurPageCoinsList} isPortfolio />
                <caption>Live Portfolio</caption>
              </>
            )}
          </Table>
        </div>
      </>
    </Wrapper>
  );
};

export default Portfolio;
