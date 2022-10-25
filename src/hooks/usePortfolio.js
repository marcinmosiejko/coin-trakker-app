import { useEffect, useState } from 'react';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import { usePages } from 'hooks/usePages';
import {
  compareObjBy,
  getFromLocalStorage,
  saveToLocalStorage,
} from 'helpers/general';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';

const usersPortfolio = getFromLocalStorage('portfolio');

export const usePortfolio = () => {
  const { coinsData, findCoins } = useLcwCoinsData();
  const [portfolioData, setPortfolioData] = useState(
    usersPortfolio || [{ code: 'BTC', quantity: 7 }]
  );
  const [portfolioCoinsList, setPortfolioCoinsList] = useState(null);
  const [portfolioCurPageCoinsList, setPortfolioCurPageCoinsList] =
    useState(null);
  const [portfolioSummary, setPortfolioSummary] = useState({ totalValue: 0 });
  const { currentPage, lastPage, handlePageChange } = usePages();
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  const handleAddPortfolioCoin = (portfolioCoinData) => {
    setPortfolioData((prevState) => [...prevState, portfolioCoinData]);
  };

  const handleDeletePortfolioCoin = (coinCode) => {
    setPortfolioData((prevState) =>
      prevState.filter((coin) => coin.code !== coinCode)
    );
  };

  const handleEditPortfolioCoin = (coinData) => {
    // Delete previous instance of the coin
    setPortfolioData((prevState) =>
      prevState.filter((coin) => coin.code !== coinData.code)
    );
    // Add new instance
    setPortfolioData((prevState) => [
      ...prevState,
      { code: coinData.code, quantity: coinData.quantity },
    ]);
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
    if (!coinsData || !portfolioData) return;

    // Get portfolioCoinsList
    const unsortedPortfolioCoinsList = portfolioData
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

    // Based on portfolioCoinsList calculate total value
    const totalValue = unsortedPortfolioCoinsList.reduce(
      (acc, coin) => acc + coin.quantity * coin.rate,
      0
    );

    // Use calculated total value to store share value of each coin so the coins can be sorted by share and displayed that way by default
    const portfolioCoinsList = unsortedPortfolioCoinsList
      .map((coin) => ({
        ...coin,
        share: coin.value / totalValue,
      }))
      .sort((a, b) => compareObjBy(a, b, 'share', false));

    setPortfolioCoinsList(portfolioCoinsList);
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
    handleAddPortfolioCoin,
    findPortfolioCoins,
    portfolioCurPageCoinsList,
    portfolioSummary,
    currentPage,
    lastPage,
    handlePageChange,
    handleDeletePortfolioCoin,
    handleEditPortfolioCoin,
  };
};
