import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: center;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  max-width: 80rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const StyledLink = styled(NavLink)`
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

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
