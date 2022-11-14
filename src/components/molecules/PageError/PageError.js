import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, PageWrapper, Message, StatusCode } from './PageError.styles';
import SadIcon from 'components/atoms/SadIcon/SadIcon';

const PageErrorContent = ({ code, message, hasIcon = true, isS, isDark }) => {
  return (
    <Wrapper>
      {hasIcon ? <SadIcon /> : null}
      <Message isS={isS} isDark={isDark}>
        {message}
      </Message>
      {code ? <StatusCode>Error status code: {code}</StatusCode> : null}
    </Wrapper>
  );
};

const PageError = ({ code, message, hasPageWrapper = false, ...props }) => {
  if (hasPageWrapper)
    return (
      <PageWrapper>
        <PageErrorContent code={code} message={message} {...props} />
      </PageWrapper>
    );

  return <PageErrorContent code={code} message={message} {...props} />;
};

PageError.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string,
  hasPageWrapper: PropTypes.bool,
  hasIcon: PropTypes.bool,
  isS: PropTypes.bool,
  isDark: PropTypes.bool,
};

export default PageError;
