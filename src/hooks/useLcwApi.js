import React, { useContext, useEffect, useState } from 'react';
import { DATA_REFRESH_INTERVAL } from 'config';
import { fetchData } from 'helpers/lcwApi';

const LcwApiContext = React.createContext({});

export const LcwApiProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();
        setFetchedData(data);
        setInterval(() => fetchData(setFetchedData), DATA_REFRESH_INTERVAL);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <LcwApiContext.Provider
      value={{
        coinsList: fetchedData,
      }}
    >
      {children}
    </LcwApiContext.Provider>
  );
};

export const useLcwApi = () => {
  const lcwApiContext = useContext(LcwApiContext);

  if (!lcwApiContext)
    throw Error('useLcwApi needs to be used inside LcwApiContext');

  return lcwApiContext;
};
