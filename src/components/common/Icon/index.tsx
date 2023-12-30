import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';

type IconProps = PropsWithChildren<{
    className?: string;
    iconSrc: string | StaticImageData;
    iconWidth: number;
    iconHeight: number;
    clickIcon?: () => void;
}>;

export default function Icon({
    className,
    iconHeight,
    iconWidth,
    iconSrc,
    clickIcon = () => {},
}: IconProps) {
    const classNames = clsx(`${className}`);
    return (
        <Image
            className={classNames}
            style={{
                height: iconHeight + 'px',
                width: iconWidth + 'px',
            }}
            onClick={() => {
                clickIcon();
            }}
            src={iconSrc}
            alt="icon"
            width={iconWidth}
            height={iconHeight}
            priority
        />
    );
}
