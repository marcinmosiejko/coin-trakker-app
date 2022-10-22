import React from 'react';
import CoinsTableRow from 'components/molecules/CoinsTableRow/CoinsTableRow';

const TableBody = ({ data, isCoins, isPortfolio }) => {
  return (
    <tbody>
      {isCoins
        ? data.map((crypto) => (
            <CoinsTableRow key={crypto.name + crypto.symbol} data={crypto} />
          ))
        : null}
    </tbody>
  );
};

export default TableBody;
