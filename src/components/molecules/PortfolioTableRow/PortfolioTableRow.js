import React from 'react';
import PropTypes from 'prop-types';
import {
  RoundSmallValue,
  getPercentageChange,
  roundLargeValue,
  convertToPercentage,
} from 'helpers/general';
import { StyledRow } from './PortfolioTableRow.styles';
import CoinId from 'components/atoms/CoinId/CoinId';
import TdTh from 'components/atoms/TdTh.js/TdTh';
import DeleteIcon from 'components/atoms/DeleteIcon/DeleteIcon';
import EditIcon from 'components/atoms/EditIcon/EditIcon';
// import Coin7dChart from 'components/atoms/List7dChart/Coin7dChart';

const PortfolioTableRow = ({
  data,
  handleOpenDeleteCoinModal,
  handleOpenEditCoinModal,
  handleSetCoinBeingEditedOrDeleted,
  data: {
    rate,
    delta: { day, week },
    history7d,
    quantity,
    value,
    share,
  },
}) => {
  return (
    <>
      <StyledRow>
        <TdTh isLeft>
          <CoinId isLink data={data} maxNameLength={15} />
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
        <TdTh isRight>{convertToPercentage(share)}%</TdTh>
        <TdTh />
        <TdTh isRight>
          <EditIcon
            onClick={() => {
              handleSetCoinBeingEditedOrDeleted(data);
              handleOpenEditCoinModal();
            }}
          />
        </TdTh>
        <TdTh isRight>
          <DeleteIcon
            onClick={() => {
              handleSetCoinBeingEditedOrDeleted(data);
              handleOpenDeleteCoinModal();
            }}
          />
        </TdTh>
      </StyledRow>
    </>
  );
};

PortfolioTableRow.propTypes = {
  data: PropTypes.object,
  handleOpenDeleteCoinModal: PropTypes.func,
  handleOpenEditCoinModal: PropTypes.func,
  handleSetCoinBeingEditedOrDeleted: PropTypes.func,
};

export default PortfolioTableRow;
