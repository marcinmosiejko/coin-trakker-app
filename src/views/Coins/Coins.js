import React, { useRef } from 'react';
import { Wrapper } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import { useCoins } from 'hooks/useCoins';
import Pagination from 'components/molecules/Pagination/Pagination';
import ShowWatchlist from 'components/atoms/ShowWatchlist/ShowWatchlist';

const Coins = () => {
  const {
    coinsCurPageCoinsList,
    currentPage,
    lastPage,
    handlePageChange,
    handleSetShowWatchlist,
    showWatchlist,
  } = useCoins();
  const tableRef = useRef(null);

  return (
    <Wrapper>
      <>
        <div>
          <ShowWatchlist
            showWatchlist={showWatchlist}
            handleSetShowWatchlist={handleSetShowWatchlist}
          />
          <CoinsTable tableRef={tableRef} data={coinsCurPageCoinsList} />
        </div>

        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          handlePageChange={handlePageChange.bind(tableRef)}
        />
      </>
    </Wrapper>
  );
};

export default Coins;
