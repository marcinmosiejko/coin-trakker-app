import React, { useEffect } from 'react';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import { useParams } from 'react-router-dom';
import FullChart from 'components/atoms/FullChart/FullChart';
import OnPageError from 'components/molecules/OnPageError/OnPageError';
import Spinner from 'components/atoms/Spinner/Spinner';
import CoinMainStats from 'components/molecules/CoinMainStats/CoinMainStats';
import PriceChangeStats from 'components/molecules/PriceChangeStats/PriceChangeStats';
import {
  Wrapper,
  ChartWrapper,
  ChartContainer,
  StatsWrapper,
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
    <Wrapper>
      {currentCoinData ? (
        <>
          {currentCoinData === null ? <Spinner /> : null}
          {currentCoinData === undefined ? (
            <OnPageError code={currentCoinData.code} />
          ) : null}

          <DetailsHeader data={currentCoinData} />
          <StatsWrapper>
            <PriceChangeStats data={currentCoinData.delta} />
            <CoinMainStats data={currentCoinData} />
          </StatsWrapper>
          <Line />
        </>
      ) : null}

      <ChartWrapper>
        <ChartContainer>
          {currentCoinData ? (
            <>
              <FullChart chartDataset={currentCoinData.history7d} />
            </>
          ) : null}
        </ChartContainer>
      </ChartWrapper>
    </Wrapper>
  );
};

export default CoinDetails;
