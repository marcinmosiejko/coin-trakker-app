import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Message } from './OnPageError.styles';
import SadIcon from 'components/atoms/SadIcon/SadIcon';

const OnPageError = ({ code }) => {
  return (
    <Wrapper>
      <SadIcon />
      <Message>
        Sorry, there's no <span>{`${code}`}</span> coin in our database
      </Message>
    </Wrapper>
  );
};

OnPageError.propTypes = {
  code: PropTypes.string,
};

export default OnPageError;
