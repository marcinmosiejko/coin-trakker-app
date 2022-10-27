import React from 'react';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import Downshift from '../Downshift/Downshift';
import { Wrapper, WrapperWrapper, Logo, SearchWrapper } from './PageId.styles';

const PageId = () => {
  const { findCoins } = useLcwCoinsData();

  return (
    <WrapperWrapper>
      <Wrapper>
        <Logo>
          <span>C</span>OIN TRAKKER
        </Logo>
        <SearchWrapper>
          <Downshift
            findCoins={findCoins}
            placeholder="Search a coin..."
            isSearch
          />
        </SearchWrapper>
      </Wrapper>
    </WrapperWrapper>
  );
};

export default PageId;
