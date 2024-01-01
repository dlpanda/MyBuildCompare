import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type TextVariant = '' | 'grey' | 'grey-bold' | 'light' | 'underlined-links';

type TextProps = PropsWithChildren<{
    className?: string;
    variant?: TextVariant;
}>;

export default function Text({ children, className, variant = '' }: TextProps) {
    const textVariant = `body-text-${variant}`;
    const classNames = clsx(`${className} ${textVariant} `);
    return <div className={classNames}>{children}</div>;
}
