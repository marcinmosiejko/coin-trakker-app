import React, { useState, createContext, useContext, useCallback } from 'react';
import PageError from 'components/molecules/PageError/PageError';

const OnPageErrorsContext = createContext({});

const errorMessages = {
  coinsData:
    "Coins data couldn't be obtained. Please try refreshing the page. We sincerely apologize for your inconvinience.",
  history7dData: {
    tableChart: 'Data unavailable ;(',
    fullChart:
      'History data is not available. We sincerely apologize for your inconvinience.',
  },
};

const OnPageError = class {
  constructor({ errorName, code = '', isError = true }) {
    this.isError = isError;
    this.code = code;
    this.message = errorMessages[errorName] || '';
  }
};

export const OnPageErrorsProvider = ({ children }) => {
  const [onPageErrors, setOnPageErrors] = useState({});

  const dispatchOnPageError = useCallback((errorName, code) => {
    setOnPageErrors((prevState) => ({
      ...prevState,
      [errorName]: new OnPageError({ errorName, code }),
    }));
  }, []);

  const resetOnPageError = useCallback((errorName) => {
    setOnPageErrors((prevState) => ({
      ...prevState,
      [errorName]: new OnPageError({ errorName, isError: false }),
    }));
  }, []);

  const PageErrorComponent = ({ errorName }) => {
    return (
      <PageError
        message={onPageErrors[errorName].message}
        code={onPageErrors[errorName].code}
        hasPageWrapper={true}
      />
    );
  };

  return (
    <OnPageErrorsContext.Provider
      value={{
        onPageErrors,
        dispatchOnPageError,
        resetOnPageError,
        PageErrorComponent,
      }}
    >
      {children}
    </OnPageErrorsContext.Provider>
  );
};

export const useOnPageErrors = () => {
  const useOnPageErrorsContext = useContext(OnPageErrorsContext);

  if (!useOnPageErrorsContext)
    throw new Error(
      'useOnPageErrors needs to be used inside useOnPageErrorsContext'
    );

  return useOnPageErrorsContext;
};
