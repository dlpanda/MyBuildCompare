import {
  Carousel as RRCarousel,
  CarouselProps as RRCarouselProps,
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export type CarouselProps = {
  className?: string;
  dynamicHeight?: boolean;
} & RRCarouselProps;

// Comp Naming
export default function Carousel(props: CarouselProps) {
  const { autoPlay = true, dynamicHeight = false, ...rest } = props;

  return (
    <RRCarousel
      className={`w-full ${props.className}`}
      showArrows={true} //是否展示左右箭头
      showStatus={false} //是否展示右上角状态
      showIndicators={true} // 是否展示指示器
      infiniteLoop={true} //时候循环
      autoPlay={autoPlay} //是否自动播放
      stopOnHover={true} //  鼠标放上去是否停止播放
      showThumbs={false} // 是否展示轮播缩放展示图
      useKeyboardArrows={false} // 是否使用键盘左右按钮滑动
      swipeable={false} // 是否刷新
      dynamicHeight={dynamicHeight} //动态高度
      emulateTouch={false} // 是否拖拽滑动
      {...rest}
    ></RRCarousel>
  );
}
