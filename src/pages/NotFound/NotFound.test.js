import React from 'react';
import { render } from 'react-testing-library';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should render without crashing', () => {
    render(<NotFound />);
  });
});
