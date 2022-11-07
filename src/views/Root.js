import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Coins from 'views/Coins/Coins';
import Portfolio from './Portfolio/Portfolio';
import CoinDetails from './CoinDetails/CoinDetails';
import ScrollToTop from 'components/templates/ScrollToTop/ScrollToTop';
import { useOnPageErrors } from 'hooks/useOnPageError';
import { useSelector } from 'react-redux';

const Root = () => {
  const coinsData = useSelector((state) => state.coinsData);
  const { onPageErrors, PageErrorComponent } = useOnPageErrors();

  return (
    <MainTemplate>
      {onPageErrors.coinsData && !coinsData ? (
        <PageErrorComponent errorName="coinsData" />
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate replace to="/coins" />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/coin" element={<CoinDetails />}>
              <Route path=":code" element={<CoinDetails />} />
            </Route>
          </Routes>
        </>
      )}
    </MainTemplate>
  );
};

export default Root;
