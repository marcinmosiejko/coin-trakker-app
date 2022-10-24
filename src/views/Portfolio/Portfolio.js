import React, { useRef } from 'react';
import { Wrapper, ButtonWrapper } from './Portfolio.styles';
import Table from 'components/organisms/Table/Table';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';
import TableBody from 'components/organisms/TableBody/TableBody';
import Modal from 'components/organisms/Modal/Modal';
import AddCoin from 'components/molecules/AddCoin/AddCoin';
import Pagination from 'components/molecules/Pagination/Pagination';
import Button from 'components/atoms/Button/Button';
import { TableOptionsWrapper } from 'components/atoms/TableOptionsWrapper/TableOptionsWrapper';
import { useModal } from 'hooks/useModal';
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
            <ButtonWrapper>
              <Button isPrimary isL onClick={handleOpenModal}>
                Add a Coin
              </Button>
            </ButtonWrapper>
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
