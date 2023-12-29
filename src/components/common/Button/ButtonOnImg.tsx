import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';

type ButtonOnImgProps = PropsWithChildren<{
  className?: string;
  imgSrc: string | StaticImageData;
}>;

// TODO iamge size
export default function ButtonOnImg({
  className,
  imgSrc,
  children,
}: ButtonOnImgProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        className="w-full"
        src={imgSrc}
        alt="img"
        width={1352}
        height={560}
        priority
      />
      {children}
    </div>
  );
}
