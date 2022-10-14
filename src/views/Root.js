import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import Coins from 'views/Coins/Coins';
import Portfolio from './Portfolio/Portfolio';

const Root = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio" />} />
        <Route path="/watchlist" element={<Coins />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </MainTemplate>
  );
};

export default Root;
