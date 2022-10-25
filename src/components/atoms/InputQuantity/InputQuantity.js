import React from 'react';
import { allowOnlyNumber } from 'helpers/general';
import { Input } from 'components/atoms/Input/Input';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

const InputQuantity = ({ control, errors, Controller }) => {
  return (
    <>
      <Controller
        InputQuantity="quantity"
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
    </>
  );
};

export default InputQuantity;
