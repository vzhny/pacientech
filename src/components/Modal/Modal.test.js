import React from 'react';
import { render } from 'react-testing-library';
import Modal from './Modal';

describe('Modal', () => {
  it('should render without crashing', () => {
    render(<Modal />);
  });
});
