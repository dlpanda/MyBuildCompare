import heart from '@/assets/icon/heart.png';
import { Carousel, Text } from '@/components/common';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import {} from '../common';

type HouseItemProps = {
    logoSrc: StaticImageData;
    isCollect: string;
    carouselImgSrc: StaticImageData[];
    title: string;
    text: string;
    author: string;
};

export default function HouseItem({
    logoSrc,
    isCollect,
    carouselImgSrc,
    title,
    text,
    author,
}: HouseItemProps) {
    return (
        <div className="relative">
            <Image
                className=""
                src={logoSrc}
                alt="icon"
                width={100}
                height={50}
                priority
            />
            <div className="bg-white z-10 absolute top-[0.625rem] right-[0.625rem] w-[50px] h-[50px] py-[15px] px-[13px] rounded-full border border-[#EFEFEF]">
                <Image src={heart} alt="icon" width={24} height={20} priority />
            </div>
            <Carousel autoPlay={false}>
                {carouselImgSrc.map((item, index) => {
                    return (
                        <div className="w-full" key={index}>
                            <Image
                                src={item.src}
                                alt="carouselImg"
                                width={323}
                                height={333}
                                priority
                            />
                        </div>
                    );
                })}
            </Carousel>
            <Text variant="grey-bold" className="mt-[20px]">
                {title}
            </Text>
            <Text variant="light">{text}</Text>
            <Link href="/IndividualHouseDesigns">
                <Text variant="underlined-links" className="mt-[10px]">
                    {author}
                </Text>
            </Link>
        </div>
    );
}
