import React, { useRef, useState } from 'react';
import { Wrapper, Pagination } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import { useCoins } from 'hooks/useCoins';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';

const Coins = () => {
  const { pageCoinsList } = useLcwCoinsData();
  const { lastPage, handlePagination } = useCoins();
  const [tableRef, setTableRef] = useState(null);

  const handleSetTableRef = (ref) => {
    setTableRef(ref);
  };

  return (
    <Wrapper>
      <>
        <CoinsTable
          handleSetTableRef={handleSetTableRef}
          data={pageCoinsList}
        />

        <Pagination
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePagination.bind(tableRef)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={lastPage}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    </Wrapper>
  );
};

export default Coins;
