import { useEffect, useState } from 'react';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import { usePages } from 'hooks/usePages';
import { compareObjBy } from 'helpers/general';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useSelector } from 'react-redux';

export const usePortfolio = () => {
  const { coinsData, findCoins } = useLcwCoinsData();
  const portfolioData = useSelector((state) => state.portfolio);
  const [portfolioCoinsList, setPortfolioCoinsList] = useState(null);
  const [portfolioCurPageCoinsList, setPortfolioCurPageCoinsList] =
    useState(null);
  const [portfolioSummary, setPortfolioSummary] = useState({ totalValue: 0 });
  const { currentPage, lastPage, handlePageChange } = usePages();
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  const findPortfolioCoins = (queryString) => {
    // Filters matching coins from coinsData so there are no coins that are already in portfolio -> use won't be able to add same coin more then once
    return findCoins(queryString).filter(
      (coin) => !portfolioData.find(({ code }) => code === coin.code)
    );
  };

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
    findPortfolioCoins,
    portfolioCurPageCoinsList,
    portfolioSummary,
    currentPage,
    lastPage,
    handlePageChange,
  };
};
