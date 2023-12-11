// 首页滚动图片
import React, { useState, useRef, useEffect } from "react";
import silder1 from '@/assets/index/slider-1.png'
import silder2 from '@/assets/index/slider-2.png'
import silder3 from '@/assets/index/slider-3.png'
import CommonCarousel from '@/components/common/CommonCarousel';
export default function Slider() {
    const data = [{
        uuid: 1,
        title:'Single-Storey',
        src:silder1,
    },{
        uuid: 2,
        title:'Single-Storey',
        src:silder2,
    },{
        uuid: 3,
        title:'Single-Storey',
        src:silder3,
    },]

    return (
        <div className='slider'>
            <div className='title title-4'>
                Start Your Journey Here
            </div>
            <div className='arrow'>
                <div className='left-arrow'></div>
                <div className='right-arrow'></div>
            </div>
            <CommonCarousel data={data}></CommonCarousel>
            {/* <div className='scroll-content' ref={scrollDom}>
                <div className='content dark-grey semi-bold' ref={scrollContent}>
                    <div className='slider-item'>
                        <p>Single-Storey</p>
                    </div>
                    <div className='slider-item'>
                        <p>Double-Storey</p>
                    </div>
                    <div className='slider-item'>
                        <p>Duplex</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
