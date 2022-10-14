import React from 'react';
import { Wrapper } from './Coins.styles';
import CoinsTable from 'components/molecules/CoinsTable/CoinsTable';
import Pagination from 'components/molecules/Pagination/Pagination';
import useCoins from 'hooks/useCoins';

const Coins = () => {
  const { data, page, handlePagination } = useCoins();

  return (
    <Wrapper>
      {data ? (
        <>
          <CoinsTable data={data} />
          <Pagination page={page} handlePagination={handlePagination} />
        </>
      ) : // Replace nul with a spinner
      null}
    </Wrapper>
  );
};

export default Coins;
