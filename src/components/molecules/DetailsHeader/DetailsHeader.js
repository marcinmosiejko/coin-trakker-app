import React from 'react';
import PropTypes from 'prop-types';
import CoinId from 'components/atoms/CoinId/CoinId';
import { WrapperWide, WrapperNarrow, Rate } from './DetailsHeader.styles';
import { RoundSmallValue } from 'helpers/general';

const DetailsHeader = ({ isWide, isNarrow, data }) => {
  return (
    <>
      {isWide ? (
        <WrapperWide>
          <CoinId isCoinDetails data={data} />
          <Rate>${RoundSmallValue(data.rate)}</Rate>
        </WrapperWide>
      ) : null}
      {isNarrow ? (
        <WrapperNarrow>
          <CoinId isCoinDetails data={data} />
          <Rate>${RoundSmallValue(data.rate)}</Rate>
        </WrapperNarrow>
      ) : null}
    </>
  );
};

DetailsHeader.propTypes = {
  isWide: PropTypes.bool,
  isNarrow: PropTypes.bool,
  data: PropTypes.object,
};

export default DetailsHeader;
