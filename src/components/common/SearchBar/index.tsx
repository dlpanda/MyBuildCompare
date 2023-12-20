// 带图标的搜索
import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import SearchGrey from '@/assets/icon/search-grey.png'
type SearchItemProps = {
    hideIcon?: Boolean,
    iconPoistion?: 'right' | 'left',
    iconUrl?: any,
    iconSize?: number,
    clickSearch: Function,
    placeholder?: string,
    className?:string,
    inputClassName?: string
    iconClassName?: string
};
export default function SearchItem(props: SearchItemProps) {
    const [searchValue, setsearchValue] = useState('');
    const {
        hideIcon = false,
        iconUrl = SearchGrey, // 默认灰色查询图标
        iconPoistion = 'right',
        placeholder = 'search',
        iconSize = 15
    } = props;
    return (
        <div className={`${props.className} inline h-full border border-[#D1D1D1] background-white rounded-[5.625rem] py-[0.5625rem] px-5`}>
            {
                !hideIcon && iconPoistion === 'left' ?
                    <Image className={`inline-block mr-[0.625rem] ${props.iconClassName}`} onClick={() => { props.clickSearch(searchValue) }} src={iconUrl} alt="SearchGrey" width={iconSize} height={iconSize} priority />
                    :
                    ""
            }
            <input className={`grey inline-block outline-none w-[11.75rem] bg-transparent ${props.inputClassName}`} type="text" value={searchValue} placeholder={placeholder} onChange={e => {
                setsearchValue(e.target.value);
            }} />
            {
                !hideIcon && iconPoistion === 'right' ?
                    <Image  className={`inline-block ml-1 ${props.iconClassName}`} onClick={() => { props.clickSearch(searchValue) }} src={iconUrl} alt="SearchGrey" width={iconSize} height={iconSize} priority />
                    :
                    ""
            }
        </div>
    )
}
