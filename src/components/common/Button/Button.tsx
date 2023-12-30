import clsx from 'clsx';
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
    const classNames = clsx(
        `button inline-block px-5 border border-[#D1D1D1] rounded-[5.625rem] button-box-shadow cursor-pointer ${className}`
    );
    const textClassNames = clsx(`inline-block ${textClassName}`);
    return (
        <div onClick={onClick} className={classNames}>
            <div className={textClassNames}>{children}</div>
        </div>
    );
}
