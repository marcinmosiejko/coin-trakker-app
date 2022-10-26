import React from 'react';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import { Wrapper, StyledMain } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
