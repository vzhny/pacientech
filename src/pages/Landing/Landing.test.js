import React from 'react';
import { render } from 'react-testing-library';
import Landing from './Landing';

describe('Landing', () => {
  it('should render without crashing', () => {
    render(<Landing />);
  });
});
