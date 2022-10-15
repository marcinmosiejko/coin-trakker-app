import axios from 'axios';
import { LCW_API_URL, API_LIMIT } from 'config';

const lcwAPI = axios.create({ baseURL: LCW_API_URL });
lcwAPI.defaults.headers = {
  'content-type': 'application/json',
  'x-api-key': process.env.REACT_APP_LCW_TOKEN,
};

export const fetchData = async () => {
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
    return finalData;
  } catch (err) {
    console.error(err);
  }
};
