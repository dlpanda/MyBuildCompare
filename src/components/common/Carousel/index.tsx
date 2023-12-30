import clsx from 'clsx';
import { Carousel as RRCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { ReactChild } from 'react';
export type CarouselProps = {
    children: ReactChild[];
    className?: string;
    showArrows?: boolean;
    showStatus?: boolean;
    showIndicators?: boolean;
    infiniteLoop?: boolean;
    autoPlay?: boolean;
    stopOnHover?: boolean;
    showThumbs?: boolean;
    useKeyboardArrows?: boolean;
    swipeable?: boolean;
    dynamicHeight?: boolean;
    emulateTouch?: boolean;
};
// & RRCarouselProps;

export default function Carousel({
    children,
    className,
    showArrows = true,
    showStatus = false,
    showIndicators = true,
    infiniteLoop = true,
    autoPlay = true,
    stopOnHover = true,
    showThumbs = false,
    useKeyboardArrows = false,
    swipeable = false,
    dynamicHeight = false,
    emulateTouch = false,
}: // ...rest
CarouselProps) {
    const classNames = clsx(`w-full ${className}`);
    return (
        <RRCarousel
            className={classNames}
            showArrows={showArrows} //是否展示左右箭头
            showStatus={showStatus} //是否展示右上角状态
            showIndicators={showIndicators} // 是否展示指示器
            infiniteLoop={infiniteLoop} //时候循环
            autoPlay={autoPlay} //是否自动播放
            stopOnHover={stopOnHover} //  鼠标放上去是否停止播放
            showThumbs={showThumbs} // 是否展示轮播缩放展示图
            useKeyboardArrows={useKeyboardArrows} // 是否使用键盘左右按钮滑动
            swipeable={swipeable} // 是否刷新
            dynamicHeight={dynamicHeight} //动态高度
            emulateTouch={emulateTouch} // 是否拖拽滑动
            // {...rest}
        >
            {children}
        </RRCarousel>
    );
}
