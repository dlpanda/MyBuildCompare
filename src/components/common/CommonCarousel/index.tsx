
import { ReactNode } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
type CommonCarouselProps = {
    data: any;
    autoPlay?: boolean;
    // children: ReactNode;
};
export default function CommonCarousel(props: CommonCarouselProps) {
    const { data, autoPlay = true } = props
    return (
        <Carousel
            className='w-full'
            showArrows={true} //是否展示左右箭头
            showStatus={false} //是否展示右上角状态
            showIndicators={true} // 是否展示指示器
            infiniteLoop={true} //时候循环
            autoPlay={autoPlay} //是否自动播放
            stopOnHover={true} //  鼠标放上去是否停止播放
            showThumbs={false} // 是否展示轮播缩放展示图
            useKeyboardArrows={false} // 是否使用键盘左右按钮滑动
            swipeable={false} // 是否刷新
            dynamicHeight={true} //动态高度
            emulateTouch={false} // 是否拖拽滑动
        >
            {
                data.map((item: any) => {
                    // onClick={() => openUrl(item.url)}
                    return <div className='w-full' key={item.uuid}>
                        <Image src={item.src} alt="carouselImg" width={323} height={333} priority />
                    </div>
                })
            }
        </Carousel >
    )
}
