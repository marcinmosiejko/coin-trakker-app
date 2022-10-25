import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from 'config';
import {
  add7DayHistoryDataToCoinsData,
  fetchCoinsData,
  getUpdatedCoinsData,
  getUpdatedCoinsDataWithWatchlist,
  getUpdatedCoinsDataWithWatchlistCoinCode,
  filterByCoinNameOrCode,
} from 'helpers/lcwApi';
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/general';
import { useHistory7d } from './useHistory7d';

const LcwCoinsDataContext = React.createContext({});

export const LcwCoinsDataProvider = ({ children }) => {
  const [coinsData, setCoinsData] = useState(null);
  const [coinsCurPageCoinsList, setCoinsCurPageCoinsList] = useState(null);
  // To avoid repeatedly fetching 7d history data for same coin
  const { history7dCoinsList } = useHistory7d(coinsCurPageCoinsList);
  const [watchlistCoinCodes, setWatchlistCoinCodes] = useState(
    getFromLocalStorage('usersWatchlist') || []
  );

  const handleSetCoinsCurPageCoinsList = useCallback((data) => {
    setCoinsCurPageCoinsList(data);
  }, []);

  const handleUpdateWatchlist = (coinCode) => {
    setWatchlistCoinCodes((prevState) => {
      let updatedState;
      if (!prevState.includes(coinCode)) {
        updatedState = [...prevState, coinCode];
      } else {
        updatedState = prevState.filter((code) => code !== coinCode);
      }

      // + make the coin in coinsData also hold current info about being on watchlist
      setCoinsData((prevState) =>
        getUpdatedCoinsDataWithWatchlistCoinCode(prevState, coinCode)
      );

      return updatedState;
    });
  };

  const findCoins = (queryString) => {
    return filterByCoinNameOrCode(coinsData, queryString);
  };

  useEffect(() => {
    (async () => {
      try {
        // Fetch and set coinsData
        const meta = true;
        const data = await fetchCoinsData(meta);
        setCoinsData(data);
        // Update coinsData if they are on watchlist
        setCoinsData((prevState) =>
          getUpdatedCoinsDataWithWatchlist(prevState, watchlistCoinCodes)
        );
        // Fetch new coins data without metadata to keep it up to date
        setInterval(async () => {
          const newData = await fetchCoinsData();

          setCoinsData((prevState) => getUpdatedCoinsData(prevState, newData));
        }, DATA_REFRESH_INTERVAL);
      } catch (err) {
        console.error(err);
      }
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // Add 7d history data to coinsData so all data for rendering views listing coins can bo sourced from one place
        setCoinsData((prevState) => {
          if (!prevState) return;
          const enrichedState = add7DayHistoryDataToCoinsData(
            prevState,
            history7dCoinsList
          );
          return enrichedState;
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [history7dCoinsList]);

  useEffect(() => {
    saveToLocalStorage('usersWatchlist', watchlistCoinCodes);
  }, [watchlistCoinCodes]);

  return (
    <LcwCoinsDataContext.Provider
      value={{
        coinsData,
        coinsCurPageCoinsList,
        history7dCoinsList,
        handleSetCoinsCurPageCoinsList,
        handleUpdateWatchlist,
        watchlistCoinCodes,
        findCoins,
      }}
    >
      {children}
    </LcwCoinsDataContext.Provider>
  );
};

export const useLcwCoinsData = () => {
  const useLcwCoinsDataContext = useContext(LcwCoinsDataContext);

  if (!useLcwCoinsDataContext)
    throw Error('useLcwApi needs to be used inside useLcwCoinsDataContext');

  return useLcwCoinsDataContext;
};
