import React from 'react';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import { StyledHeadRow } from 'components/atoms/StyledHeadRow/StyledHeadRow';

const PortfolioTableHead = () => {
  return (
    <thead>
      <StyledHeadRow>
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
      </StyledHeadRow>
    </thead>
  );
};

export default PortfolioTableHead;
