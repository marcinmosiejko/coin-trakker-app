import styled from 'styled-components';

export const WrapperWrapperWrapper = styled.div`
  width: 100%;
  max-width: 91rem;
  min-height: 60rem;
  padding: 3rem 2rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};

  overflow: auto;
`;

export const WrapperWrapper = styled.div`
  padding: 2rem 0;

  overflow: auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

export const CoinDescriptionWide = styled.div`
  min-width: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;

  @media only screen and (max-width: 25em) {
    display: none;
  }
`;

export const CoinDescriptionNarrow = styled.div`
  display: none;

  @media only screen and (max-width: 25em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }
`;

export const Rate = styled.div`
  font-size: 4.2rem;
`;

export const MainStats = styled.div`
  display: flex;
  gap: 3.8rem;
`;

export const Line = styled.div`
  margin: 1.4rem 0;
  border-top: 2px solid ${({ theme }) => theme.colors.tintSecondary.dark5};
`;

export const PriceChangeStats = styled.div`
  display: flex;
  gap: 3.8rem;
  margin-bottom: 1.2rem;
`;

export const PageError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;
export const Message = styled.div`
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// export const CoinDescription = styled.div``;
