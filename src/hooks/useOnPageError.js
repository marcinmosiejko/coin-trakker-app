import React, { useState, createContext, useContext, useCallback } from 'react';
import PageError from 'components/molecules/PageError/PageError';

const OnPageErrorContext = createContext({});

export const OnPageErrorProvider = ({ children }) => {
  const [onPageError, setOnPageError] = useState({
    isError: false,
    code: '',
    message: '',
  });

  const dispatchOnPageError = useCallback((code, message) => {
    setOnPageError({ isError: true, code, message });
  }, []);

  const PageErrorComponent = () => {
    return <PageError message={onPageError.message} code={onPageError.code} />;
  };

  return (
    <OnPageErrorContext.Provider
      value={{ onPageError, dispatchOnPageError, PageErrorComponent }}
    >
      {children}
    </OnPageErrorContext.Provider>
  );
};

export const useOnPageError = () => {
  const useOnPageErrorContext = useContext(OnPageErrorContext);

  if (!useOnPageErrorContext)
    throw new Error(
      'useOnPageError needs to be used inside useOnPageErrorContext'
    );

  return useOnPageErrorContext;
};
