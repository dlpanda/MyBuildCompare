// TODO PAN
type InputProps = {
  inputValue?: string;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export default function Input({
  inputValue,
  className,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      className={`outline-none ${className}`}
      type="text"
      value={inputValue}
      placeholder={placeholder || ''}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
