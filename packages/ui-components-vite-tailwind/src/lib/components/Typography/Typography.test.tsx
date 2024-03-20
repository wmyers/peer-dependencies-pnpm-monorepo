import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Typography } from './Typography';

describe('Typography', () => {
    it('renders the typography component with default props', () => {
        const { getByText } = render(<Typography>Default Typography</Typography>);
        const typographyElement = getByText('Default Typography');

        expect(typographyElement).toBeInTheDocument();
        expect(typographyElement).toHaveClass('font-medium leading-tight');
        expect(typographyElement).toHaveClass('text-5xl');
    });

    it('renders the typography component with custom size prop', () => {
        const { getByText } = render(<Typography size="h2">Custom Size Typography</Typography>);
        const typographyElement = getByText('Custom Size Typography');

        expect(typographyElement).toBeInTheDocument();
        expect(typographyElement).toHaveClass('font-medium leading-tight');
        expect(typographyElement).toHaveClass('text-4xl');
    });

    it('passes additional props to the typography component', () => {
        const { getByText } = render(<Typography id="custom-id">Typography with Additional Props</Typography>);
        const typographyElement = getByText('Typography with Additional Props');

        expect(typographyElement).toBeInTheDocument();
        expect(typographyElement).toHaveAttribute('id', 'custom-id');
    });
});
