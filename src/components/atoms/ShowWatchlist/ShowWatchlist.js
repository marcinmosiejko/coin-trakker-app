import React from 'react';
import { StyledButton } from './ShowWatchlist.styles';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';

const ShowWatchlist = ({ showWatchlist, ...props }) => {
  return (
    <StyledButton {...props}>
      <WatchlistIcon isYellow={showWatchlist} />
      <span>Watchlist</span>
    </StyledButton>
  );
};

export default ShowWatchlist;
