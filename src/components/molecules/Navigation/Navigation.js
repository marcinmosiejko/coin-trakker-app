import React from 'react';
import { LinksWrapper, StyledNavLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <LinksWrapper>
        <StyledNavLink to="/coins">
          <span>Coins</span>
        </StyledNavLink>
        <StyledNavLink to="/portfolio">
          <span>Portfolio</span>
        </StyledNavLink>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Navigation;
