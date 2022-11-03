import React from 'react';
import { Wrapper } from './Loader.styles';
import { ThreeDots } from 'svg-loaders-react';

const Loader = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <div>
        <ThreeDots />
      </div>
    </Wrapper>
  );
};

export default Loader;
