import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { DataList } from '@/utils/DataList';
import Image from 'next/image';
import Link from 'next/link';
// 组件
import HouseItem from '@/components/HouseItem';
import Blogs from '@/components/YourStories/Blogs';
import { Button, Gap, Grid, Text, Title } from '@/components/common';
// 图片
import MainPNG from '@/assets/your-stroies/main.png';
import Blogs1 from '@/assets/your-stroies/story1.png';
import Blogs2 from '@/assets/your-stroies/story2.png';
import '@/styles/color.css';
import '@/styles/common.css';

export default function YourStories() {
    const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 4);
    const blogsData: any = [
        {
            id: '1',
            imgSrc: Blogs1,
            title: 'Gerri and Grant move into their new double storey home',
            date: 'November 6, 2023',
            author: 'Mel Davies',
        },
        {
            id: '2',
            imgSrc: Blogs2,
            title: 'Lachlan, Steph and their puppies build their first family home',
            date: 'November 6, 2023',
            author: 'Mel Davies',
        },
    ];
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <div className="relative px-10">
                <Gap size={50} tabletSize={50} mobileSize={40}></Gap>
                <Image
                    className="w-[75%] ml-[25%] tablet:w-[100%] mobile:w-[100%] tablet:ml-0 mobile:ml-0"
                    src={MainPNG}
                    alt="img"
                    priority
                />
                <div className="absolute left-10 top-[20%] h-[60%] w-[30%] px-[5%] py-[5%] rounded-md button-box-shadow bg-white tablet:hidden mobile:hidden">
                    <Text>November 6, 2023</Text>
                    <Gap size={10}></Gap>
                    <Title variant="4">
                        Daniel&apos;s brand new investment home
                    </Title>
                    <Gap size={40}></Gap>
                    <Link className="flex" href="/IndivdualStory">
                        <Button className="green-gradient">Read More</Button>
                    </Link>
                </div>
                <div className="hidden tablet:block mobile:block">
                    <Gap size={40} tabletSize={40} mobileSize={20}></Gap>
                    <Text>November 6, 2023</Text>
                    <Gap size={10}></Gap>
                    <Title variant="4">
                        Daniel&apos;s brand new investment home
                    </Title>
                    <Gap size={40} tabletSize={40} mobileSize={20}></Gap>
                    <Link className="flex" href="/IndivdualStory">
                        <Button className="green-gradient">Read More</Button>
                    </Link>
                </div>
            </div>
            <div className="px-10">
                <Gap size={75} tabletSize={40} mobileSize={40}></Gap>
                <Title variant="4">Latest Stories</Title>
                <Gap size={40}></Gap>
                <Blogs dataList={blogsData}></Blogs>
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
            </div>
            <div className="bg-[#F9FCFC]">
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
                <Title variant="4" className="mx-20">
                    Featured Listings
                </Title>
                <Gap className="mobile:hidden" size={40}></Gap>
                <Grid className="grid-cols-4 gap-x-[20px] gap-y-[40px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1">
                    {houseList.map((v: any, i: number) => {
                        if (i < 4) {
                            return (
                                <HouseItem
                                    key={i}
                                    logoSrc={v.logoSrc}
                                    isCollect={v.isCollect}
                                    carouselItem={v.carouselItem}
                                    title={v.title}
                                    text={v.text}
                                    author={v.author}
                                ></HouseItem>
                            );
                        } else {
                            return '';
                        }
                    })}
                </Grid>
                <Gap size={40}></Gap>
                <Button className="green-gradient mx-20">
                    View more designs
                </Button>
                <Gap size={75} tabletSize={40} mobileSize={40}></Gap>
            </div>
        </Main>
    );
}
