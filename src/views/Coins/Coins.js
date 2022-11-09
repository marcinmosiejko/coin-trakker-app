import React, { useRef } from 'react';
import { useCoins } from 'hooks/useCoins';
import Table from 'components/organisms/Table/Table';
import CoinsTableHead from 'components/molecules/CoinsTableHead/CoinsTableHead';
import TableBody from 'components/organisms/TableBody/TableBody';
import Pagination from 'components/molecules/Pagination/Pagination';
import ShowWatchlist from 'components/atoms/ShowWatchlist/ShowWatchlist';
import { Wrapper } from './Coins.styles';
import { TableOptionsWrapper } from 'components/atoms/TableOptionsWrapper/TableOptionsWrapper';

const Coins = () => {
  const {
    coinsCurPageCoinsList,
    currentPage,
    pageCount,
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
              onClick={handleSetShowWatchlist}
            />
          </TableOptionsWrapper>
          <Table tableRef={tableRef} data={coinsCurPageCoinsList} isCoins>
            {coinsCurPageCoinsList && (
              <>
                <CoinsTableHead />
                <TableBody data={coinsCurPageCoinsList} isCoins />
                <caption>Live Crypto Prices</caption>
              </>
            )}
          </Table>
        </div>

        {pageCount > 1 ? (
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageChange={({ selected }) =>
              handlePageChange(selected, tableRef)
            }
          />
        ) : null}
      </>
    </Wrapper>
  );
};

export default Coins;
