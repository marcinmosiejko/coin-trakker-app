import React, { useEffect, useState } from 'react';
import { Wrapper, Rank } from './RankAndWatch.styles';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';

const RankAndWatch = ({ coinCode, children }) => {
  const { watchlistCoinCodesList, handleUpdateWatchlistCoinCodesList } =
    useLcwCoinsData();
  const [isOnWatchlist, setIsOnWatchlist] = useState(null);

  useEffect(() => {
    const isOnWatchlist = !!watchlistCoinCodesList?.includes(coinCode);
    setIsOnWatchlist(isOnWatchlist);
  }, [watchlistCoinCodesList, coinCode]);

  return (
    <Wrapper>
      <Rank>{children}</Rank>
      <WatchlistIcon
        isOnWatchlist={isOnWatchlist}
        onClick={() => handleUpdateWatchlistCoinCodesList(coinCode)}
      />
    </Wrapper>
  );
};

export default RankAndWatch;
