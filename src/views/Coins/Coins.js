import React from 'react';
import { Wrapper } from './Coins.styles';
import CoinsTable from 'components/molecules/CoinsTable/CoinsTable';
import Pagination from 'components/molecules/Pagination/Pagination';
import useCoins from 'hooks/useCoins';

const Coins = () => {
  const { displayData, currentPage, handlePagination } = useCoins();

  return (
    <Wrapper>
      {displayData ? (
        <>
          <CoinsTable data={displayData} />
          <Pagination
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        </>
      ) : // Replace nul with a spinner
      null}
    </Wrapper>
  );
};

export default Coins;
