import CoinDataPoint from 'components/atoms/CoinDataPoint/CoinDataPoint';
import CoinId from 'components/atoms/CoinId/CoinId';
import SadIcon from 'components/atoms/SadIcon/SadIcon';
import Spinner from 'components/atoms/Spinner/Spinner';
import {
  roundLargeValue,
  RoundSmallValue,
  getPercentageChange,
} from 'helpers/general';
import { useLcwCoinsData } from 'hooks/useLcwCoinsData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  CoinDescription,
  Rate,
  MainStats,
  PriceChangeStats,
  Line,
  PageError,
  Message,
} from './CoinDetails.styles';

const CoinDetails = () => {
  const { coinsData } = useLcwCoinsData();
  const [coinData, setCoinData] = useState(null);
  const { code } = useParams();

  useEffect(() => {
    if (!coinsData) return;
    const data = coinsData.find(
      (coin) => coin.code.toUpperCase() === code.toUpperCase()
    );
    setCoinData(data);
  }, [code, coinsData]);

  return (
    <Wrapper>
      {coinData === null ? <Spinner /> : null}
      {coinData === undefined ? (
        <PageError>
          <SadIcon />
          <Message>
            Sorry, there's no <span>{`${code}`}</span> coin in our database
          </Message>
        </PageError>
      ) : null}
      {coinData ? (
        <>
          <CoinDescription>
            <CoinId isCoinDetails data={coinData} />

            <Rate>${RoundSmallValue(coinData.rate)}</Rate>
          </CoinDescription>
          <MainStats>
            <CoinDataPoint
              description="MARKET CAP"
              dataPoint={`${roundLargeValue(coinData.cap)}`}
            />
            <CoinDataPoint
              description="24H VOLUME"
              dataPoint={`$${roundLargeValue(coinData.volume)}`}
            />
            <CoinDataPoint
              description="ALL TIME HIGH"
              dataPoint={`$${69420.33}`}
            />
          </MainStats>
          <Line />
          <PriceChangeStats>
            <CoinDataPoint
              dataPoint={`${getPercentageChange(coinData.delta.hour)}%`}
              description="1H"
              change={coinData.delta.hour}
            />
            <CoinDataPoint
              dataPoint={`${getPercentageChange(coinData.delta.day)}%`}
              description="24H"
              change={coinData.delta.day}
            />
            <CoinDataPoint
              dataPoint={`${getPercentageChange(coinData.delta.week)}%`}
              description="7D"
              change={coinData.delta.week}
            />
            <CoinDataPoint
              dataPoint={`${getPercentageChange(coinData.delta.month)}%`}
              description="30D"
              change={coinData.delta.month}
            />
            <CoinDataPoint
              dataPoint={`${getPercentageChange(coinData.delta.quarter)}%`}
              description="90D"
              change={coinData.delta.quarter}
            />
            <CoinDataPoint
              dataPoint={`${getPercentageChange(coinData.delta.year)}%`}
              description="1Y"
              change={coinData.delta.year}
            />
          </PriceChangeStats>
        </>
      ) : null}
    </Wrapper>
  );
};

export default CoinDetails;
