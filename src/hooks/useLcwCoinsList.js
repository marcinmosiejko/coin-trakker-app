import React, { useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from 'config';
import {
  fetchCoinsListData,
  handleSetPageCoinsList,
  getHistory7dCoinsList,
} from 'helpers/lcwApi';

const LcwCoinsListContext = React.createContext({});

export const LcwCoinsListProvider = ({ children }) => {
  const [coinsList, setCoinsList] = useState(null);
  const [pageCoinsList, setPageCoinsList] = useState(null);
  const [history7dCoinsList, setHistory7dCoinsList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCoinsListData();
        setCoinsList(data);
        setInterval(async () => {
          const data = await fetchCoinsListData();
          setCoinsList(data);
        }, DATA_REFRESH_INTERVAL);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const historyList = await getHistory7dCoinsList(
          pageCoinsList,
          history7dCoinsList
        );

        if (!historyList) return;

        setHistory7dCoinsList((h) => {
          if (!h) return historyList;
          if (h) return [...h, ...historyList];
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [pageCoinsList, history7dCoinsList]);

  return (
    <LcwCoinsListContext.Provider
      value={{
        coinsList,
        handleSetPageCoinsList,
        pageCoinsList,
        setPageCoinsList,
        history7dCoinsList,
      }}
    >
      {children}
    </LcwCoinsListContext.Provider>
  );
};

export const useLcwCoinsList = () => {
  const useLcwCoinsListContext = useContext(LcwCoinsListContext);

  if (!useLcwCoinsListContext)
    throw Error('useLcwApi needs to be used inside useLcwCoinsListContext');

  return useLcwCoinsListContext;
};
