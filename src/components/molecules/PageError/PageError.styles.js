import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const Message = styled.div`
  width: 90%;
  max-width: 56rem;
  text-align: center;
  line-height: 1.6;
`;

export const StatusCode = styled.div`
  width: 90%;
  text-align: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light10};
`;
