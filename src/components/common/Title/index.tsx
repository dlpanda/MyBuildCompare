import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type TitleVariant = '1' | '2' | '3' | '4' | '5' | '6' | '6-light' | '7-light';

type TitleProps = PropsWithChildren<{
    className?: string;
    variant?: TitleVariant;
}>;

export default function Title({
    children,
    className,
    variant = '1',
}: TitleProps) {
    const classNames = clsx(`${className} title-${variant} `);
    return <div className={classNames}>{children}</div>;
}
