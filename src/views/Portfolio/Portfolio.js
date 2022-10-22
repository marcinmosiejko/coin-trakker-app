import React, { useState, useRef } from 'react';
import { Wrapper } from './Portfolio.styles';
import Table from 'components/organisms/Table/Table';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';
import TableBody from 'components/organisms/TableBody/TableBody';
import { usePages } from 'hooks/usePages';
import Pagination from 'components/molecules/Pagination/Pagination';

const Portfolio = () => {
  const {
    currentPage,
    lastPage,
    handlePageChange,
    handleSetLastPage,
    handleSetCurPage,
  } = usePages();
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

        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          handlePageChange={({ selected }) =>
            handlePageChange(selected, tableRef)
          }
        />
      </>
    </Wrapper>
  );
};

export default Portfolio;
