import React, { useState, useRef, useEffect } from 'react';
import { Wrapper } from './Portfolio.styles';
import Table from 'components/organisms/Table/Table';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';
import TableBody from 'components/organisms/TableBody/TableBody';
import Modal from 'components/organisms/Modal/Modal';
import AddCoin from 'components/molecules/AddCoin/AddCoin';
import Pagination from 'components/molecules/Pagination/Pagination';
import { TableOptionsWrapper } from 'components/atoms/TableOptionsWrapper/TableOptionsWrapper';
import Button from 'components/atoms/Button/Button';
import useModal from 'hooks/useModal';

import { usePortfolio } from 'hooks/usePortfolio';

const Portfolio = () => {
  const {
    handleSetPortfolioData,
    findPortfolioCoins,
    portfolioCurPageCoinsList,
    portfolioSummary,
    currentPage,
    lastPage,
    handlePageChange,
  } = usePortfolio();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);
  const tableRef = useRef(null);

  return (
    <Wrapper>
      {isOpen ? (
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <AddCoin
            handleCloseModal={handleCloseModal}
            handleSetPortfolioData={handleSetPortfolioData}
            findPortfolioCoins={findPortfolioCoins}
          />
        </Modal>
      ) : null}
      <>
        <div>
          <TableOptionsWrapper>
            <Button onClick={handleOpenModal}>Add Coin</Button>
          </TableOptionsWrapper>
          <Table
            tableRef={tableRef}
            data={portfolioCurPageCoinsList}
            isPortfolio
          >
            {portfolioCurPageCoinsList && (
              <>
                <PortfolioTableHead />
                <TableBody
                  data={portfolioCurPageCoinsList}
                  totalValue={portfolioSummary.totalValue}
                  isPortfolio
                />
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
