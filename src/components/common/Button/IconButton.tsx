import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import Icon from '../Icon';

type IconButtonProps = PropsWithChildren<{
    className?: string;
    iconSrc: string | StaticImageData;
    iconWidth: number;
    iconHeight: number;
    iconPoistion?: 'right' | 'left' | 'top';
    textClassName?: string;
}>;

export default function ButtonIcon({
    className,
    textClassName,
    children,
    iconHeight,
    iconWidth,
    iconSrc,
    iconPoistion = 'left',
}: IconButtonProps) {
    const classNames = clsx(
        ` gap-4 items-center px-5 rounded-[5.625rem]  cursor-pointer ${className}`,
        {
            flex: iconPoistion !== 'top',
            border: iconPoistion !== 'top',
            'button-box-shadow': iconPoistion !== 'top',
            'border-[#D1D1D1]': iconPoistion !== 'top',
        }
    );
    const textClassNames = clsx(`${textClassName}`, {
        block: iconPoistion === 'top',
    });
    return (
        <div className={classNames}>
            <Icon
                className={clsx({
                    hidden: iconPoistion !== 'left' && iconPoistion !== 'top',
                    'mx-auto': iconPoistion === 'top',
                })}
                iconSrc={iconSrc}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
            />
            <div className={textClassNames}>{children}</div>
            <Icon
                className={clsx({ hidden: iconPoistion !== 'right' })}
                iconSrc={iconSrc}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
            />
        </div>
    );
}
