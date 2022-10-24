import React, { useState, useRef, useEffect } from 'react';
import { Wrapper } from './Portfolio.styles';
import Table from 'components/organisms/Table/Table';
import PortfolioTableHead from 'components/molecules/PortfolioTableHead/PortfolioTableHead';
import TableBody from 'components/organisms/TableBody/TableBody';
import Modal from 'components/organisms/Modal/Modal';
import AddCoin from 'components/molecules/AddCoin/AddCoin';
import { usePages } from 'hooks/usePages';
import Pagination from 'components/molecules/Pagination/Pagination';
import { TableOptionsWrapper } from 'components/atoms/TableOptionsWrapper/TableOptionsWrapper';
import Button from 'components/atoms/Button/Button';
import useModal from 'hooks/useModal';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/general';

const usersPortfolio = getFromLocalStorage('portfolio');

const Portfolio = () => {
  const { coinsData, findCoins } = useLcwCoinsData();
  const [portfolioData, setPortfolioData] = useState(usersPortfolio || null);
  const [portfolioCoinsList, setPortfolioCoinsList] = useState(null);
  const [portfolioCurPageCoinsList, setPortfolioCurPageCoinsList] =
    useState(null);
  const [portfolioSummary, setPortfolioSummary] = useState({ totalValue: 0 });
  const { currentPage, lastPage, handlePageChange } = usePages();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);
  const tableRef = useRef(null);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  const handleSetPortfolioData = (coin) => {
    setPortfolioData((prevState) => [...prevState, coin]);
  };

  const findPortfolioCoins = (queryString) => {
    // Filters matching coins from coinsData so there are no coins that are already in portfolio -> use won't be able to add same coin more then once
    return findCoins(queryString).filter(
      (coin) => !portfolioData.find(({ code }) => code === coin.code)
    );
  };

  useEffect(() => {
    saveToLocalStorage('portfolio', portfolioData);
  }, [portfolioData]);

  useEffect(() => {
    if (!coinsData) return;

    const portfolioCoinsList = portfolioData
      .map(({ code: portfolioCoinCode, quantity }) => {
        const portfolioCoin = coinsData.find(
          (coin) => coin.code === portfolioCoinCode
        );
        // In case no coins with specified code were found
        if (!portfolioCoin) return undefined;

        const { code, name, rate, webp64, delta } = portfolioCoin;
        const value = rate * quantity;
        return { code, name, rate, webp64, delta, quantity, value };
      })
      // In case no coins with specified code were found
      .filter((item) => item !== undefined);

    setPortfolioCoinsList(portfolioCoinsList);

    const totalValue = portfolioCoinsList.reduce(
      (acc, coin) => acc + coin.quantity * coin.rate,
      0
    );
    setPortfolioSummary((prevState) => ({ ...prevState, totalValue }));
  }, [coinsData, portfolioData]);

  useEffect(() => {
    if (!portfolioCoinsList) return;

    const pageStartIndex = currentPage * perPageLimit;
    const pageEndIndex = (currentPage + 1) * perPageLimit;

    const curPageCoinsList = portfolioCoinsList.slice(
      pageStartIndex,
      pageEndIndex
    );

    setPortfolioCurPageCoinsList(curPageCoinsList);
  }, [portfolioCoinsList, currentPage, perPageLimit]);

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
