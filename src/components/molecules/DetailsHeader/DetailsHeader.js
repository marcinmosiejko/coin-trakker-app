import React from 'react';
import PropTypes from 'prop-types';
import CoinId from 'components/atoms/CoinId/CoinId';
import { Wrapper, Rate, Rank, RankBackground } from './DetailsHeader.styles';
import { RoundSmallValue } from 'helpers/general';

const DetailsHeader = ({ data }) => {
  return (
    <Wrapper>
      <CoinId isCoinDetails data={data} />
      <Rate>${RoundSmallValue(data.rate)}</Rate>
      <Rank>#{data.rank}</Rank>
      <RankBackground />
    </Wrapper>
  );
};

DetailsHeader.propTypes = {
  data: PropTypes.object,
};

export default DetailsHeader;
