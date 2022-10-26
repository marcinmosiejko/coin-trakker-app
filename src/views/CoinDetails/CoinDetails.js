import CoinDataPoint from 'components/atoms/CoinDataPoint/CoinDataPoint';
import CoinId from 'components/atoms/CoinId/CoinId';
import FullChart from 'components/atoms/FullChart/FullChart';
import SadIcon from 'components/atoms/SadIcon/SadIcon';
import Spinner from 'components/atoms/Spinner/Spinner';
import {
  roundLargeValue,
  RoundSmallValue,
  getPercentageChange,
} from 'helpers/general';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  WrapperWrapperWrapper,
  WrapperWrapper,
  Wrapper,
  CoinDescriptionWide,
  CoinDescriptionNarrow,
  Rate,
  MainStats,
  PriceChangeStats,
  Line,
  PageError,
  Message,
} from './CoinDetails.styles';

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
      {currentCoinData ? (
        <CoinDescriptionWide>
          <CoinId isCoinDetails data={currentCoinData} />
          <Rate>${RoundSmallValue(currentCoinData.rate)}</Rate>
        </CoinDescriptionWide>
      ) : null}
      <WrapperWrapper>
        <Wrapper>
          {currentCoinData === null ? <Spinner /> : null}
          {currentCoinData === undefined ? (
            <PageError>
              <SadIcon />
              <Message>
                Sorry, there's no <span>{`${code}`}</span> coin in our database
              </Message>
            </PageError>
          ) : null}
          {currentCoinData ? (
            <>
              <CoinDescriptionNarrow>
                <CoinId isCoinDetails data={currentCoinData} />
                <Rate>${RoundSmallValue(currentCoinData.rate)}</Rate>
              </CoinDescriptionNarrow>
              <MainStats>
                <CoinDataPoint
                  description="MARKET CAP"
                  dataPoint={`${roundLargeValue(currentCoinData.cap)}`}
                />
                <CoinDataPoint
                  description="24H VOLUME"
                  dataPoint={`$${roundLargeValue(currentCoinData.volume)}`}
                />
                <CoinDataPoint
                  description="ALL TIME HIGH"
                  dataPoint={`$${69420.33}`}
                />
              </MainStats>
              <Line />
              <PriceChangeStats>
                <CoinDataPoint
                  dataPoint={`${getPercentageChange(
                    currentCoinData.delta.hour
                  )}%`}
                  description="1H"
                  change={currentCoinData.delta.hour}
                />
                <CoinDataPoint
                  dataPoint={`${getPercentageChange(
                    currentCoinData.delta.day
                  )}%`}
                  description="24H"
                  change={currentCoinData.delta.day}
                />
                <CoinDataPoint
                  dataPoint={`${getPercentageChange(
                    currentCoinData.delta.week
                  )}%`}
                  description="7D"
                  change={currentCoinData.delta.week}
                />
                <CoinDataPoint
                  dataPoint={`${getPercentageChange(
                    currentCoinData.delta.month
                  )}%`}
                  description="30D"
                  change={currentCoinData.delta.month}
                />
                <CoinDataPoint
                  dataPoint={`${getPercentageChange(
                    currentCoinData.delta.quarter
                  )}%`}
                  description="90D"
                  change={currentCoinData.delta.quarter}
                />
                <CoinDataPoint
                  dataPoint={`${getPercentageChange(
                    currentCoinData.delta.year
                  )}%`}
                  description="1Y"
                  change={currentCoinData.delta.year}
                />
              </PriceChangeStats>
              <FullChart chartDataset={currentCoinData.history7d} />
            </>
          ) : null}
        </Wrapper>
      </WrapperWrapper>
    </WrapperWrapperWrapper>
  );
};

export default CoinDetails;
