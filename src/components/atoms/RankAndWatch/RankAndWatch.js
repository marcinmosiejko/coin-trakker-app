import React, { useEffect, useState } from 'react';
import { Wrapper, Rank } from './RankAndWatch.styles';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';

const RankAndWatch = ({ onWatchlist, coinCode, children }) => {
  const { watchlistCoinsList, handleUpdateWatchlist } = useLcwCoinsData();
  const [isOnWatchlist, setIsOnWatchlist] = useState(null);

  useEffect(() => {
    const isOnWatchlist = !!watchlistCoinsList?.includes(coinCode);
    setIsOnWatchlist(isOnWatchlist);
  }, [watchlistCoinsList, coinCode]);

  return (
    <Wrapper>
      <Rank>{children}</Rank>
      <WatchlistIcon
        isOnWatchlist={isOnWatchlist}
        onWatchlist={onWatchlist}
        onClick={() => handleUpdateWatchlist(coinCode)}
      />
    </Wrapper>
  );
};

export default RankAndWatch;
