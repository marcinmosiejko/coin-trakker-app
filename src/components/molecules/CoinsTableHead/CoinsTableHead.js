import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { TableHeadRow } from 'components/atoms/TableHeadRow/TableHeadRow';

const CoinsTableHead = () => {
  return (
    <thead>
      <TableHeadRow>
        <TdTh isTh width={7}>
          #
        </TdTh>
        <TdTh isTh isLeft width={15}>
          Coin
        </TdTh>
        <TdTh isTh isRight>
          Price
        </TdTh>
        <TdTh isTh isRight>
          Market Cap
        </TdTh>
        <TdTh isTh isRight>
          Volume 24h
        </TdTh>
        <TdTh isTh isRight>
          24h
        </TdTh>
        <TdTh isTh isRight width={16}>
          7d
        </TdTh>
      </TableHeadRow>
    </thead>
  );
};

export default CoinsTableHead;
