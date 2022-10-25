import React, { useRef, useState } from 'react';
import { Wrapper, ButtonWrapper } from './Portfolio.styles';
import Table from 'components/organisms/Table/Table';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';
import TableBody from 'components/organisms/TableBody/TableBody';
import Modal from 'components/organisms/Modal/Modal';
import AddCoin from 'components/molecules/AddCoin/AddCoin';
import DeleteCoin from 'components/molecules/DeleteCoin/DeleteCoin';
import EditCoin from 'components/molecules/EditCoin/EditCoin';
import Pagination from 'components/molecules/Pagination/Pagination';
import Button from 'components/atoms/Button/Button';
import { TableOptionsWrapper } from 'components/atoms/TableOptionsWrapper/TableOptionsWrapper';
import { useModal } from 'hooks/useModal';
import { usePortfolio } from 'hooks/usePortfolio';

const Portfolio = () => {
  const {
    handleAddPortfolioCoin,
    handleDeletePortfolioCoin,
    findPortfolioCoins,
    portfolioCurPageCoinsList,
    portfolioSummary,
    currentPage,
    lastPage,
    handlePageChange,
    handleEditPortfolioCoin,
  } = usePortfolio();
  const {
    isOpen: isAddCoinOpen,
    handleOpenModal: handleOpenAddCoinModal,
    handleCloseModal: handleCloseAddCoinModal,
  } = useModal(false);
  const {
    isOpen: isDeleteCoinOpen,
    handleOpenModal: handleOpenDeleteCoinModal,
    handleCloseModal: handleCloseDeleteCoinModal,
  } = useModal(false);
  const {
    isOpen: isEditCoinOpen,
    handleOpenModal: handleOpenEditCoinModal,
    handleCloseModal: handleCloseEditCoinModal,
  } = useModal(false);
  const tableRef = useRef(null);
  const [coinBeingEditedOrDeleted, setCoinBeingEditedOrDeleted] =
    useState(null);

  const handleSetCoinBeingEditedOrDeleted = (coin) => {
    setCoinBeingEditedOrDeleted(coin);
  };

  return (
    <Wrapper>
      {isAddCoinOpen ? (
        <Modal
          isOpen={isAddCoinOpen}
          handleCloseModal={handleCloseAddCoinModal}
        >
          <AddCoin
            handleCloseModal={handleCloseAddCoinModal}
            handleAddPortfolioCoin={handleAddPortfolioCoin}
            findPortfolioCoins={findPortfolioCoins}
          />
        </Modal>
      ) : null}
      {isDeleteCoinOpen ? (
        <Modal
          isOpen={isDeleteCoinOpen}
          handleCloseModal={handleCloseDeleteCoinModal}
        >
          <DeleteCoin
            handleCloseModal={handleCloseDeleteCoinModal}
            handleDeletePortfolioCoin={handleDeletePortfolioCoin}
            coinData={coinBeingEditedOrDeleted}
          />
        </Modal>
      ) : null}
      {isEditCoinOpen ? (
        <Modal
          isOpen={isEditCoinOpen}
          handleCloseModal={handleCloseEditCoinModal}
        >
          <EditCoin
            handleCloseModal={handleCloseEditCoinModal}
            handleEditPortfolioCoin={handleEditPortfolioCoin}
            coinData={coinBeingEditedOrDeleted}
          />
        </Modal>
      ) : null}
      <>
        <div>
          <TableOptionsWrapper>
            <ButtonWrapper>
              <Button isPrimary isL onClick={handleOpenAddCoinModal}>
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
                  handleOpenDeleteCoinModal={handleOpenDeleteCoinModal}
                  handleOpenEditCoinModal={handleOpenEditCoinModal}
                  handleSetCoinBeingEditedOrDeleted={
                    handleSetCoinBeingEditedOrDeleted
                  }
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
