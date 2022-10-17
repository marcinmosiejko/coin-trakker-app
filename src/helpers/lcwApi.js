import axios from 'axios';
import { LCW_API_URL, API_LIMIT } from 'config';
import dayjs from 'dayjs';

const lcwAPI = axios.create({ baseURL: LCW_API_URL });
lcwAPI.defaults.headers = {
  'content-type': 'application/json',
  'x-api-key': process.env.REACT_APP_LCW_TOKEN,
};

export const fetchCoinsListData = async () => {
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
    return finalData;
  } catch (err) {
    console.error(err);
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
    console.error(err);
  }
};

export const getHistory7dCoinsList = async (
  pageCoinsList,
  history7dCoinsList
) => {
  // Iterate through pageCoinsList and check if in history7dCoinsList is data for each coin. If there is, return. If there isn't, fetch history data for that coin. Finally add all history data to the history7dCoinsList keeping all history7dCoinsList data that is already in state. That way we fetch historical data for each coin only once

  if (!pageCoinsList) return;

  let historyList = await Promise.all(
    pageCoinsList.map(async (pc) => {
      const existingHistoryData = history7dCoinsList?.find((hc) => {
        return hc.name === pc.name && hc.code === pc.code;
      });

      if (existingHistoryData) return;

      const { history: historyData } = await fetchCoinsHistoryData(pc.code);

      const finalHistoryData = createFinalHistoryData(historyData);

      return {
        name: pc.name,
        code: pc.code,
        history: finalHistoryData,
      };
    })
  );

  // Filter out undefined values (a result of 'if (existingHistoryData) return;' statement when historical data for specified coin is already in state)
  historyList = historyList.filter((i) => i !== undefined);

  // Avoid updating state if there's nothing to add
  if (historyList.length === 0) return;

  return historyList;
};

export const createFinalHistoryData = (data) => {
  const retrievedData = [];

  for (let obj of data) {
    // Iterate through data array and check if current object's date is same as retrievedData last's object's date
    // If yes, skip to next object
    // If not, push that data object to retrievedData array
    if (
      dayjs(obj.date).date() ===
      dayjs(retrievedData.slice(-1).pop()?.date).date()
    )
      continue;

    retrievedData.push(obj);
  }

  // Replace last data point with the most recent one
  retrievedData.pop();
  retrievedData.push(data.at(-1));

  const finalData = retrievedData.map((obj) => obj.rate);
  return finalData;
};

export const handleSetPageCoinsList = ({
  coinsList,
  currentPage,
  perPageLimit,
  setPageCoinsList,
}) => {
  if (!coinsList) return;
  const pageStartIndex = (currentPage - 1) * perPageLimit;
  const pageEndIndex = currentPage * perPageLimit;

  const pageCoinsList = coinsList.slice(pageStartIndex, pageEndIndex);
  setPageCoinsList(pageCoinsList);
};
