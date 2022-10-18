import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from 'config';
import {
  fetchCoinsListData,
  getHistory7dCoinsList,
  getUpdatedCoinsList,
} from 'helpers/lcwApi';

const LcwCoinsDataContext = React.createContext({});

export const LcwCoinsDataProvider = ({ children }) => {
  const [coinsData, setCoinsData] = useState(null);
  const [pageCoinsList, setPageCoinsList] = useState(null);
  const [history7dCoinsList, setHistory7dCoinsList] = useState(null);

  const handleSetPageCoinsList = useCallback(
    ({ currentPage, perPageLimit }) => {
      if (!coinsData) return;

      const pageStartIndex = (currentPage - 1) * perPageLimit;
      const pageEndIndex = currentPage * perPageLimit;

      const pageCoinsList = coinsData.slice(pageStartIndex, pageEndIndex);

      setPageCoinsList(pageCoinsList);
    },
    [coinsData]
  );

  useEffect(() => {
    (async () => {
      try {
        const meta = true;
        const data = await fetchCoinsListData(meta);
        setCoinsData(data);
        setInterval(async () => {
          const newData = await fetchCoinsListData();

          setCoinsData((prevState) => {
            const updatedData = getUpdatedCoinsList(prevState, newData);
            return updatedData;
          });
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

        // Avoid updating state if there's nothing to add, and there won't be nothign to add if the history data for specified coins was already in state
        if (historyList?.length === 0) return;

        // Add all history data to the state keeping all data from previous state. That way we have to fetch historical data only once for each coin
        setHistory7dCoinsList((prevState) => {
          if (!prevState) return historyList;
          if (prevState) return [...prevState, ...historyList];
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [pageCoinsList, history7dCoinsList]);

  return (
    <LcwCoinsDataContext.Provider
      value={{
        coinsData,
        handleSetPageCoinsList,
        pageCoinsList,
        history7dCoinsList,
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
