import React from 'react';
import { Wrapper, Rank } from './RankAndWatch.styles';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';
import { useLcwCoinsData } from 'hooks/useCoinsData';

const RankAndWatch = ({ onWatchlist, coinCode, children }) => {
  const { handleUpdateWatchlist } = useLcwCoinsData();

  return (
    <Wrapper>
      <Rank>{children}</Rank>
      <WatchlistIcon
        isYellow={onWatchlist}
        onClick={() => handleUpdateWatchlist(coinCode)}
      />
    </Wrapper>
  );
};

export default RankAndWatch;
