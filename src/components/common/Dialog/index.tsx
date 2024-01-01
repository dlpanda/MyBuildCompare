import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export type DialogProps = PropsWithChildren<{
    className?: string;
}>;

export default function Dialog({ className, children }: DialogProps) {
    const classNames = clsx(
        `w-[60%] mx-auto h-full overflow-y-scroll ${className}`
    );
    return <div className={classNames}>{children}</div>;
}
