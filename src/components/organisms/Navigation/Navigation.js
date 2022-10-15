import React from 'react';
import { Wrapper, LinksWrapper, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <LinksWrapper>
        {/* <StyledLink to="/">Home</StyledLink> */}
        <StyledLink to="/coins">Coins</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Navigation;
