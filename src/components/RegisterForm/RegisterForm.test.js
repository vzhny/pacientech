import React from 'react';
import { render } from 'react-testing-library';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  it('should render without crashing', () => {
    const mockCallback = jest.fn();
    render(<RegisterForm toggleModal={mockCallback} />);
  });
});
