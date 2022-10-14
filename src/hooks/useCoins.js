import { useEffect, useState } from 'react';
import axios from 'axios';

const lcwAPI = axios.create({ baseURL: 'https://api.livecoinwatch.com' });
lcwAPI.defaults.headers = {
  'content-type': 'application/json',
  'x-api-key': process.env.REACT_APP_LCW_TOKEN,
};

const fetchData = async (page, limit, setData) => {
  try {
    const { data } = await lcwAPI.post('/coins/list', {
      currency: 'USD',
      sort: 'rank',
      order: 'ascending',
      offset: page * limit,
      limit: 20,
      meta: true,
    });
    console.log(data);
    setData(data);
  } catch (err) {
    console.error(err);
  }
};

const useCoins = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetchData(page, limit, setData);
  }, [page]);

  const handlePagination = (direction) => {
    const newPage = page + direction;
    // Stop if new page less then 0
    if (newPage < 0) return;

    setPage(newPage);
  };

  return {
    data,
    page,
    handlePagination,
  };
};

export default useCoins;
