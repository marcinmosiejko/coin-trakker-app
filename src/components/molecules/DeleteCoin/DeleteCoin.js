import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import CoinId from 'components/atoms/CoinId/CoinId';
import { Wrapper, ButtonsWrapper, ContentWrapper } from './DeleteCoin.styles';
import { deletePortfolioCoin } from 'store/portfolioRawDataSlice';
import { useDispatch } from 'react-redux';

const DeleteCoin = ({ coinData, handleCloseModal }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    handleCloseModal();
    dispatch(deletePortfolioCoin({ code: coinData.code }));
  };

  return (
    <Wrapper>
      <h2>Delete Coin</h2>
      <ContentWrapper>
        <CoinId data={coinData} />
        <span>Are you sure you want to delete?</span>
      </ContentWrapper>
      <ButtonsWrapper>
        <Button isRed isL onClick={onDelete}>
          Delete
        </Button>
        <Button isL onClick={handleCloseModal}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

DeleteCoin.propTypes = {
  coinData: PropTypes.object,
  handleCloseModal: PropTypes.func,
};

export default DeleteCoin;
