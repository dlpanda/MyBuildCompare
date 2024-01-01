import house1 from '@/assets/compare-house-designs/house1.png';
import heart from '@/assets/icon/heart.png';
import { Text } from '@/components/common';
// import { Image as MyImage } from '@/services/sanity';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Carousel } from '../common';

type HouseItemProps = {
    logoSrc: StaticImageData | string;
    isCollect: boolean;
    carouselItem: {
        __typename?: 'Image';
        asset: { __typename?: 'SanityImageAsset'; url: string };
    }[];
    // carouselItem: MyImage[];
    title: string;
    text: string;
    author: string;
};

export default function HouseItem({
    logoSrc,
    isCollect,
    carouselItem,
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
                {carouselItem.map((item, index) => {
                    return (
                        <div className="w-full" key={index}>
                            <Image
                                src={item.asset ? item.asset.url : house1}
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
