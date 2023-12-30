import { Carousel } from '@/components/common';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

type MyBuildCarouselProps = {
    data: any;
};

export default function MyBuildCarousel(props: MyBuildCarouselProps) {
    const { data } = props;
    return (
        <Carousel className="w-full">
            {data.map((item: any, i: any) => {
                // onClick={() => openUrl(item.url)}
                return (
                    <div className="w-1/3 mobile:w-full" key={i}>
                        <div>
                            <Image src={item.src} alt="Search" priority />
                        </div>
                        <p className="h-8 leading-8	px-4 rounded-md absolute  bottom-7  left-7 cursor-pointer bg-white/80 hover:bg-white">
                            {item.title}
                        </p>
                    </div>
                );
            })}
        </Carousel>
    );
}
