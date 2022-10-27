import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 10rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.tintSecondary.dark4};
  margin-bottom: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Description = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light12};
`;

export const Value = styled.span`
  font-size: 3.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tintSecondary.light2};
`;
