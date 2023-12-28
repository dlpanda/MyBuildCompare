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

// TODO PAN
export default function Breadcrumb({ data, className }: BreadcrumbProps) {
  const [current, rest] = useMemo(() => {
    const copy = data.slice();
    return [copy.pop(), copy];
  }, [data]);

  return (
    <div className={`px-20 ${className}`}>
      {data.map((v, i) => {
        return <BreadcrumbHistory key={i} text={v.text}></BreadcrumbHistory>;
      })}
      <BreadcrumbNow text={current.text}></BreadcrumbNow>
    </div>
  );
}
