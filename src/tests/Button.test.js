import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button', () => {
    it('render button container', () => {
        render(<Button />);
        const ButtonElement = screen.getAllByTestId('button-container');
        expect(ButtonElement.length).not.toEqual(0);
    });
    it(`render Button with text 'Default' on passing prop name 'Default'`, () => {
        render(<Button name="Default" />);
        const ButtonElement = screen.getByText('Default');
        expect(ButtonElement).toBeInTheDocument();
    });
});
