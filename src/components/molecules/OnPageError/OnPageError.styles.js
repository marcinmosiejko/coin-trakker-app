import styled from 'styled-components';

export const Wrapper = styled.div`
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
