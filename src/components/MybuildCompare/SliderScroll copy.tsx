// 首页滚动图片
import React, { useState, useRef, useEffect } from "react";
export default function Slider() {
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
        let newTimer:any = timer
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
        <div className='slider'>
            <div className='title title-4'>
                Start Your Journey Here
            </div>
            <div className='arrow'>
                <div className='left-arrow'></div>
                <div className='right-arrow'></div>
            </div>
            <div className='scroll-content' ref={scrollDom}>
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
            </div>
        </div>
    )
}
