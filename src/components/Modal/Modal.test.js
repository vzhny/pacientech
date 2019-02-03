import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Modal from './Modal';

describe('Modal', () => {
  it('should fire the callback once close button is clicked', () => {
    const mockCallback = jest.fn();
    const { getByText } = render(
      <Modal title="Hello!" content={<p>Hello World!</p>} modalVisible toggleModal={mockCallback} />
    );
    fireEvent.click(getByText('×'));
    expect(mockCallback).toHaveBeenCalled();
  });
});
