import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { StyledHeadRow } from 'components/atoms/StyledHeadRow/StyledHeadRow';

const CoinsTableHead = () => {
  return (
    <thead>
      <StyledHeadRow>
        <TdTh type="rank">#</TdTh>
        <TdTh isLeft>Coin</TdTh>
        <TdTh type="rate" isRight>
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
      </StyledHeadRow>
    </thead>
  );
};

export default CoinsTableHead;
