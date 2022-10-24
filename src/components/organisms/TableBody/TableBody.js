import React from 'react';
import CoinsTableRow from 'components/molecules/CoinsTableRow/CoinsTableRow';
import PortfolioTableRow from 'components/molecules/PortfolioTableRow/PortfolioTableRow';

const TableBody = ({ data, isCoins, isPortfolio, totalValue }) => {
  return (
    <tbody>
      {isCoins
        ? data.map((crypto) => (
            <CoinsTableRow key={crypto.name + crypto.code} data={crypto} />
          ))
        : null}

      {isPortfolio
        ? data.map((crypto) => (
            <PortfolioTableRow
              key={crypto.name + crypto.code}
              data={crypto}
              totalValue={totalValue}
            />
          ))
        : null}
    </tbody>
  );
};

export default TableBody;
