import React from 'react';
import Button from '../Button/Button';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';

const ShowWatchlist = ({ showWatchlist, ...props }) => {
  return (
    <Button {...props}>
      <WatchlistIcon isYellow={showWatchlist} />
      <span>Watchlist</span>
    </Button>
  );
};

export default ShowWatchlist;
