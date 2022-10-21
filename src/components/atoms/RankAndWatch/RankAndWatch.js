import React, { useEffect, useState } from 'react';
import { Wrapper, Rank } from './RankAndWatch.styles';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';

const RankAndWatch = ({ onWatchlist, coinCode, children }) => {
  const { handleUpdateWatchlistCoinCodesList } = useLcwCoinsData();

  return (
    <Wrapper>
      <Rank>{children}</Rank>
      <WatchlistIcon
        isYellow={onWatchlist}
        onClick={() => handleUpdateWatchlistCoinCodesList(coinCode)}
      />
    </Wrapper>
  );
};

export default RankAndWatch;
