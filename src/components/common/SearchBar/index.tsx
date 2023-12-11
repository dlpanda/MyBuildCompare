// 带图标的搜索
import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image'
import SearchGrey from '@/assets/icon/search-grey.png'
type SearchItemProps = {
    hideIcon?: Boolean,
    iconPoistion?: 'right' | 'left',
    placeholder?: string,
    iconUrl?: string,
    clickSearch: Function,
};
export default function SearchItem(props: SearchItemProps) {
    const [searchValue, setsearchValue] = useState('');
    const {
        hideIcon = false,
        iconUrl = SearchGrey, // 默认灰色查询图标
        iconPoistion = 'right',
        placeholder = 'search'
    } = props;
    return (
        <div className='search-bar'>
            {
                !hideIcon && iconPoistion === 'left' ?
                    <Image className="inline-block mr-1" onClick={() => { props.clickSearch(searchValue) }} src={iconUrl} alt="SearchGrey" width={15} height={15} priority />
                    :
                    ""
            }
            <input className='grey inline-block outline-none w-[11.75rem] bg-transparent' type="text" value={searchValue} placeholder={placeholder} onChange={e => {
                setsearchValue(e.target.value);
            }} />
            {
                !hideIcon && iconPoistion === 'right' ?
                    <Image className="inline-block ml-1" onClick={() => { props.clickSearch(searchValue) }} src={iconUrl} alt="SearchGrey" width={15} height={15} priority />
                    :
                    ""
            }
        </div>
    )
}
