import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { LcwCoinsListProvider } from 'hooks/useLcwCoinsList';

const AppProviders = ({ children }) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <LcwCoinsListProvider>
            <GlobalStyle />
            {children}
          </LcwCoinsListProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default AppProviders;
