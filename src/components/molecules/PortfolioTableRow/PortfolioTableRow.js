import React from 'react';
import {
  RoundSmallValue,
  getPercentageChange,
  roundLargeValue,
  convertToPercentage,
} from 'helpers/general';
import { StyledRow } from './PortfolioTableRow.styles';
import CoinID from 'components/atoms/CoinID/CoinID';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import DeleteIcon from 'components/atoms/DeleteIcon/DeleteIcon';
import EditIcon from 'components/atoms/EditIcon/EditIcon';
// import Coin7dChart from 'components/atoms/List7dChart/Coin7dChart';

const PortfolioTableRow = ({
  data,
  totalValue,
  data: {
    rate,
    delta: { day, week },
    history7d,
    quantity,
    value,
  },
}) => {
  return (
    <>
      <StyledRow>
        <TdTh isLeft>
          <CoinID data={data} />
        </TdTh>
        <TdTh isRight>${RoundSmallValue(rate)}</TdTh>
        <TdTh isRight>{RoundSmallValue(quantity)}</TdTh>
        <TdTh isRight>${roundLargeValue(value)}</TdTh>
        <TdTh isRight change={day}>
          {getPercentageChange(day)}%
        </TdTh>
        {/* <TdTh isRight change={week}>
          <Coin7dChart chartDataset={history7d} />
          {getPercentageChange(week)}%
        </TdTh> */}
        <TdTh isRight>
          {convertToPercentage((rate * quantity) / totalValue)}%
        </TdTh>
        <TdTh />
        <TdTh isRight>
          <EditIcon />
        </TdTh>
        <TdTh isRight>
          <DeleteIcon />
        </TdTh>
      </StyledRow>
    </>
  );
};

export default PortfolioTableRow;
