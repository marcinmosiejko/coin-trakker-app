import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { TableHeadRow } from 'components/atoms/TableHeadRow/TableHeadRow';

const CoinsTableHead = () => {
  return (
    <thead>
      <TableHeadRow>
        <TdTh width={5}>#</TdTh>
        <TdTh isLeft>Coin</TdTh>
        <TdTh isRight>Price</TdTh>
        <TdTh isRight>Market Cap</TdTh>
        <TdTh isRight>Volume 24h</TdTh>
        <TdTh width={6.5} isRight>
          24h
        </TdTh>
        <TdTh width={11} isRight>
          7d
        </TdTh>
      </TableHeadRow>
    </thead>
  );
};

export default CoinsTableHead;
