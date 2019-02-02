import React from 'react';
import { render } from 'react-testing-library';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should render without crashing', () => {
    render(<LoginForm />);
  });
});
