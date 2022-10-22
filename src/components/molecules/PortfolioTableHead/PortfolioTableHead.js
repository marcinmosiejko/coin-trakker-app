import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { TableHeadRow } from 'components/atoms/TableHeadRow/TableHeadRow';

const PortfolioTableHead = () => {
  return (
    <thead>
      <TableHeadRow>
        <TdTh isLeft>Coin</TdTh>
        <TdTh type="price" isRight>
          Price
        </TdTh>
        <TdTh type="regular" isRight>
          Quantity
        </TdTh>
        <TdTh type="regular" isRight>
          Value
        </TdTh>
        <TdTh type="day" isRight>
          24h
        </TdTh>
        <TdTh type="regular" isRight>
          7d
        </TdTh>
        <TdTh type="regular" isRight>
          Share
        </TdTh>
        <TdTh type="regular" isRight></TdTh>
      </TableHeadRow>
    </thead>
  );
};

export default PortfolioTableHead;
