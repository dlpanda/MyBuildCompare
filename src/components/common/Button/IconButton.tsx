import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import Icon from '../Icon';

type IconButtonProps = PropsWithChildren<{
    className?: string;
    iconSrc: string | StaticImageData;
    iconWidth: number;
    iconHeight: number;
    iconPosition?: 'right' | 'left' | 'top';
    textClassName?: string;
    onClick?: () => void;
}>;

export default function ButtonIcon({
    className,
    textClassName,
    children,
    iconHeight,
    iconWidth,
    iconSrc,
    iconPosition = 'left',
    onClick,
}: IconButtonProps) {
    const classNames = clsx(
        ` gap-4 items-center px-5 rounded-[5.625rem]  cursor-pointer ${className}`,
        {
            flex: iconPosition !== 'top',
            border: iconPosition !== 'top',
            'button-box-shadow': iconPosition !== 'top',
            'border-[#D1D1D1]': iconPosition !== 'top',
        }
    );
    const textClassNames = clsx(`${textClassName}`, {
        block: iconPosition === 'top',
    });
    return (
        <div className={classNames} onClick={onClick}>
            <Icon
                className={clsx({
                    hidden: iconPosition !== 'left' && iconPosition !== 'top',
                    'mx-auto': iconPosition === 'top',
                })}
                iconSrc={iconSrc}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
            />
            <div className={textClassNames}>{children}</div>
            <Icon
                className={clsx({ hidden: iconPosition !== 'right' })}
                iconSrc={iconSrc}
                iconWidth={iconWidth}
                iconHeight={iconHeight}
            />
        </div>
    );
}
