import { AppConfig } from '@/utils/AppConfig';
import { BuilderCompare } from '@/utils/BuilderCompare';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// 组件
import Blogs from '@/components/MybuildCompare/Blogs';
import ButtonGroup from '@/components/MybuildCompare/ButtonGroup';
import Colunm from '@/components/MybuildCompare/Colunm';
import SeachItem from '@/components/MybuildCompare/SeachItem';
import Slider from '@/components/MybuildCompare/Slider';
import { Button, Gap, Grid, Line, SearchBar, Title } from '@/components/common';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
// import Button from '@/components/common/Button/Button';
// import Gap from '@/components/common/Gap';
// import Grid from '@/components/common/Grid';
// import Line from '@/components/common/Line';
// import SearchBar from '@/components/common/SearchBar';
// import Title from '@/components/common/Title/Title';
// 图片
import HouseAbove from '@/assets/house-designs/house-above.png';
import HouseNext from '@/assets/house-designs/house-next.png';
import House from '@/assets/house-designs/house.png';
import CofingPNG from '@/assets/icon/cofing.png';
import SearchBlack from '@/assets/icon/search-black.png';
import Search from '@/assets/icon/search.png';
import '@/styles/color.css';
import '@/styles/common.css';
import '@/styles/global.css';
import '@/styles/index.css';
import ContactGreen from '../assets/icon/contact-green.png';
import HammerGreen from '../assets/icon/hammer-green.png';
import SearchGreen from '../assets/icon/search-green.png';
import Blogs1 from '../assets/index/blogs-1.png';
import Blogs2 from '../assets/index/blogs-2.png';
import Blogs3 from '../assets/index/blogs-3.png';
import Blogs4 from '../assets/index/blogs-4.png';
import ModuleBg from '../assets/index/module-bg.png';

