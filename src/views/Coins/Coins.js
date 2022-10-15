import React from 'react';
import { Wrapper, Pagination } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import useCoins from 'hooks/useCoins';
import { useLcwApi } from 'hooks/useLcwApi';

const Coins = () => {
  const { coinsList } = useLcwApi();
  const { displayData, lastPage, handlePagination, perPageLimit } =
    useCoins(coinsList);

  return (
    <Wrapper>
      {displayData ? (
        <>
          <CoinsTable data={displayData} />
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
      ) : null}
    </Wrapper>
  );
};

export default Coins;
