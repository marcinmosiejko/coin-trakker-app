import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { TableHeadRow } from 'components/atoms/TableHeadRow/TableHeadRow';

const PortfolioTableHead = () => {
  return (
    <thead>
      <TableHeadRow>
        <TdTh isTh isLeft width={15}>
          Coin
        </TdTh>
        <TdTh isTh isRight width={12}>
          Price
        </TdTh>
        <TdTh isTh isRight width={12}>
          Quantity
        </TdTh>
        <TdTh isTh isRight width={11}>
          Value
        </TdTh>
        <TdTh isTh isRight width={9}>
          24h
        </TdTh>
        {/* <TdTh isRight>7d</TdTh> */}
        <TdTh isTh isRight width={8}>
          Share
        </TdTh>
        <TdTh isTh width={4} />
        <TdTh isTh width={7} isRight></TdTh>
        <TdTh isTh isRight></TdTh>
      </TableHeadRow>
    </thead>
  );
};

export default PortfolioTableHead;
