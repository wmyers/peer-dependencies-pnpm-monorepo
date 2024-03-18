import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
    it('renders the button with default props', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const buttonElement = getByText('Click me');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2');
        expect(buttonElement).toHaveClass('px-3 py-2 text-sm');
        expect(buttonElement).toHaveClass('bg-indigo-600 text-white hover:bg-indigo-700');
    });

    it('renders the button with custom props', () => {
        const { getByText } = render(
            <Button variant="outlined" size="lg" color="secondary">
                Custom Button
            </Button>
        );
        const buttonElement = getByText('Custom Button');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2');
        expect(buttonElement).toHaveClass('px-4 py-2 text-base');
        expect(buttonElement).toHaveClass('border border-gray-600 text-gray-600 hover:bg-gray-50 bg-transparent');
    });

    it('calls the onClick handler when clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        const buttonElement = getByText('Click me');

        fireEvent.click(buttonElement);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
