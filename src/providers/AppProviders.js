import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { LcwCoinsDataProvider } from 'hooks/useCoinsData';
import { OnPageErrorsProvider } from 'hooks/useOnPageError';
import { Provider } from 'react-redux';
import { store } from 'store';

const AppProviders = ({ children }) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <OnPageErrorsProvider>
            <Provider store={store}>
              <LcwCoinsDataProvider>
                <GlobalStyle />
                {children}
              </LcwCoinsDataProvider>
            </Provider>
          </OnPageErrorsProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default AppProviders;
