import Button from 'components/atoms/Button/Button';
import CoinId from 'components/atoms/CoinId/CoinId';
import React from 'react';
import { Wrapper, ButtonsWrapper, ContentWrapper } from './DeleteCoin.styles';
import { deletePortfolioCoin } from 'store/portfolioSlice';
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

export default DeleteCoin;
