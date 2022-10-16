import React from 'react';
import { Td, Th } from './TdTh.styles';

const TdTh = ({ children, isTh, ...props }) => {
  if (!isTh) return <Td {...props}>{children}</Td>;
  if (isTh) return <Th {...props}>{children}</Th>;
};

export default TdTh;
