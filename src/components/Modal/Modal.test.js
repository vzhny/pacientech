import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Modal from './Modal';

describe('Modal', () => {
  it('should fire the callback once the confirm button is clicked', () => {
    const mockCallback = jest.fn();
    const { getByText } = render(
      <Modal
        title="Hello!"
        confirmBtn="OK"
        content={<p>Hello World!</p>}
        modalVisible
        toggleModal={mockCallback}
      />
    );
    fireEvent.click(getByText('OK'));
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should fire the callback once the cancel button is clicked', () => {
    const mockCallback = jest.fn();
    const { getByText } = render(
      <Modal
        title="Hello!"
        confirmBtn="OK"
        content={<p>Hello World!</p>}
        modalVisible
        toggleModal={mockCallback}
      />
    );
    fireEvent.click(getByText('Cancel'));
    expect(mockCallback).toHaveBeenCalled();
  });
});
