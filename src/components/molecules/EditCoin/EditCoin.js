import React from 'react';
import {
  Wrapper,
  ButtonsWrapper,
  ContentWrapper,
  StyledForm,
} from './EditCoin.styles';
import Button from 'components/atoms/Button/Button';
import CoinId from 'components/atoms/CoinId/CoinId';
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { allowOnlyNumber } from 'helpers/general';
import { Input } from 'components/atoms/Input/Input';

const schema = yup
  .object({
    quantity: yup
      .number('Quantity is Required')
      .required('Quantity is Required'),
  })
  .required();

const EditCoin = ({ coinData, handleCloseModal, handleEditPortfolioCoin }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ quantity }) => {
    handleEditPortfolioCoin({
      code: coinData.code,
      quantity: +(quantity + '').replaceAll(/^0+/g, ''),
    });
    handleCloseModal();
  };

  return (
    <Wrapper>
      <h2>Edit Coin</h2>
      <ContentWrapper>
        <CoinId data={coinData} />
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
          <ButtonsWrapper>
            <Button isL isPrimary type="submit">
              Confirm
            </Button>
            <Button isL onClick={handleCloseModal}>
              Cancel
            </Button>
          </ButtonsWrapper>
        </StyledForm>
      </ContentWrapper>
    </Wrapper>
  );
};

export default EditCoin;