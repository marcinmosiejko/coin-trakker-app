import React from 'react';
import { LinksWrapper, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <LinksWrapper>
        <StyledLink to="/coins">
          <span>Coins</span>
        </StyledLink>
        <StyledLink to="/portfolio">
          {' '}
          <span>Portfolio</span>
        </StyledLink>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Navigation;
