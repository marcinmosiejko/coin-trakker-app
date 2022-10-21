import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Rank = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light7};
`;
