import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('should render without crashing', () => {
    render(<Dashboard />);
  });
});
