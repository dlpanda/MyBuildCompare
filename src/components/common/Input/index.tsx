import clsx from 'clsx';
type InputProps = {
    inputValue?: string;
    placeholder?: string;
    className?: string;
    onChange?: (value: string) => void;
};

export default function Input({
    inputValue,
    className,
    placeholder = '',
    onChange,
}: InputProps) {
    const classNames = clsx(`outline-none ${className}`);
    return (
        <input
            className={classNames}
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
        />
    );
}
