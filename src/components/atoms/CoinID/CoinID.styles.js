import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 18rem;
  height: 8rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Name = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.tintSecondary.light11};
`;

export const StyledImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;

  text-align: left;
`;
