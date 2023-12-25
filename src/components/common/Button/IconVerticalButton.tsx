import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
type IconButtonVerticalProps = {
  className?: string;
  text: string;
  iconSrc: string | StaticImageData;
  iconWidth: number;
  iconHeight: number;
};
export default function ButtonIconVertical(props: IconButtonVerticalProps) {
  return (
    <div className={`${props.className}`}>
      <Image
        className="mx-auto"
        style={{
          height: props.iconHeight + 'px',
          width: props.iconWidth + 'px',
        }}
        src={props.iconSrc}
        alt="icon"
        width={props.iconWidth}
        height={props.iconHeight}
        priority
      />
      <div className="block">{props.text}</div>
    </div>
  );
}
