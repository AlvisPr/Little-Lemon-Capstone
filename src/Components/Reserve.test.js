import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Reserve from './Reserve';
import { FormDataContext } from './FormDataProvider';
import { BrowserRouter as Router } from 'react-router-dom';

window.scrollTo = jest.fn();

describe('Reserve component', () => {
  test('input field accuracy', () => {
    const mockSetFormData = jest.fn();

    const { getByLabelText } = render(
      <Router>
        <FormDataContext.Provider value={{ setFormData: mockSetFormData }}>
          <Reserve />
        </FormDataContext.Provider>
      </Router>
    );

    act(() => {
      fireEvent.change(getByLabelText('Occasion'), { target: { value: 'birthday' } });
    });
    expect(getByLabelText('Occasion').value).toBe('birthday');

    act(() => {
      fireEvent.change(getByLabelText('Date'), { target: { value: '2024-04-01' } });
    });
    expect(getByLabelText('Date').value).toBe('2024-04-01');

    act(() => {
      fireEvent.change(getByLabelText('Time'), { target: { value: '13:00' } });
    });
    expect(getByLabelText('Time').value).toBe('13:00');

    act(() => {
      fireEvent.change(getByLabelText('Adults'), { target: { value: '2' } });
    });
    expect(getByLabelText('Adults').value).toBe('2');

    act(() => {
      fireEvent.change(getByLabelText('Toddlers'), { target: { value: '1' } });
    });
    expect(getByLabelText('Toddlers').value).toBe('1');

    act(() => {
      fireEvent.change(getByLabelText('Babies'), { target: { value: '0' } });
    });
    expect(getByLabelText('Babies').value).toBe('0');

    act(() => {
      fireEvent.change(getByLabelText('Name:'), { target: { value: 'John' } });
    });
    expect(getByLabelText('Name:').value).toBe('John');

    act(() => {
      fireEvent.change(getByLabelText('Last Name:'), { target: { value: 'Doe' } });
    });
    expect(getByLabelText('Last Name:').value).toBe('Doe');

    act(() => {
      fireEvent.change(getByLabelText('Email Address'), { target: { value: 'john@example.com' } });
    });
    expect(getByLabelText('Email Address').value).toBe('john@example.com');

  });
});


