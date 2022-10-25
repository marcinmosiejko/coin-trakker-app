import { useEffect, useState } from 'react';
import { getHistory7dCoinsList } from 'helpers/lcwApi';

export const useHistory7d = (coinsCurPageCoinsList) => {
  const [history7dCoinsList, setHistory7dCoinsList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const newHistory7dCoins = await getHistory7dCoinsList(
          coinsCurPageCoinsList,
          history7dCoinsList
        );

        // Avoid updating state if there's nothing to add, and there won't be nothign to add if the history data for specified coins was already in state
        // Also stops from endless loop due to having history7dCoinsList in dependency list (no guard clause would make history7dCoinsList update every time it's being updated)
        if (newHistory7dCoins?.length === 0) return;

        // Add all history data to the state keeping all data from previous state. That way we have to fetch historical data only once for each coin as getHisotry7dCoinsList fetches only data for coins that are not yet in history7dCoinsList
        setHistory7dCoinsList((prevState) => {
          if (!prevState) return newHistory7dCoins;
          return [...prevState, ...newHistory7dCoins];
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [coinsCurPageCoinsList, history7dCoinsList]);

  return { history7dCoinsList };
};