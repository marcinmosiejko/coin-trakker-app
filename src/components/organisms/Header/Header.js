import React from 'react';
import { StyledHeader } from './Header.styles';
import Navigation from 'components/molecules/Navigation/Navigation';
import PageId from 'components/molecules/PageId/PageId';

const Header = () => {
  return (
    <StyledHeader>
      <PageId />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
