import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 91rem;
  min-height: 55rem;
  padding: 3rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;

  gap: 2.8rem;
`;

export const CoinDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Rate = styled.div`
  font-size: 4.8rem;
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
