import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { LcwCoinsDataProvider } from 'hooks/useLcwCoinsData';

const AppProviders = ({ children }) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <LcwCoinsDataProvider>
            <GlobalStyle />
            {children}
          </LcwCoinsDataProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default AppProviders;
