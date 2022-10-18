import React from 'react';
import { Wrapper, Pagination } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import { useCoins } from 'hooks/useCoins';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';

const Coins = () => {
  const { pageCoinsList } = useLcwCoinsData();
  const { lastPage, handlePagination, perPageLimit } = useCoins();

  return (
    <Wrapper>
      <>
        <CoinsTable data={pageCoinsList} />
        <Pagination
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePagination}
          pageRangeDisplayed={perPageLimit}
          pageCount={lastPage}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    </Wrapper>
  );
};

export default Coins;
