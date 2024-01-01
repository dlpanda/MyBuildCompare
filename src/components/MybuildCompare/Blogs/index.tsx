import house1 from '@/assets/compare-house-designs/house1.png';
import { Text } from '@/components/common';
import Carousel from '@/components/common/Carousel';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
// 接口
import { GetArticlesQuery } from '@/services/sanity';
type BlogsProps = {
    className?: string;
    data?: GetArticlesQuery['allArticle'];
};

export default function Blogs({ className, data }: BlogsProps) {
    console.log(data);
    return (
        <div>
            <div
                className={clsx(
                    `grid grid-cols-2 gap-10 my-10 mobile:hidden ${className}`
                )}
            >
                {data.map((v) => {
                    return (
                        <div key={v._id} className="flex tablet:block">
                            <div className="flex-1">
                                <Image
                                    className="rounded-[0.75rem] w-full"
                                    src={v.image ? v.image.asset.url : house1}
                                    width={
                                        v.image
                                            ? v.image.asset.size
                                            : house1.width
                                    }
                                    height={
                                        v.image
                                            ? v.image.asset.size
                                            : house1.height
                                    }
                                    alt="icon"
                                    priority
                                />
                            </div>
                            <div className="content w-1/2 pl-4 tablet:w-full tablet:pl-0">
                                <Link className="flex" href="/IndivdualStory">
                                    <p className="title-6">{v.title}</p>
                                </Link>
                                <div className="body-text tablet:pt-2">
                                    Written By{' '}
                                    <Text
                                        variant="underlined-links"
                                        className="inline-block"
                                    >
                                        {v.person ? v.person.name : ''}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* 移动端blogs */}
            <div className={`pt-[20px] hidden mobile:block ${className}`}>
                <Carousel autoPlay={false}>
                    {[].map((v: any) => {
                        return (
                            <div key={v.id}>
                                <Image
                                    className="rounded-[0.75rem] w-full"
                                    src={v.imgSrc}
                                    alt="icon"
                                    priority
                                />
                                <p className="title-6 text-left">{v.title}</p>
                                <div className="body-text pt-2 text-left">
                                    Written By{' '}
                                    <Text
                                        variant="underlined-links"
                                        className="inline-block"
                                    >
                                        {v.author}
                                    </Text>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}
