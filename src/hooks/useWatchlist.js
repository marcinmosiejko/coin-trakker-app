import { useEffect, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/general';

const usersWatchlist = getFromLocalStorage('usersWatchlist');

export const useWatchlist = () => {
  const [watchlistCoinCodes, setWatchlistCoinCodes] = useState(
    usersWatchlist || []
  );

  const handleUpdateWatchlist = (coinCode) => {
    setWatchlistCoinCodes((prevState) => {
      let updatedState;
      if (!prevState.includes(coinCode)) {
        updatedState = [...prevState, coinCode];
      } else {
        updatedState = prevState.filter((code) => code !== coinCode);
      }

      return updatedState;
    });
  };

  useEffect(() => {
    saveToLocalStorage('usersWatchlist', watchlistCoinCodes);
  }, [watchlistCoinCodes]);

  return { usersWatchlist, watchlistCoinCodes, handleUpdateWatchlist };
};
