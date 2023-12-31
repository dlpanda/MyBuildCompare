import clsx from 'clsx';
import {
    Carousel as RRCarousel,
    CarouselProps as RRCarouselProps,
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export type CarouselProps = {
    className?: string;
} & RRCarouselProps;

export default function Carousel({
    className,
    autoPlay = true,
    ...rest
}: CarouselProps) {
    const classNames = clsx(`w-full ${className}`);
    return (
        <RRCarousel
            className={classNames}
            autoPlay={autoPlay} //是否自动播放
            {...rest}
        ></RRCarousel>
    );
}
