import React from 'react';
import PropTypes from 'prop-types';
import { Td, Th } from './TdTh.styles';

const TdTh = ({ children, isTh, ...props }) => {
  if (!isTh) return <Td {...props}>{children}</Td>;
  if (isTh) return <Th {...props}>{children}</Th>;
};

TdTh.propTypes = {
  isTh: PropTypes.bool,
};

export default TdTh;
