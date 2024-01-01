import clsx from 'clsx';
import { ReactChild } from 'react';
import { Carousel as RRCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export type CarouselProps = {
    className?: string;
    autoPlay?: boolean;
    children: ReactChild[];
};
// & RRCarouselProps
export default function Carousel({
    className,
    autoPlay = true,
    children,
}: // ...rest
CarouselProps) {
    const classNames = clsx(`w-full ${className}`);
    return (
        <RRCarousel
            className={classNames}
            autoPlay={autoPlay} //是否自动播放
            // {...rest}
        >
            {children}
        </RRCarousel>
    );
}
