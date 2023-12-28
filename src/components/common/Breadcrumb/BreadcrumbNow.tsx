import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<{}>;

export default function BreadcrumbNow({ children }: TextProps) {
  return <div className="breadcrumb-now inline-block">{children}</div>;
}
