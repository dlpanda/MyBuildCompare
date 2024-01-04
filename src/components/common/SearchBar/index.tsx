// 带图标的搜索
import SearchGrey from '@/assets/icon/search-grey.png';
import clsx from 'clsx';
import { useState } from 'react';
import Icon from '../Icon';

// value change?
type SearchBarProps = {
    hideIcon?: Boolean;
    iconPoistion?: 'right' | 'left';
    iconUrl?: any;
    iconSize?: number;
    clickSearch: (value: string) => void;
    placeholder?: string;
    className?: string;
    inputClassName?: string;
    iconClassName?: string;
};

export default function SearchBar({
    clickSearch,
    className,
    iconClassName,
    inputClassName,
    hideIcon = false,
    iconUrl = SearchGrey,
    iconPoistion = 'right',
    placeholder = 'search',
    iconSize = 15,
}: SearchBarProps) {
    const [searchValue, setsearchValue] = useState('');
    const classNames = clsx(
        `${className} inline h-full border border-[#D1D1D1] background-white rounded-[5.625rem] py-[0.5625rem] px-5`
    );
    const inputClassNames = clsx(
        `grey inline-block outline-none w-[11.75rem] bg-transparent ${inputClassName}`
    );
    return (
        <div className={classNames}>
            <Icon
                className={clsx(`inline-block mr-[0.625rem] ${iconClassName}`, {
                    hidden: hideIcon || iconPoistion !== 'left',
                })}
                clickIcon={() => {
                    clickSearch(searchValue);
                }}
                iconSrc={iconUrl}
                iconWidth={iconSize}
                iconHeight={iconSize}
            />
            <input
                className={inputClassNames}
                type="text"
                value={searchValue}
                placeholder={placeholder}
                onChange={(e) => {
                    setsearchValue(e.target.value);
                }}
            />
            <Icon
                className={clsx(`inline-block ml-1 ${iconClassName}`, {
                    hidden: hideIcon || iconPoistion !== 'right',
                })}
                clickIcon={() => {
                    clickSearch(searchValue);
                }}
                iconSrc={iconUrl}
                iconWidth={iconSize}
                iconHeight={iconSize}
            />
        </div>
    );
}
