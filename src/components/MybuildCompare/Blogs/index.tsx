import Carousel from '@/components/common/Carousel';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type BlogItem = {
    id: number;
    imgSrc: StaticImageData;
    title: string;
    author: string;
};
type BlogsProps = {
    className?: string;
    dataList: BlogItem[];
};

export default function Blogs({ className, dataList }: BlogsProps) {
    return (
        <div>
            <div
                className={clsx(
                    `grid grid-cols-2 gap-10 my-10 mobile:hidden ${className}`
                )}
            >
                {dataList.map((v) => {
                    return (
                        <div key={v.id} className="flex tablet:block">
                            <div className="flex-1">
                                <Image
                                    className="rounded-[0.75rem] w-full"
                                    src={v.imgSrc}
                                    alt="icon"
                                    priority
                                />
                            </div>
                            <div className="content w-1/2 pl-4 tablet:w-full tablet:pl-0">
                                <Link className="flex" href="/IndivdualStory">
                                    <p className="title-6">{v.title}</p>
                                </Link>
                                <p className="body-text tablet:pt-2">
                                    Written By{' '}
                                    <span className="underlined-links">
                                        {v.author}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* 移动端blogs */}
            <div className={`pt-[20px] hidden mobile:block ${className}`}>
                <Carousel>
                    {dataList.map((v: any) => {
                        return (
                            <div key={v.id}>
                                <Image
                                    className="rounded-[0.75rem] w-full"
                                    src={v.imgSrc}
                                    alt="icon"
                                    priority
                                />
                                <p className="title-6 text-left">{v.title}</p>
                                <p className="body-text pt-2 text-left">
                                    Written By{' '}
                                    <span className="underlined-links">
                                        {v.author}
                                    </span>
                                </p>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}
