import axios from 'axios';
import {
  LCW_API_URL,
  API_LIMIT,
  API_CALLS,
  LCW_API_DEFAULT_TIMEOUT,
} from 'config';
import dayjs from 'dayjs';

const lcwAPI = axios.create({
  baseURL: LCW_API_URL,
  timeout: LCW_API_DEFAULT_TIMEOUT,
});
lcwAPI.defaults.headers = {
  'content-type': 'application/json',
  'x-api-key': process.env.REACT_APP_LCW_TOKEN,
};

export const fetchCoinsData = async (meta = false) => {
  try {
    const dataPromises = [];

    for (let i = 0; i < API_CALLS; i++) {
      const dataPromise = lcwAPI.post('/coins/list', {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: i * API_LIMIT,
        limit: API_LIMIT,
        meta,
      });
      dataPromises.push(dataPromise);
    }

    const responses = await Promise.all(dataPromises);
    const finalData = responses.reduce(
      (acc, data) => [...acc, ...data.data],
      []
    );

    return finalData;
  } catch (err) {
    throw err;
  }
};

export const fetchCoinsHistoryData = async (code) => {
  try {
    const { data } = await lcwAPI.post('/coins/single/history', {
      currency: 'USD',
      code,
      start: dayjs().subtract(6, 'day').valueOf(),
      end: dayjs().valueOf(),
      meta: false,
    });
    return data;
  } catch (err) {
    throw err;
  }
};
