import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper, Footer, StyledMain } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <StyledMain>{children}</StyledMain>
      <Footer>footer</Footer>
    </Wrapper>
  );
};

export default MainTemplate;
