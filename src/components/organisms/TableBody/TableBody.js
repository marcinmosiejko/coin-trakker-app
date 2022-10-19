import React from 'react';
import TableRow from 'components/molecules/TableRow/TableRow';

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((crypto) => (
        <TableRow key={crypto.name + crypto.symbol} data={crypto} />
      ))}
    </tbody>
  );
};

export default TableBody;
