import clsx from 'clsx';
import { useMemo } from 'react';
type Gap = {
    size: number;
    tabletSize?: number;
    mobileSize?: number;
    direction?: 'verical' | undefined;
    className?: string;
};

export default function Gap({
    size,
    tabletSize,
    mobileSize,
    direction,
    className,
}: Gap) {
    const { width, height, classNames } = useMemo(() => {
        let width, height, tabletWidth, tabletHeight, mobileWidth, mobileHeight;
        const rem = size / 16 + 'rem',
            tableRem = tabletSize ? tabletSize / 16 + 'rem' : rem,
            mobileRem = mobileSize ? mobileSize / 16 + 'rem' : rem;
        if (direction === 'verical') {
            height = tabletHeight = mobileHeight = '100%';
            width = rem;
            tabletWidth = tableRem;
            mobileWidth = mobileRem;
        } else {
            width = tabletWidth = mobileWidth = '100%';
            height = rem;
            tabletHeight = tableRem;
            mobileHeight = mobileRem;
        }
        const classNames = clsx(
            `w-[${width}] h-[${height}] table:w-[${tabletWidth}] table:h-[${tabletHeight}] mobile:w-[${mobileWidth}] mobile:h-[${mobileHeight}}] ${className}`,
            {
                'inline-block': direction === 'verical',
            }
        );
        return { width, height, classNames };
    }, []);
    return <div className={classNames} style={{ width, height }}></div>;
}
