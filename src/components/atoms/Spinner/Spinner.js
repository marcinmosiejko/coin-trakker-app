import React from 'react';
import { Wrapper } from './Spinner.styles';

const Spinner = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 340 340"
          data-testid="spinner"
        >
          <circle cx="170" cy="170" r="160" />
          <circle cx="170" cy="170" r="135" />
          <circle cx="170" cy="170" r="110" />
          <circle cx="170" cy="170" r="85" />
        </svg>
      </div>
    </Wrapper>
  );
};

export default Spinner;
