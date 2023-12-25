import { ReactNode } from 'react';

type DialogProps = {
  className?: string;
  children: ReactNode;
};

export default function Dialog(props: DialogProps) {
  return (
    <div
      className={`w-[60%] mx-auto h-full overflow-y-scroll ${props.className}`}
    >
      {props.children}
    </div>
  );
}
