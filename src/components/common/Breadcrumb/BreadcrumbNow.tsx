import { PropsWithChildren } from 'react';

type BreadcrumbNowProps = PropsWithChildren<{}>;

export default function BreadcrumbNow({ children }: BreadcrumbNowProps) {
    return <div className="breadcrumb-now inline-block">{children}</div>;
}
