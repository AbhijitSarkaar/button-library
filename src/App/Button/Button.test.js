import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

test('render button container', () => {
    render(<Button />);
    const ButtonElement = screen.getAllByTestId('button-container');
    expect(ButtonElement.length).not.toEqual(0);
});
