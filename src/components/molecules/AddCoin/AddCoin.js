import React from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, StyledForm } from './AddCoin.styles';
import Button from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

const AddCoin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <h2>Add a Coin</h2>

      <StyledForm>
        <Input
          label="Coin"
          name="coin"
          id="coin"
          placeholder="Find a coin..."
          {...register('coin', { required: true })}
        />

        <Input
          label="Quantity"
          name="quantity"
          id="quantity"
          placeholder="Enter quantity..."
          {...register('quantity', { required: true })}
        />
        <Button>Add</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddCoin;
