import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Message, StatusCode } from './PageError.styles';
import SadIcon from 'components/atoms/SadIcon/SadIcon';

const PageError = ({ code, message }) => {
  return (
    <Wrapper>
      <SadIcon />
      <Message>{message}</Message>
      {code ? <StatusCode>Error status code: {code}</StatusCode> : null}
    </Wrapper>
  );
};

PageError.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string,
};

export default PageError;
