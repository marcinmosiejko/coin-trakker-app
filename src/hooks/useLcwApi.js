import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { LCW_API_URL, DATA_REFRESH_INTERVAL, API_LIMIT } from 'helpers/config';

const lcwAPI = axios.create({ baseURL: LCW_API_URL });
lcwAPI.defaults.headers = {
  'content-type': 'application/json',
  'x-api-key': process.env.REACT_APP_LCW_TOKEN,
};

const fetchData = async (setFetchedData) => {
  try {
    let finalData = [];

    for (let i = 0; i < 1; i++) {
      const { data } = await lcwAPI.post('/coins/list', {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: i * API_LIMIT,
        limit: API_LIMIT,
        meta: true,
      });
      finalData = [...finalData, ...data];
    }
    console.log(finalData);
    setFetchedData(finalData);
  } catch (err) {
    console.error(err);
  }
};

const LcwApiContext = React.createContext({});

export const LcwApiProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchData(setFetchedData);
    setInterval(() => fetchData(setFetchedData), DATA_REFRESH_INTERVAL);
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
