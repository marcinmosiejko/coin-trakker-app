import React from 'react';
import { Wrapper, Pagination } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import useCoins from 'hooks/useCoins';

const Coins = () => {
  const { displayData, lastPage, handlePagination, perPageLimit } = useCoins();

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
