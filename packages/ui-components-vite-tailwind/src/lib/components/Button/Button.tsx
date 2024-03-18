type ButtonVariant = 'filled' | 'outlined';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary';

// NB using extended types rather than interfaces for Vite compilation requirements
export type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'filled',
    size = 'md',
    color = 'primary',
    ...props
}) => {
    const baseStyles = 'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
    const sizeStyles = {
        sm: 'px-2.5 py-1.5 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-2 text-base',
    };
    const colorStyles = {
        primary: {
            filled: 'bg-indigo-600 text-white hover:bg-indigo-700',
            outlined: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent',
        },
        secondary: {
            filled: 'bg-gray-600 text-white hover:bg-gray-700',
            outlined: 'border border-gray-600 text-gray-600 hover:bg-gray-50 bg-transparent',
        },
    };
    const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;

    return (
        <button className={buttonStyles} {...props}>
            {children}
        </button>
    );
};
