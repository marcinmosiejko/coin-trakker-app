import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { LcwApiProvider } from 'hooks/useLcwApi';

const AppProviders = ({ children }) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <LcwApiProvider>
            <GlobalStyle />
            {children}
          </LcwApiProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default AppProviders;
