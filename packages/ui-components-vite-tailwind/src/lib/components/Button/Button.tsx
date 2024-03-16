import type { ButtonProps } from './Button.types';
export const Button = ({ children, onClick }: ButtonProps) => (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
        {children}
    </button>
);
