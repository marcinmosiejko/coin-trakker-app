import React from 'react';
import WatchlistIcon from '../WatchlistIcon/WatchlistIcon';
import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.tintSecondary.light1};
  background-color: ${({ theme }) => theme.colors.tintSecondary.dark9};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ShowWatchlist = ({ showWatchlist, handleSetShowWatchlist }) => {
  return (
    <StyledButton onClick={handleSetShowWatchlist}>
      <WatchlistIcon isYellow={showWatchlist} />
      <span>Watchlist</span>
    </StyledButton>
  );
};

export default ShowWatchlist;
