import React from 'react';
import { render } from 'react-testing-library';
import Loader from './Loader';

describe('Loader', () => {
  it('should render without crashing', () => {
    render(<Loader />);
  });
});
