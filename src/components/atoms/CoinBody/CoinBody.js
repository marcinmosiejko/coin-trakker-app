import React from 'react';
import { Wrapper, StyledImage, NameWrapper, Name } from './CoinBody.styles';
import { truncateString } from 'helpers/general';

const CoinBody = ({ data: { name, code, webp64 } }) => {
  return (
    <Wrapper>
      <StyledImage src={webp64} alt="coin logo"></StyledImage>
      <NameWrapper>
        <div>{code}</div>
        <Name>{truncateString(name, 15)}</Name>
      </NameWrapper>
    </Wrapper>
  );
};

export default CoinBody;
