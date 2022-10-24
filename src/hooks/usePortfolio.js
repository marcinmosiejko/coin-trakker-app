import { useEffect, useState } from 'react';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import { usePages } from 'hooks/usePages';
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/general';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';

const usersPortfolio = getFromLocalStorage('portfolio');

export const usePortfolio = () => {
  const { coinsData, findCoins } = useLcwCoinsData();
  const [portfolioData, setPortfolioData] = useState(usersPortfolio || null);
  const [portfolioCoinsList, setPortfolioCoinsList] = useState(null);
  const [portfolioCurPageCoinsList, setPortfolioCurPageCoinsList] =
    useState(null);
  const [portfolioSummary, setPortfolioSummary] = useState({ totalValue: 0 });
  const { currentPage, lastPage, handlePageChange } = usePages();
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

  return {
    handleSetPortfolioData,
    findPortfolioCoins,
    portfolioCurPageCoinsList,
    portfolioSummary,
    currentPage,
    lastPage,
    handlePageChange,
  };
};
