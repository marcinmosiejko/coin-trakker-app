import styled from 'styled-components';
import { breakPoints } from 'assets/styles/breakPoints';

export const WrapperWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tintSecondary.dark10};

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 92rem;
  padding: 2rem 0;

  @media only screen and (max-width: ${breakPoints.xxl}) {
    padding: 2rem 1rem;
  }
`;

export const Logo = styled.div`
  -ms-user-select: none;
  user-select: none;
  font-size: 2.8rem;
  letter-spacing: 1.5px;
  font-weight: 600;

  span {
    font-weight: 600;
    font-size: 4.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
