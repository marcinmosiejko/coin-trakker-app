import React from 'react';
import { Wrapper, Rank } from './RankAndWatch.styles';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';
import { useLcwCoinsData } from 'hooks/useCoinsData';
import PropTypes from 'prop-types';

const RankAndWatch = ({ onWatchlist, coinCode, children }) => {
  const { handleUpdateWatchlist } = useLcwCoinsData();

  return (
    <Wrapper>
      <Rank>{children}</Rank>
      <WatchlistIcon
        isYellow={onWatchlist}
        onClick={() => handleUpdateWatchlist(coinCode)}
        data-testid={coinCode}
      />
    </Wrapper>
  );
};

RankAndWatch.propTypes = {
  onWatchlist: PropTypes.bool,
  coinCode: PropTypes.string,
  children: PropTypes.number,
};

export default RankAndWatch;
