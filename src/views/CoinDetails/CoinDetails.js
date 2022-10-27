import React, { useEffect } from 'react';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import { useParams } from 'react-router-dom';
import FullChart from 'components/atoms/FullChart/FullChart';
import OnPageError from 'components/molecules/OnPageError/OnPageError';
import Spinner from 'components/atoms/Spinner/Spinner';
import CoinMainStats from 'components/molecules/CoinMainStats/CoinMainStats';
import PriceChangeStats from 'components/molecules/PriceChangeStats/PriceChangeStats';

import {
  WrapperWrapperWrapper,
  WrapperWrapper,
  Wrapper,
  Line,
} from './CoinDetails.styles';
import DetailsHeader from 'components/molecules/DetailsHeader/DetailsHeader';

const CoinDetails = () => {
  const { currentCoinData, coinsData, handleSetCurrentCoinData } =
    useLcwCoinsData();
  const { code } = useParams();

  useEffect(() => {
    if (!coinsData) return;
    const data = coinsData.find(
      (coin) => coin.code.toUpperCase() === code.toUpperCase()
    );
    handleSetCurrentCoinData(data);
  }, [code, coinsData, handleSetCurrentCoinData]);

  return (
    <WrapperWrapperWrapper>
      {currentCoinData ? <DetailsHeader isWide data={currentCoinData} /> : null}
      <WrapperWrapper>
        <Wrapper>
          {currentCoinData === null ? <Spinner /> : null}
          {currentCoinData === undefined ? (
            <OnPageError code={currentCoinData.code} />
          ) : null}
          {currentCoinData ? (
            <>
              <DetailsHeader isNarrow data={currentCoinData} />
              <CoinMainStats data={currentCoinData} />
              <Line />
              <PriceChangeStats data={currentCoinData.delta} />
              <FullChart chartDataset={currentCoinData.history7d} />
            </>
          ) : null}
        </Wrapper>
      </WrapperWrapper>
    </WrapperWrapperWrapper>
  );
};

export default CoinDetails;
