import React from 'react';
import { render, screen } from 'test-utils';
import Coins from './Coins';

describe('Coins', () => {
  it('Renders the component', () => {
    render(<Coins />);
    screen.getByText('Watchlist');
  });
});
