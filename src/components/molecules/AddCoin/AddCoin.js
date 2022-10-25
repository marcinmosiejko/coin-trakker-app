import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Wrapper, StyledForm, StyledButton } from './AddCoin.styles';
import { Input } from 'components/atoms/Input/Input';
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';
import Downshift from '../Downshift/Downshift';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { allowOnlyNumber } from 'helpers/general';

const schema = yup
  .object({
    coin: yup.string().required('Coin is required'),
    quantity: yup
      .number('Quantity is Required')
      .required('Quantity is Required'),
  })
  .required();

const AddCoin = ({
  handleCloseModal,
  handleAddPortfolioCoin,
  findPortfolioCoins,
}) => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSetSelectedCoin = (coin) => {
    setSelectedCoin(coin);
  };

  const onSubmit = ({ coin, quantity }) => {
    handleAddPortfolioCoin({
      code: coin.split('.').at(0),
      quantity: +(quantity + '').replaceAll(/^0+/g, ''),
    });
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
              handleSetSelectedCoin={handleSetSelectedCoin}
              selectedCoin={selectedCoin}
              findCoins={findPortfolioCoins}
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
