// relative imports

import BreadcrumbHistory from '@/components/common/Text/BreadcrumbHistory';
import BreadcrumbNow from '@/components/common/Text/BreadcrumbNow';

type BreadcrumbProps = {
  data: any;
  className?: string;
};

export default function Breadcrumb(props: BreadcrumbProps) {
  const data = JSON.parse(JSON.stringify(props.data));
  const current: any = data.pop();
  return (
    <div className={`px-20 ${props.className}`}>
      {data.map((v: any, i: number) => {
        return <BreadcrumbHistory key={i} text={v.text}></BreadcrumbHistory>;
      })}
      <BreadcrumbNow text={current.text}></BreadcrumbNow>
    </div>
  );
}
