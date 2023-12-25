// 移动端blogs
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import CommonCarousel from '@/components/common/CommonCarousel';
type MobileBlogsProps = {
  className: string;
  dataList: any;
};
export default function Slider(props: MobileBlogsProps) {
  return (
    <div className={`pt-[20px] ${props.className}`}>
      <CommonCarousel>
        {props.dataList.map((v: any) => {
          return (
            <div key={v.id}>
              <Image
                className="rounded-[0.75rem] w-full"
                src={v.imgSrc}
                alt="icon"
                priority
              />
              <p className="title-6 text-left">{v.title}</p>
              <p className="body-text pt-2 text-left">
                Written By <span className="underlined-links">{v.author}</span>
              </p>
            </div>
          );
        })}
      </CommonCarousel>
    </div>
  );
}
