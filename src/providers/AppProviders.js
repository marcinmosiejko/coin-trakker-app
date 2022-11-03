import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { LcwCoinsDataProvider } from 'hooks/useLcwCoinsData';
import { OnPageErrorsProvider } from 'hooks/useOnPageError';

const AppProviders = ({ children }) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <OnPageErrorsProvider>
            <LcwCoinsDataProvider>
              <GlobalStyle />
              {children}
            </LcwCoinsDataProvider>
          </OnPageErrorsProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default AppProviders;
