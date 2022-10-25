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

const LcwCoinsDataContext = React.createContext({});

export const LcwCoinsDataProvider = ({ children }) => {
  const [coinsData, setCoinsData] = useState(null);
  const [coinsCurPageCoinsList, setCoinsCurPageCoinsList] = useState(null);
  // To avoid repeatedly fetching 7d history data for same coin
  const { history7dCoinsList } = useHistory7d(coinsCurPageCoinsList);
  const { usersWatchlist, watchlistCoinCodes, handleUpdateWatchlist } =
    useWatchlist();

  const handleSetCoinsCurPageCoinsList = useCallback((data) => {
    setCoinsCurPageCoinsList(data);
  }, []);

  const findCoins = (queryString) => {
    return filterByCoinNameOrCode(coinsData, queryString);
  };

  useEffect(() => {
    console.log(coinsData);
  }, [coinsData]);

  useEffect(() => {
    (async () => {
      try {
        if (!usersWatchlist) return;
        // Fetch and set coinsData
        const meta = true;
        const data = await fetchCoinsData(meta);
        setCoinsData(data);
        // Update coinsData onWatchlist based on localStorage (usersWatchlist)
        setCoinsData((prevState) =>
          getUpdatedCoinsDataWithWatchlist(prevState, usersWatchlist)
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
    // Won't cause rerenders as usersWatchlist gets created at app start and doesn't get updated
  }, [usersWatchlist]);

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
    setCoinsData((prevState) =>
      getUpdatedCoinsDataWithWatchlist(prevState, watchlistCoinCodes)
    );
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
