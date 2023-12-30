// 首页-右上角搜索
import SearchGrey from '@/assets/icon/search-grey.png';
import Image from 'next/image';
import { useState } from 'react';

type SearchItemProps = {
    clickSearch: (value: string) => void;
};

export default function SearchItem({ clickSearch }: SearchItemProps) {
    const [searchValue, setsearchValue] = useState('');
    return (
        <div className="search-item">
            <input
                className="grey"
                type="text"
                value={searchValue}
                placeholder="Search Category 2..."
                onChange={(e) => {
                    setsearchValue(e.target.value);
                }}
            />
            <Image
                onClick={() => {
                    clickSearch(searchValue);
                }}
                src={SearchGrey}
                alt="SearchGrey"
                width={15}
                height={15}
                priority
            />
        </div>
    );
}
