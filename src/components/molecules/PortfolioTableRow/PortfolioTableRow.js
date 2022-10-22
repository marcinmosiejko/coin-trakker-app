import React from 'react';
import { round, roundPrice, getPercentageChange } from 'helpers/general';
import { StyledRow } from './CoinsTableRow.styles';
import CoinID from 'components/atoms/CoinID/CoinID';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import Coin7dChart from 'components/atoms/List7dChart/Coin7dChart';

const PortfolioTableRow = ({
  data,
  data: {
    code,
    rate,
    delta: { day },
    history7d,
  },
}) => {
  return (
    <>
      <StyledRow>
        <TdTh isLeft>
          <CoinID data={data} />
        </TdTh>
        <TdTh type="rate" isRight>
          ${roundPrice(rate)}
        </TdTh>
        <TdTh type="regular" isRight>
          Quantity
        </TdTh>
        <TdTh type="regular" isRight>
          Value
        </TdTh>
        <TdTh type="day" isRight change={day}>
          {round(getPercentageChange(day))}%
        </TdTh>
        <TdTh isRight>
          <Coin7dChart chartDataset={history7d} />
        </TdTh>
        <TdTh type="regular" isRight>
          Share
        </TdTh>
        <TdTh type="regular" isRight></TdTh>
      </StyledRow>
      <StyledRow></StyledRow>
    </>
  );
};

export default PortfolioTableRow;
