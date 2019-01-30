import React from 'react';
import { render } from 'react-testing-library';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render without crashing', () => {
    render(<Navigation />);
  });
});
