import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { StyledRow } from './TableHead.styles';

const TableHead = () => {
  return (
    <thead>
      <StyledRow>
        <TdTh type="rank">#</TdTh>
        <TdTh isLeft>Coin</TdTh>
        <TdTh type="price" isRight>
          Price
        </TdTh>
        <TdTh type="cap" isRight>
          Market Cap
        </TdTh>
        <TdTh type="volume" isRight>
          Volume 24h
        </TdTh>
        <TdTh type="day" isRight>
          24h
        </TdTh>
        <TdTh type="regular" isRight>
          7d
        </TdTh>
      </StyledRow>
    </thead>
  );
};

export default TableHead;
