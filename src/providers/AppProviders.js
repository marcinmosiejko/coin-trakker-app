import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { LcwCoinsDataProvider } from 'hooks/useLcwCoinsData';
import { OnPageErrorProvider } from 'hooks/useOnPageError';

const AppProviders = ({ children }) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <OnPageErrorProvider>
            <LcwCoinsDataProvider>
              <GlobalStyle />
              {children}
            </LcwCoinsDataProvider>
          </OnPageErrorProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default AppProviders;
