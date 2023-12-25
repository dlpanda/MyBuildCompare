import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
type ButtonProps = {
  className?: string;
  text: string;
  textClassName?: string;
  onClick?: any;
};
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
