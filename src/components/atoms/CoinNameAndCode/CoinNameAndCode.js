import React from 'react';
import { Wrapper, Name, Code } from './CoinNameAndCode.styles';
import { truncateString, trimUnderscoresAndSpaces } from 'helpers/general';

const CoinNameAndCode = ({
  name,
  code,
  isCoinDetails,
  isSearchResult,
  ...props
}) => {
  return (
    <Wrapper>
      {!isCoinDetails ? (
        <Code isCoinDetails={isCoinDetails}>
          {trimUnderscoresAndSpaces(code)}
        </Code>
      ) : null}
      <Name isCoinDetails={isCoinDetails} isSearchResult={isSearchResult}>
        {isSearchResult ? truncateString(name, 30) : truncateString(name, 13)}
      </Name>
      {isCoinDetails ? (
        <Code isCoinDetails={isCoinDetails}>
          {trimUnderscoresAndSpaces(code)}
        </Code>
      ) : null}
    </Wrapper>
  );
};

export default CoinNameAndCode;
