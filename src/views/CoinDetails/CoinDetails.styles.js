import { scrollbar } from 'assets/styles/mixins';
import styled from 'styled-components';

export const WrapperWrapperWrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  min-height: 60rem;
  padding: 3rem 2rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};

  overflow: auto;
  ${scrollbar}
`;

export const WrapperWrapper = styled.div`
  overflow: auto;
  ${scrollbar}
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
  margin-bottom: 3.2rem;

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
    margin-bottom: 0.2rem;
  }
`;

export const Line = styled.div`
  margin: 2rem 0;
  border-top: 2px solid ${({ theme }) => theme.colors.tintSecondary.dark5};
`;

// export const CoinDescription = styled.div``;
