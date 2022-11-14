import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Name, Code } from './CoinNameAndCode.styles';
import { truncateString, trimUnderscoresAndSpaces } from 'helpers/general';

const CoinNameAndCode = ({
  name,
  code,
  isCoinDetails,
  isSearchResult,
  maxNameLength,
}) => {
  return (
    <Wrapper>
      {!isCoinDetails ? (
        <Code isCoinDetails={isCoinDetails}>
          {trimUnderscoresAndSpaces(code)}
        </Code>
      ) : null}
      <Name isCoinDetails={isCoinDetails} isSearchResult={isSearchResult}>
        {truncateString(name, maxNameLength)}
      </Name>
      {isCoinDetails ? (
        <Code isCoinDetails={isCoinDetails}>
          {trimUnderscoresAndSpaces(code)}
        </Code>
      ) : null}
    </Wrapper>
  );
};

CoinNameAndCode.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  isCoinDetails: PropTypes.bool,
  isSearchResult: PropTypes.bool,
  maxNameLength: PropTypes.number,
};

export default CoinNameAndCode;
