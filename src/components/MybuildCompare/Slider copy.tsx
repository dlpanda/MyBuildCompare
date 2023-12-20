// 首页滚动图片
import React, { useState, useRef, useEffect } from "react";
import silder1 from '@/assets/index/slider-1.png'
import silder2 from '@/assets/index/slider-2.png'
import silder3 from '@/assets/index/slider-3.png'
import Carousel from '@/components/MybuildCompare/Carousel';
export default function Slider() {
    const data = [{
        uuid: 1,
        title: 'Single-Storey',
        src: silder1,
    }, {
        uuid: 2,
        title: 'Single-Storey',
        src: silder2,
    }, {
        uuid: 3,
        title: 'Single-Storey',
        src: silder3,
    },]

    const [scrollFlag, setscrollFlag] = useState(true);
    const [timer, settimer] = useState(0);
    let scrollDom: any = useRef(); // ref绑定DOM
    let scrollContent: any = useRef()
    // dom生成之后
    useEffect(() => {
        // const maxSrollWidth = scrollDom.current.scrollWidth - scrollDom.current.offsetWidth
        // const setScrollEvent = () => {
        //     let isSrollToRight = true
        //     const newTimer:any = setInterval(() => {
        //         // console.log(scrollFlag)
        //         if (isSrollToRight) {
        //             scrollDom.current.scrollLeft += 1
        //             isSrollToRight = scrollDom.current.scrollLeft < maxSrollWidth
        //         } else {
        //             scrollDom.current.scrollLeft -= 1
        //             isSrollToRight = scrollDom.current.scrollLeft === 0
        //         }
        //     }, 20)
        //     settimer(newTimer)
        //     // console.log(newTimer)
        //     // settimer(prevFoo => {
        //     //     console.log('read foo state in setFoo function', prevFoo);
        //     //     return newTimer;
        //     // });
        // }
        // setScrollEvent()
        scrollDom.current.onmouseover = function () {
            setscrollFlag(false)
            // console.log('onmouseover')
            // console.log(timer)
            // clearInterval(timer)
        }
        //鼠标移出事件
        scrollDom.current.onmouseout = function () {
            setscrollFlag(true)
            // console.log('onmouseout')
            // setScrollEvent()
        }
    }, [])
    // scrollFlag改变
    useEffect(() => {
        let newTimer: any = timer
        if (scrollFlag) {
            const maxSrollWidth = scrollDom.current.scrollWidth - scrollDom.current.offsetWidth
            let isSrollToRight = true
            newTimer = setInterval(() => {
                // console.log(scrollFlag)
                if (isSrollToRight) {
                    scrollDom.current.scrollLeft += 1
                    isSrollToRight = scrollDom.current.scrollLeft < maxSrollWidth
                } else {
                    scrollDom.current.scrollLeft -= 1
                    isSrollToRight = scrollDom.current.scrollLeft === 0
                }
            }, 20)
            settimer(newTimer)
        }
        // else {
        //     clearInterval(timer)
        // }
        // 组件销毁
        return () => {
            clearInterval(newTimer)
        }
    }, [scrollFlag])
    return (
        <div className='slider mx-[5rem] mobile:mx-2'>
            <div className='title title-4'>
                Start Your Journey Here
            </div>
            <div className='arrow'>
                <div className='left-arrow' onClick={() => arrow('left')}></div>
                <div className='right-arrow' onClick={() => arrow('right')}></div>
            </div>
            {/* <Carousel data={data}></Carousel> */}
            <div className='scroll-content' ref={scrollDom}>
                <div className='content dark-grey semi-bold' ref={scrollContent}>
                    <div className='slider-item slider-item1'>
                        <p>Single-Storey</p>
                    </div>
                    <div className='slider-item slider-item2'>
                        <p>Double-Storey</p>
                    </div>
                    <div className='slider-item slider-item3'>
                        <p>Duplex</p>
                    </div>
                    <div className='slider-item slider-item1'>
                        <p>Single-Storey</p>
                    </div>
                    <div className='slider-item slider-item2'>
                        <p>Double-Storey</p>
                    </div>
                    <div className='slider-item slider-item3'>
                        <p>Duplex</p>
                    </div>
                    <div className='slider-item slider-item1'>
                        <p>Single-Storey</p>
                    </div>
                    <div className='slider-item slider-item2'>
                        <p>Double-Storey</p>
                    </div>
                    <div className='slider-item slider-item3'>
                        <p>Duplex</p>
                    </div>
                    <div className='slider-item slider-item1'>
                        <p>Single-Storey</p>
                    </div>
                    <div className='slider-item slider-item2'>
                        <p>Double-Storey</p>
                    </div>
                    <div className='slider-item slider-item3'>
                        <p>Duplex</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
