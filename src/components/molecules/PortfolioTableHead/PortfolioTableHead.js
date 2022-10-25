import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { TableHeadRow } from 'components/atoms/TableHeadRow/TableHeadRow';

const PortfolioTableHead = () => {
  return (
    <thead>
      <TableHeadRow>
        <TdTh width={13} isLeft>
          Coin
        </TdTh>
        <TdTh width={14} isRight>
          Price
        </TdTh>
        <TdTh width={12} isRight>
          Quantity
        </TdTh>
        <TdTh width={11} isRight>
          Value
        </TdTh>
        <TdTh isRight>24h</TdTh>
        {/* <TdTh isRight>7d</TdTh> */}
        <TdTh isRight>Share</TdTh>
        <TdTh width={4} />
        <TdTh width={7} isRight></TdTh>
        <TdTh width={9} isRight></TdTh>
      </TableHeadRow>
    </thead>
  );
};

export default PortfolioTableHead;
