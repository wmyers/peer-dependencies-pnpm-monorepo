type TypographySize = 'h1' | 'h2' | 'h3';

// NB using extended types rather than interfaces for Vite compilation requirements
export type TypographyProps = {
    size?: TypographySize;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Typography: React.FC<TypographyProps> = ({ children, size = 'h1', ...props }) => {
    const baseStyles = 'font-medium leading-tight';
    const sizeStyles = {
        h1: 'text-5xl',
        h2: 'text-4xl',
        h3: 'text-3xl',
    };
    const TypographyStyles = `${baseStyles} ${sizeStyles[size]}`;
    const Element = size;

    return (
        <Element className={TypographyStyles} {...props}>
            {children}
        </Element>
    );
};
