import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 84rem;
  min-height: 50rem;
  padding: 5rem 2rem 3rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Wrapper = styled.div`
  padding: 1rem 0 4rem;
  min-height: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Message = styled.div`
  width: 90%;
  max-width: 56rem;
  text-align: center;
  line-height: 1.6;
  color: ${({ theme, isDark }) => {
    if (isDark) return theme.colors.tintSecondary.light10;
    return theme.colors.tintSecondary.light3;
  }};
  font-size: ${({ isS }) => {
    if (isS) return ' 1.2rem';
    return '1.6rem';
  }};
`;

export const StatusCode = styled.div`
  width: 90%;
  text-align: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light10};
`;