export default function Home() {
    const columData: any = [
        {
            id: '01',
            iconSrc: SearchGreen,
            text: 'Find The Ideal Home',
        },
        {
            id: '02',
            iconSrc: ContactGreen,
            text: 'Compare Builders',
        },
        {
            id: '03',
            iconSrc: HammerGreen,
            text: 'Build Your Dream Home',
        },
    ];
    const blogsData: any = [
        {
            id: '1',
            imgSrc: Blogs1,
            title: '4 Common Floor Plan Mistakes!',
            author: 'Mel Davies',
        },
        {
            id: '2',
            title: 'Do not Fall For Fke Base Prices And Avoid The Price Hike!',
            imgSrc: Blogs2,
            author: 'Mel Davies',
        },
        {
            id: '3',
            title: 'When Is The Best Time To Start Building My New Home?',
            imgSrc: Blogs3,
            author: 'Kathy Schoonenberg',
        },
        {
            id: '4',
            title: 'What Stamp Duty Concessions And Exemptions Are Available For New Homes In NSW?',
            imgSrc: Blogs4,
            author: 'Mel Davies',
        },
    ];
    const [currentType, setcurrentType] = useState('');
    const changeType = (type: string) => {
        if (type === currentType) {
            setcurrentType('');
        } else {
            setcurrentType(type);
        }
    };
    const [currentDesign, setcurrentDesign] = useState('');
    const changeDesign = (type: string) => {
        if (type === currentDesign) {
            setcurrentDesign('');
        } else {
            setcurrentDesign(type);
        }
    };
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <div className="banner select-none bg-cover bg-[url('../assets/index/banner.png')] mobile:bg-[url('../assets/index/banner-small-screen.png')]">
                <Gap size={226}></Gap>
                <div className="title">
                    Search. Compare.
                    <br className="hidden mobile:block" /> Build.
                </div>
                <Gap size={20}></Gap>
                {/* desktop & tablet */}
                <div
                    className={`search mobile:!hidden ${
                        currentType ? '!bg-[#F2F2F2]' : ''
                    } `}
                >
                    <div
                        className={`
                            option 
                            bold 
                            ${
                                currentType === 'design'
                                    ? 'bg-white active-shadow !font-semibold !text-[#3D3D3D]'
                                    : ''
                            }
                            ${
                                currentType
                                    ? '!font-normal text-[#888888]'
                                    : 'font-semibold !text-[#3D3D3D]'
                            }
                        `}
                        onClick={() => changeType('design')}
                    >
                        House Design
                    </div>
                    <Line
                        direction="verical"
                        width="1px"
                        height="3.125rem"
                        color="#D9D9D9"
                        className={`${
                            currentType === 'design' ||
                            currentType === 'Filters'
                                ? '!hidden'
                                : ''
                        }`}
                    ></Line>
                    <div
                        className={`
                        option 
                        bold 
                        ${
                            currentType === 'Filters'
                                ? 'bg-white active-shadow !font-semibold !text-[#3D3D3D]'
                                : ''
                        }
                        ${
                            currentType
                                ? '!font-normal text-[#888888]'
                                : 'font-semibold !text-[#3D3D3D]'
                        }
                        `}
                        onClick={() => changeType('Filters')}
                    >
                        Filters
                    </div>
                    <Line
                        direction="verical"
                        width="1px"
                        height="3.125rem"
                        color="#D9D9D9"
                        className={`${
                            currentType === 'Location' ||
                            currentType === 'Filters'
                                ? '!hidden'
                                : ''
                        }`}
                    ></Line>
                    <div
                        className={`
                            option 
                            ${
                                currentType === 'Location'
                                    ? '!bg-white active-shadow !font-semibold !text-[#3D3D3D]'
                                    : ''
                            }
                            ${
                                currentType
                                    ? '!pr-[10rem] bg-[#F2F2F2] !font-normal'
                                    : 'bg-white font-semibold'
                            }
                        `}
                        onClick={() => changeType('Location')}
                    >
                        Search Location
                    </div>
                    <div
                        className={`
                            round-icon-button 
                            text-center
                            blue-green-gradient
                            rounded-[1.5625rem]
                            mt-[-2px]
                            ${currentType === 'Location' ? 'bg-white' : ''}
                            ${
                                currentType
                                    ? 'w-[7.5rem] pl-[1.25rem] right-[-4rem] !text-left'
                                    : ''
                            }
                        `}
                    >
                        <Image
                            className={`
                                inline-block
                                ${currentType ? 'mr-[0.625rem]' : ''}
                            `}
                            src={Search}
                            alt="Search"
                            width={16}
                            height={16}
                            priority
                        />
                        <span
                            className={`
                            text-white
                            ${currentType ? 'inline-block' : 'hidden'}
                        `}
                        >
                            Search
                        </span>
                    </div>
                </div>
                <Gap size={10}></Gap>
                <div
                    className={`${
                        currentType === 'design' ? 'flex' : 'hidden'
                    } button-box-shadow w-[37.5rem] h-[12.5rem] p-[2.5rem] bg-[#fff] mx-auto rounded-xl text-left relative`}
                >
                    <SeachItem
                        icon={House}
                        iconWidth={28}
                        iconHeight={24}
                        text="Single-Storey"
                        isAcitve={currentDesign === 'Single-Storey'}
                        onClick={() => changeDesign('Single-Storey')}
                    ></SeachItem>
                    <Gap direction="verical" size={20}></Gap>
                    <SeachItem
                        icon={HouseAbove}
                        iconWidth={28}
                        iconHeight={24}
                        text="Double-Storey"
                        isAcitve={currentDesign === 'Double-Storey'}
                        onClick={() => changeDesign('Double-Storey')}
                    ></SeachItem>
                    <Gap direction="verical" size={20}></Gap>
                    <SeachItem
                        icon={HouseNext}
                        iconWidth={41}
                        iconHeight={24}
                        text="Duplex"
                        isAcitve={currentDesign === 'Duplex'}
                        onClick={() => changeDesign('Duplex')}
                    ></SeachItem>
                </div>
                <div
                    className={`${
                        currentType === 'Filters' ? 'block' : 'hidden'
                    } button-box-shadow w-[31.0625rem] h-[21rem] p-[2.5rem] bg-[#fff] mx-auto rounded-xl text-left relative`}
                >
                    <ButtonGroup title="Bedrooms"></ButtonGroup>
                    <Gap size={20}></Gap>
                    <ButtonGroup title="Bathrooms"></ButtonGroup>
                    <Gap size={20}></Gap>
                    <ButtonGroup title="Garage"></ButtonGroup>
                </div>
                <div
                    className={`${
                        currentType === 'Location' ? 'block' : 'hidden'
                    } button-box-shadow w-[36.8125rem] h-[8.75rem] p-[2.5rem] bg-[#fff] mx-auto rounded-xl text-left relative`}
                >
                    <SearchBar
                        className="w-full h-full !inline-block leading-[2.5rem] rounded-xl font-semibold"
                        iconUrl={SearchBlack}
                        iconPoistion="left"
                        placeholder="Search Locations"
                        iconSize={20}
                        inputClassName="!w-[calc(100%-20px-0.625rem)] !text-[#3D3D3D]"
                        clickSearch={() => {}}
                    ></SearchBar>
                </div>
                {/* mobile search */}
                <div className="hidden w-[90%] h-[48px] mx-auto mobile:flex">
                    <SearchBar
                        className="flex-1 h-full !inline-block leading-[36px] rounded-full font-semibold button-box-shadow border-[0.5px] border-[#D1D1D1] bg-white"
                        iconUrl={SearchBlack}
                        iconPoistion="left"
                        placeholder="Search Locations"
                        iconSize={20}
                        iconClassName="mt-[-6px]"
                        inputClassName="!w-[calc(100%-20px-0.625rem)] !text-[#3D3D3D] text-[16px]"
                        clickSearch={() => {}}
                    ></SearchBar>
                    <div className="rounded-full ml-2 inline-block w-[48px] h-full leading-[48px] p-[14px] button-box-shadow border-[0.5px] border-[#D1D1D1] bg-white">
                        <Link href="/IndexFilter">
                            <Image
                                className=""
                                src={CofingPNG}
                                alt="img"
                                width={20}
                                height={20}
                                priority
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <Gap size={75} mobileSize={40}></Gap>
            <Slider></Slider>
            <div
                className="mt-[4.6875rem] py-[4.6875rem] text-center bg-cover"
                style={{ backgroundImage: `url(${ModuleBg.src})` }}
            >
                <Title variant="4">How It Works</Title>
                <Colunm dataList={columData}></Colunm>
                <Button className="mt-10 green-gradient">
                    Connect With Right Builder
                </Button>
            </div>
            <div className="my-20 mx-[4.6875rem] mobile:mx-2">
                <Title variant="4">Blogs And Articles</Title>
                <Blogs dataList={blogsData}></Blogs>
                <Button className="green-gradient">View More Articles</Button>
            </div>
            <div
                className="pt-[4.7rem] pb-[3.75rem] bg-cover text-center"
                style={{ backgroundImage: `url(${ModuleBg.src})` }}
            >
                <Title variant="4" className="mobile:text-left px-4">
                    Some Of The Many Builders We Compare
                </Title>
                <Grid className="grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 max-w-[67.25rem] mt-[1.875rem] mx-auto gap-3 px-4">
                    {BuilderCompare.map((v: any) => {
                        return (
                            <div className="bg-white rounded-xl" key={v.id}>
                                <Image
                                    className="mx-auto"
                                    src={v.src}
                                    alt={v.id}
                                    priority
                                />
                            </div>
                        );
                    })}
                </Grid>
            </div>
        </Main>
    );
}
