import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from 'config';
import {
  add7DayHistoryDataToCoinsData,
  fetchCoinsData,
  getUpdatedCoinsData,
  getUpdatedCoinsDataWithWatchlist,
  filterByCoinNameOrCode,
} from 'helpers/lcwApi';
import { useHistory7d } from './useHistory7d';
import { useWatchlist } from './useWatchlist';
import { useOnPageError } from './useOnPageError';

const LcwCoinsDataContext = React.createContext({});

export const LcwCoinsDataProvider = ({ children }) => {
  const [coinsData, setCoinsData] = useState(null);
  const [coinsCurPageCoinsList, setCoinsCurPageCoinsList] = useState(null);
  const [currentCoinData, setCurrentCoinData] = useState(null);
  // To avoid repeatedly fetching 7d history data for same coin
  const { history7dCoinsList } = useHistory7d(
    coinsCurPageCoinsList,
    currentCoinData
  );
  const { usersWatchlist, watchlistCoinCodes, handleUpdateWatchlist } =
    useWatchlist();
  const { dispatchOnPageError } = useOnPageError();

  const handleSetCoinsCurPageCoinsList = useCallback((data) => {
    setCoinsCurPageCoinsList(data);
  }, []);

  const handleSetCurrentCoinData = useCallback((coin) => {
    setCurrentCoinData(coin);
  }, []);

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
        // Update coinsData onWatchlist based on localStorage (usersWatchlist)
        if (usersWatchlist)
          setCoinsData((prevState) =>
            getUpdatedCoinsDataWithWatchlist(prevState, usersWatchlist)
          );
        // Fetch new coins data without metadata to keep it up to date
        setInterval(async () => {
          const newData = await fetchCoinsData();

          setCoinsData((prevState) => getUpdatedCoinsData(prevState, newData));
        }, DATA_REFRESH_INTERVAL);
      } catch (err) {
        dispatchOnPageError(
          err.response.status,
          "Coins data couldn't be obtained. Please try refreshing the page. We sincerely apologize for your inconvinience. "
        );
      }
    })();
    // Won't cause rerenders as usersWatchlist gets created at app start and doesn't get updated
  }, [usersWatchlist, dispatchOnPageError]);

  useEffect(() => {
    // Add 7d history data to coinsData so all data for rendering views listing coins can bo sourced from one place
    setCoinsData((prevState) => {
      if (!prevState) return;
      const enrichedState = add7DayHistoryDataToCoinsData(
        prevState,
        history7dCoinsList
      );
      return enrichedState;
    });
  }, [history7dCoinsList]);

  useEffect(() => {
    setCoinsData((prevState) =>
      getUpdatedCoinsDataWithWatchlist(prevState, watchlistCoinCodes)
    );
  }, [watchlistCoinCodes]);

  return (
    <LcwCoinsDataContext.Provider
      value={{
        coinsData,
        currentCoinData,
        coinsCurPageCoinsList,
        history7dCoinsList,
        handleSetCurrentCoinData,
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
    throw new Error(
      'useLcwCoinsData needs to be used inside useLcwCoinsDataContext'
    );

  return useLcwCoinsDataContext;
};
