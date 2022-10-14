import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LCW_API_URL,
  DATA_REFRESH_INTERVAL,
  API_LIMIT,
  PER_PAGE_LIMIT_DEFAULT,
} from 'helpers/config';

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

const handleSetDisplayData = ({
  fetchedData,
  currentPage,
  perPageLimit,
  setDisplayData,
}) => {
  if (!fetchedData) return;
  const pageStartIndex = (currentPage - 1) * perPageLimit;
  const pageEndIndex = currentPage * perPageLimit;

  const displayData = fetchedData.slice(pageStartIndex, pageEndIndex);
  setDisplayData(displayData);
};

const useCoins = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPageLimit = PER_PAGE_LIMIT_DEFAULT;

  useEffect(() => {
    fetchData(setFetchedData);
    setInterval(() => fetchData(setFetchedData), DATA_REFRESH_INTERVAL);
  }, []);

  useEffect(() => {
    handleSetDisplayData({
      fetchedData,
      currentPage,
      perPageLimit,
      setDisplayData,
    });
  }, [fetchedData, currentPage]);

  const handlePagination = (direction) => {
    const newPage = currentPage + direction;
    // Stop if new page less then 0
    if (newPage < 0) return;
    // Stop if new page has no results
    if (!fetchedData[(newPage - 1) * perPageLimit]) return;
    setCurrentPage(newPage);
  };

  return {
    displayData,
    currentPage,
    handlePagination,
  };
};

export default useCoins;
