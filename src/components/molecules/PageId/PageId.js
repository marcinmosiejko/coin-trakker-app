import React from 'react';
import Downshift from '../Downshift/Downshift';
import { Wrapper, WrapperWrapper, Logo, SearchWrapper } from './PageId.styles';
import { useSelector } from 'react-redux';
import { filterByCoinNameOrCode } from 'helpers/coinsData';

const PageId = () => {
  const { coinsData } = useSelector((state) => state);

  const findCoins = (queryString) => {
    return filterByCoinNameOrCode(coinsData, queryString);
  };

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
