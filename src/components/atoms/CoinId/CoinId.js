import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledImage, StyledLink } from './CoinId.styles';
import CoinNameAndCode from '../CoinNameAndCode/CoinNameAndCode';

const CoinId = ({
  data: { name, code, webp64 },
  maxNameLength,
  isCoinDetails,
  isSearchResult,
  isLink,
  ...props
}) => {
  return (
    <Wrapper isCoinDetails={isCoinDetails} isSearchResult={isSearchResult}>
      <StyledImage
        src={webp64}
        alt="coin logo"
        isCoinDetails={isCoinDetails}
        {...props}
      ></StyledImage>
      {isLink ? (
        <StyledLink to={`/coin/${code}`}>
          <CoinNameAndCode
            name={name}
            code={code}
            isCoinDetails={isCoinDetails}
            isSearchResult={isSearchResult}
            maxNameLength={maxNameLength}
          />
        </StyledLink>
      ) : (
        <CoinNameAndCode
          name={name}
          code={code}
          isCoinDetails={isCoinDetails}
          isSearchResult={isSearchResult}
          maxNameLength={maxNameLength}
        />
      )}
    </Wrapper>
  );
};

CoinId.propTypes = {
  name: PropTypes.string,
  nameLength: PropTypes.number,
  code: PropTypes.string,
  webp64: PropTypes.string,
  isCoinDetails: PropTypes.bool,
  isSearchResult: PropTypes.bool,
  isLink: PropTypes.bool,
};

export default CoinId;
