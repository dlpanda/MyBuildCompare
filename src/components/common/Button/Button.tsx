import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}>;

export default function Button(props: ButtonProps) {
  return (
    <div
      onClick={props.onClick}
      className={`inline-block px-5 border border-[#D1D1D1] rounded-[5.625rem] button-box-shadow cursor-pointer ${props.className}`}
    >
      <div className={`inline-block ${props.textClassName}`}>{props.text}</div>
    </div>
  );
}
