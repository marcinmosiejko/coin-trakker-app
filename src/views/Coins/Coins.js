import React, { useRef } from 'react';
import { Wrapper } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import { useCoins } from 'hooks/useCoins';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import Pagination from 'components/molecules/Pagination/Pagination';

const Coins = () => {
  const { pageCoinsList } = useLcwCoinsData();
  const { lastPage, handlePagination } = useCoins();
  const tableRef = useRef(null);

  return (
    <Wrapper>
      <>
        <CoinsTable tableRef={tableRef} data={pageCoinsList} />

        <Pagination
          lastPage={lastPage}
          handlePagination={handlePagination.bind(tableRef)}
        />
      </>
    </Wrapper>
  );
};

export default Coins;
