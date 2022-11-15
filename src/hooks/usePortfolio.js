import { useEffect, useState } from 'react';
import { usePages } from 'hooks/usePages';
import { compareObjBy } from 'helpers/general';
import { PER_PAGE_LIMIT_DEFAULT } from 'config';
import { useSelector } from 'react-redux';

export const usePortfolio = () => {
  const { coinsData, portfolioRawData } = useSelector((state) => state);
  const [portfolioAllCoinsList, setPortfolioAllCoinsList] = useState(null);
  const [coinBeingEditedOrDeleted, setCoinBeingEditedOrDeleted] =
    useState(null);
  const [portfolioCurPageCoinsList, setPortfolioCurPageCoinsList] =
    useState(null);
  const [portfolioSummary, setPortfolioSummary] = useState({ totalValue: 0 });
  const { currentPage, pageCount, handlePageChange } = usePages();
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  const handleSetCoinBeingEditedOrDeleted = (coin) => {
    setCoinBeingEditedOrDeleted(coin);
  };

  useEffect(() => {
    if (!coinsData || !portfolioRawData) return;

    // Get portfolioAllCoinsList
    const unsortedPortfolioAllCoinsList = portfolioRawData
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

    // Based on portfolioAllCoinsList calculate total value
    const totalValue = unsortedPortfolioAllCoinsList.reduce(
      (acc, coin) => acc + coin.quantity * coin.rate,
      0
    );

    // Use calculated total value to store share of each coin so the coins can be sorted by share and displayed that way by default
    const portfolioAllCoinsList = unsortedPortfolioAllCoinsList
      .map((coin) => ({
        ...coin,
        share: coin.value / totalValue,
      }))
      .sort((a, b) => compareObjBy(a, b, 'share', false));

    setPortfolioAllCoinsList(portfolioAllCoinsList);
    setPortfolioSummary((prevState) => ({ ...prevState, totalValue }));
  }, [coinsData, portfolioRawData]);

  useEffect(() => {
    if (!portfolioAllCoinsList) return;

    const pageStartIndex = currentPage * perPageLimit;
    const pageEndIndex = (currentPage + 1) * perPageLimit;

    const curPageCoinsList = portfolioAllCoinsList.slice(
      pageStartIndex,
      pageEndIndex
    );

    setPortfolioCurPageCoinsList(curPageCoinsList);
  }, [portfolioAllCoinsList, currentPage, perPageLimit]);

  return {
    portfolioCurPageCoinsList,
    portfolioSummary,
    currentPage,
    pageCount,
    handlePageChange,
    coinBeingEditedOrDeleted,
    handleSetCoinBeingEditedOrDeleted,
  };
};
