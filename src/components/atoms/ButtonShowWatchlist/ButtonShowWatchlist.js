import React from 'react';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';
import { StyledButton } from './ButtonShowWatchlist.styles';

const ButtonShowWatchlist = ({ showWatchlist, handleSetShowWatchlist }) => {
  return (
    <StyledButton onClick={handleSetShowWatchlist}>
      <WatchlistIcon isYellow={showWatchlist} />
      <span>Watchlist</span>
    </StyledButton>
  );
};

export default ButtonShowWatchlist;
