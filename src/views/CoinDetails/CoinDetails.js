import React, { useEffect } from 'react';
import { useLcwCoinsData } from 'hooks/useCoinsData';
import { useParams } from 'react-router-dom';
import FullChart from 'components/atoms/FullChart/FullChart';
import PageError from 'components/molecules/PageError/PageError';
import Spinner from 'components/atoms/Spinner/Spinner';
import CoinMainStats from 'components/molecules/CoinMainStats/CoinMainStats';
import PriceChangeStats from 'components/molecules/PriceChangeStats/PriceChangeStats';
import {
  Wrapper,
  ChartWrapper,
  ChartContainer,
  StatsWrapper,
  Line,
  SideShadow,
  SideShadowWrapper,
} from './CoinDetails.styles';
import DetailsHeader from 'components/molecules/DetailsHeader/DetailsHeader';
import { useSelector } from 'react-redux';

const CoinDetails = () => {
  const coinsData = useSelector((state) => state.coinsData);
  const { currentCoinData, handleSetCurrentCoinData } = useLcwCoinsData();
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
      {currentCoinData === null ? <Spinner /> : null}
      {currentCoinData === undefined ? (
        <PageError
          hasPageWrapper={true}
          message={`Sorry, there's no ${code} coin in our database.`}
        />
      ) : null}
      {currentCoinData ? (
        <>
          <DetailsHeader data={currentCoinData} />
          <StatsWrapper>
            <PriceChangeStats data={currentCoinData.delta} />
            <CoinMainStats data={currentCoinData} />
          </StatsWrapper>
          <Line />
          <ChartWrapper>
            <SideShadowWrapper>
              <SideShadow />
              <ChartContainer>
                <FullChart chartDataset={currentCoinData.history7d} />
              </ChartContainer>
            </SideShadowWrapper>
          </ChartWrapper>
        </>
      ) : null}
    </Wrapper>
  );
};

export default CoinDetails;
