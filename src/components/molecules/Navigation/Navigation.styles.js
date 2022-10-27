import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakPoints } from 'assets/styles/breakPoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinksWrapper = styled.nav`
  width: 100%;
  max-width: 92rem;
  padding: 1.5rem 1.5rem;

  display: flex;
  align-items: center;

  @media only screen and (max-width: ${breakPoints.xxl}) {
    padding: 1rem 3rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
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

  /* span {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.colors.primary};
      transform: translateY(0.8em);
      opacity: 0;
      transition: all 0.3s;
    }
  } */

  &.active {
    color: ${({ theme }) => theme.colors.primary};

    /* span {
      &::after {
        opacity: 1;
      }
    } */
  }
`;
