import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<{}>;

export default function BreadcrumbHistory({ children }: TextProps) {
    return <div className="breadcrumb-history inline-block">{children}</div>;
}
