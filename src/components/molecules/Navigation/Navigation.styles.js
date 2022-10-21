import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinksWrapper = styled.nav`
  width: 91rem;
  padding: 1em 0;

  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 0.3em 4rem;
  letter-spacing: 0.3px;
  transition: all 0.3s;

  &:first-of-type {
    padding-left: 0;
  }

  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.colors.tintSecondary.dark10};
  }

  &:link,
  &:visited {
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tintSecondary.light1};
  }

  &:active,
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.colors.primary};
      transform: translateY(1.2em);
      opacity: 0;
      transition: all 0.3s;
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};

    span {
      &::after {
        opacity: 1;
      }
    }
  }
`;
