import clsx from 'clsx';
import { useMemo } from 'react';
import BreadcrumbHistory from './BreadcrumbHistory';
import BreadcrumbNow from './BreadcrumbNow';

type BreadcrumbItem = {
    label: string;
};

export type BreadcrumbProps = {
    data: BreadcrumbItem[];
    className?: string;
};

export default function Breadcrumb({ data, className }: BreadcrumbProps) {
    const [current, history] = useMemo(() => {
        const copy = data.slice();
        return [copy.pop(), copy];
    }, [data]);
    const classNames = clsx(`px-20 ${className}`);
    return (
        <div className={classNames}>
            {history.map((v, i) => {
                return (
                    <BreadcrumbHistory key={i}>
                        <div>{v.label} &gt;</div>
                    </BreadcrumbHistory>
                );
            })}
            <BreadcrumbNow>{current?.label}</BreadcrumbNow>
        </div>
    );
}
