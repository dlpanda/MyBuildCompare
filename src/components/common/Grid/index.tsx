import { ReactNode } from 'react';

type GridProps = {
  className?: string;
  cols?: number;
  children: ReactNode;
};

// ?? props
export default function Grid(props: GridProps) {
  const { cols = 3 } = props;
  return <div className={`grid ${props.className}`}>{props.children}</div>;
}
