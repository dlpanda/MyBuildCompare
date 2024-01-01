import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';

type ButtonOnImgProps = PropsWithChildren<{
    className?: string;
    imgSrc: string | StaticImageData;
}>;

export default function ButtonOnImg({
    className,
    imgSrc,
    children,
}: ButtonOnImgProps) {
    const textClassNames = clsx(`relative ${className}`);
    return (
        <div className={textClassNames}>
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
