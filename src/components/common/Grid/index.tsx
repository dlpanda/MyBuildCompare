import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type GridProps = PropsWithChildren<{
    className?: string;
    cols?: number | string;
    tabletCols?: number | string;
    mobileCols?: number | string;
}>;

export default function Grid({
    className,
    children,
    cols = 3,
    tabletCols,
    mobileCols,
}: GridProps) {
    const classNames = clsx(
        `grid grid-cols-${cols} tablet:grid-cols-${tabletCols} mobileCols:grid-cols-${mobileCols} ${className}`
    );
    return <div className={classNames}>{children}</div>;
}
