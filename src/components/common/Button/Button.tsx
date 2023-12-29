import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}>;

export default function Button({
  onClick,
  className,
  textClassName,
  children,
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-block px-5 border border-[#D1D1D1] rounded-[5.625rem] button-box-shadow cursor-pointer ${className}`}
    >
      <div className={`inline-block ${textClassName}`}>{children}</div>
    </div>
  );
}
