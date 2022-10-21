import React, { useRef } from 'react';
import { Wrapper } from './Coins.styles';
import CoinsTable from 'components/organisms/CoinsTable/CoinsTable';
import { useCoins } from 'hooks/useCoins';
import Pagination from 'components/molecules/Pagination/Pagination';
import ShowWatchlist from 'components/atoms/ShowWatchlist/ShowWatchlist';
import { TableOptionsWrapper } from 'components/atoms/TableOptionsWrapper/TableOptionsWrapper';

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
          <TableOptionsWrapper>
            <ShowWatchlist
              showWatchlist={showWatchlist}
              handleSetShowWatchlist={handleSetShowWatchlist}
            />
          </TableOptionsWrapper>
          <CoinsTable tableRef={tableRef} data={coinsCurPageCoinsList} />
        </div>

        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          handlePageChange={(e) => handlePageChange(e, tableRef)}
        />
      </>
    </Wrapper>
  );
};

export default Coins;
