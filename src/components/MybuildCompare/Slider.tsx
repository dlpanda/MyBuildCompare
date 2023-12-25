// 首页滚动图片
import React, { useState, useRef, useEffect } from 'react';
import silder1 from '@/assets/index/slider-1.png';
import silder2 from '@/assets/index/slider-2.png';
import silder3 from '@/assets/index/slider-3.png';
import Carousel from '@/components/MybuildCompare/Carousel';
export default function Slider() {
  const data = [
    {
      uuid: 1,
      title: 'Single-Storey',
      src: silder1,
    },
    {
      uuid: 2,
      title: 'Single-Storey',
      src: silder2,
    },
    {
      uuid: 3,
      title: 'Single-Storey',
      src: silder3,
    },
  ];
  const [scrollFlag, setscrollFlag] = useState(true);
  const [timer, settimer] = useState(0);
  let scrollDom: any = useRef(); // ref绑定DOM
  const [onceWidth, setonceWidth] = useState(0);
  // dom生成之后
  useEffect(() => {
    setonceWidth(document.querySelector('.slider-item')?.clientWidth || 552);
    //鼠标进入
    scrollDom.current.onmouseover = function () {
      setscrollFlag(false);
    };
    //鼠标移出
    scrollDom.current.onmouseout = function () {
      setscrollFlag(true);
    };
  }, []);
  const [isSrollToRight, setisSrollToRight] = useState(true);
  // scrollFlag改变
  useEffect(() => {
    let newTimer: any = timer;
    if (scrollFlag) {
      const maxSrollWidth =
        scrollDom.current.scrollWidth - scrollDom.current.offsetWidth;
      newTimer = setInterval(() => {
        if (isSrollToRight) {
          scrollDom.current.scrollLeft += 1;
          setisSrollToRight(scrollDom.current.scrollLeft < maxSrollWidth);
        } else {
          scrollDom.current.scrollLeft -= 1;
          setisSrollToRight(scrollDom.current.scrollLeft === 0);
        }
      }, 20);
      settimer(newTimer);
    }
    // 组件销毁
    return () => {
      clearInterval(newTimer);
    };
  }, [scrollFlag]);
  // 正在执行动画
  const [isSrolling, setisSrolling] = useState(false);
  const arrow = (type: string) => {
    if (isSrolling) return;
    setisSrolling(true);
    setscrollFlag(false);
    let flag = 0;
    const currentTimer = setInterval(() => {
      if (flag < onceWidth) {
        flag++;
        if (type === 'left') {
          scrollDom.current.scrollLeft -= 1;
        } else {
          scrollDom.current.scrollLeft += 1;
        }
      } else {
        clearInterval(currentTimer);
        setscrollFlag(true);
        setisSrolling(false);
      }
      const maxSrollWidth =
        scrollDom.current.scrollWidth - scrollDom.current.offsetWidth;
      if (
        scrollDom.current.scrollLeft >= maxSrollWidth ||
        scrollDom.current.scrollLeft <= 0
      ) {
        clearInterval(currentTimer);
        setscrollFlag(true);
        setisSrolling(false);
      }
    }, 1);
  };
  return (
    <div className="slider mx-[5rem] mobile:mx-2">
      <div className="title title-4">Start Your Journey Here</div>
      <div className="arrow">
        <div className="left-arrow" onClick={() => arrow('left')}></div>
        <div className="right-arrow" onClick={() => arrow('right')}></div>
      </div>
      {/* <Carousel data={data}></Carousel> */}
      <div className="scroll-content" ref={scrollDom}>
        <div className="content dark-grey semi-bold">
          <div className="slider-item slider-item1">
            <p>Single-Storey</p>
          </div>
          <div className="slider-item slider-item2">
            <p>Double-Storey</p>
          </div>
          <div className="slider-item slider-item3">
            <p>Duplex</p>
          </div>
          <div className="slider-item slider-item1">
            <p>Single-Storey</p>
          </div>
          <div className="slider-item slider-item2">
            <p>Double-Storey</p>
          </div>
          <div className="slider-item slider-item3">
            <p>Duplex</p>
          </div>
          <div className="slider-item slider-item1">
            <p>Single-Storey</p>
          </div>
          <div className="slider-item slider-item2">
            <p>Double-Storey</p>
          </div>
          <div className="slider-item slider-item3">
            <p>Duplex</p>
          </div>
          <div className="slider-item slider-item1">
            <p>Single-Storey</p>
          </div>
          <div className="slider-item slider-item2">
            <p>Double-Storey</p>
          </div>
          <div className="slider-item slider-item3">
            <p>Duplex</p>
          </div>
        </div>
      </div>
    </div>
  );
}
