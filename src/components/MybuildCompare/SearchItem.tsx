// 首页-右上角搜索
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SearchGrey from '@/assets/icon/search-grey.png';
type SearchItemProps = {
  clickSearch: Function;
};
export default function SearchItem(props: SearchItemProps) {
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
          props.clickSearch(searchValue);
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
