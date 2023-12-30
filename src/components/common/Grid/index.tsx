import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type GridProps = PropsWithChildren<{
    className?: string;
    cols?: number | string;
}>;

export default function Grid({ className, children, cols = 3 }: GridProps) {
    const classNames = clsx(`grid grid-cols-${cols} ${className}`);
    return <div className={classNames}>{children}</div>;
}
