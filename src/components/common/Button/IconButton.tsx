import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';

type IconButtonVerticalProps = PropsWithChildren<{
  className?: string;
  iconSrc: string | StaticImageData;
  iconWidth: number;
  iconHeight: number;
  iconPoistion?: string;
  textClassName?: string;
  direction?: string;
}>;

export default function ButtonIconVertical(props: IconButtonVerticalProps) {
  const { iconPoistion = 'left' } = props;

  return (
    <div
      className={`flex gap-4 items-center px-5 border border-[#D1D1D1] rounded-[5.625rem] button-box-shadow cursor-pointer ${props.className}`}
    >
      {iconPoistion === 'left' ? (
        <Image
          className=""
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
      ) : (
        ''
      )}
      <div className={`${props.textClassName}`}>{props.children}</div>
      {iconPoistion === 'right' ? (
        <Image
          className=""
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
      ) : (
        ''
      )}
    </div>
  );
}
