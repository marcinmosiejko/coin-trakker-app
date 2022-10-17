import React from 'react';
import { Wrapper, Pagination } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import { useCoins } from 'hooks/useCoins';
import { useLcwCoinsList } from 'hooks/useLcwCoinsList';

const Coins = () => {
  const { coinsList } = useLcwCoinsList();
  const { lastPage, handlePagination, perPageLimit } = useCoins(coinsList);

  return (
    <Wrapper>
      <>
        <CoinsTable />
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
