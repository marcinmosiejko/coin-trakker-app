import React from 'react';
import { Wrapper, StyledImage, NameWrapper, Name } from './CoinId.styles';
import { truncateString, trimUnderscoresAndSpaces } from 'helpers/general';

const CoinId = ({ data: { name, code, webp64 }, isSearchResult, ...props }) => {
  return (
    <Wrapper isSearchResult={isSearchResult}>
      <StyledImage src={webp64} alt="coin logo" {...props}></StyledImage>
      <NameWrapper>
        <div {...props}>{trimUnderscoresAndSpaces(code)}</div>
        <Name isSearchResult={isSearchResult} {...props}>
          {isSearchResult ? truncateString(name, 30) : truncateString(name, 13)}
        </Name>
      </NameWrapper>
    </Wrapper>
  );
};

export default CoinId;
