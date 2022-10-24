import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { TableHeadRow } from 'components/atoms/TableHeadRow/TableHeadRow';

const PortfolioTableHead = () => {
  return (
    <thead>
      <TableHeadRow>
        <TdTh width={10} isLeft>
          Coin
        </TdTh>
        <TdTh isRight>Price</TdTh>
        <TdTh isRight>Quantity</TdTh>
        <TdTh width={8} isRight>
          Value
        </TdTh>
        <TdTh isRight>24h</TdTh>
        <TdTh isRight>7d</TdTh>
        <TdTh isRight>Share</TdTh>
        <TdTh isRight>Edit</TdTh>
      </TableHeadRow>
    </thead>
  );
};

export default PortfolioTableHead;
