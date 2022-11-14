import React from 'react';
import PropTypes from 'prop-types';
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

ShowWatchlist.propTypes = {
  showWatchlist: PropTypes.bool,
};

export default ShowWatchlist;
