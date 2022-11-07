import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Wrapper, StyledForm, StyledButton } from './AddCoin.styles';
import { Input } from 'components/atoms/Input/Input';
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';
import Downshift from '../Downshift/Downshift';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { allowOnlyNumber } from 'helpers/general';
import { addPortfolioCoin } from 'store/portfolioRawDataSlice';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCoinNameOrCode } from 'helpers/coinsData';

const schema = yup
  .object({
    coin: yup.string().required('Coin is required'),
    quantity: yup
      .number('Quantity is Required')
      .positive()
      .required('Quantity is Required'),
  })
  .required();

const AddCoin = ({ handleCloseModal }) => {
  const { coinsData, portfolioRawData } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const findPortfolioCoins = (queryString) => {
    // Filters matching coins from coinsData so there are no coins that are already in portfolio -> use won't be able to add same coin more then once
    const coins = filterByCoinNameOrCode(coinsData, queryString);

    if (portfolioRawData?.length === 0) return coins;

    return coins.filter(
      (coin) => !portfolioRawData.find(({ code }) => code === coin.code)
    );
  };

  const onSubmit = ({ coin, quantity }) => {
    dispatch(
      addPortfolioCoin({
        code: coin.split('.').at(0),
        quantity: +(quantity + '').replaceAll(/^0+/g, ''),
      })
    );

    handleCloseModal();
  };

  return (
    <Wrapper>
      <h2>Add a Coin</h2>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="coin"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <Downshift
              isAddCoin
              findCoins={findPortfolioCoins}
              placeholder="Find a coin..."
              {...rest}
            />
          )}
        />
        <ErrorMessage>{errors.coin?.message}</ErrorMessage>
        <Controller
          name="quantity"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, ...rest } }) => (
            <Input
              {...rest}
              placeholder="Enter quantity..."
              onChange={(e) => onChange(allowOnlyNumber(e.target.value))}
            />
          )}
        />
        <ErrorMessage>{errors.quantity?.message}</ErrorMessage>

        <StyledButton isPrimary isL>
          Add
        </StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

export default AddCoin;
