import house1 from '@/assets/compare-house-designs/house1.png';
import heartGreyPNG from '@/assets/icon/heart-grey.png';
import heartRedPNG from '@/assets/icon/heart-red.png';
import { Text } from '@/components/common';
// import { Image as MyImage } from '@/services/sanity';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Carousel } from '../common';

type HouseItemProps = {
    id?: string;
    className?: string;
    logoSrc: StaticImageData | string;
    isCollect: boolean;
    carouselItem: {
        asset: { url: string };
    }[];
    // carouselItem: MyImage[];
    title: string;
    text: string;
    author: string;
    handleHeartClick?: (id: string, isSelected: boolean) => void;
};

export default function HouseItem({
    id,
    className,
    logoSrc,
    isCollect,
    carouselItem,
    title,
    text,
    author,
    handleHeartClick,
}: HouseItemProps) {
    const [isSelected, setIsSelected] = useState(false);
    const classNames = clsx(`relative p-1 ${className}`);
    // {
    //     border: isSelected,
    // }
    const heartOnCilick = useCallback(() => {
        setIsSelected((prev) => {
            handleHeartClick(id, !prev);
            return !prev;
        });
    }, []);
    return (
        <div className={classNames}>
            <Image
                className="h-[3.125rem] w-auto"
                src={logoSrc}
                alt="icon"
                width={100}
                height={50}
                priority
            />
            <div
                onClick={heartOnCilick}
                className="bg-white z-10 absolute top-[0.625rem] right-[0.625rem] w-[50px] h-[50px] py-[15px] px-[13px] rounded-full border border-[#EFEFEF]"
            >
                <Image
                    src={isSelected ? heartRedPNG : heartGreyPNG}
                    alt="icon"
                    width={24}
                    height={20}
                    priority
                />
            </div>
            <Carousel autoPlay={false}>
                {carouselItem.map((item, index) => {
                    return (
                        <div className="w-full" key={index}>
                            <Image
                                src={item.asset ? item.asset.url : house1}
                                alt="carouselImg"
                                className="h-[20.8125rem] w-auto"
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
