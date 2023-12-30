import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// 组件
import {
    Button,
    Gap,
    Grid,
    IconButton,
    SearchBar,
    Text,
    Title,
} from '@/components/common';
// 图片
import HouseAbove from '@/assets/house-designs/house-above.png';
import HouseNext from '@/assets/house-designs/house-next.png';
import House from '@/assets/house-designs/house.png';
import houseLogo from '@/assets/individual-builder/logo.png';
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
    const [searchValue, setSearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log('searchValue：' + value);
        setSearchValue(value);
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
            <Gap size={50}></Gap>
            <div className="flex justify-center gap-5 h-12">
                <IconButton
                    iconPoistion="top"
                    className="mobile:hidden"
                    iconSrc={House}
                    iconWidth={29}
                    iconHeight={24}
                >
                    Single-Storey
                </IconButton>
                <IconButton
                    iconPoistion="top"
                    className="mobile:hidden"
                    iconSrc={HouseNext}
                    iconWidth={27}
                    iconHeight={24}
                >
                    Double-Storey
                </IconButton>
                <IconButton
                    iconPoistion="top"
                    className="mobile:hidden"
                    iconSrc={HouseAbove}
                    iconWidth={27}
                    iconHeight={24}
                >
                    Duplex
                </IconButton>
                <SearchBar
                    className="button-box-shadow"
                    clickSearch={getSearchValue}
                    placeholder={'Search'}
                    iconPoistion="left"
                ></SearchBar>
            </div>
            <Gap className="mobile:hidden" size={50}></Gap>
            <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1">
                {new Array(11).fill('').map((v: any, i: number) => {
                    return (
                        <div
                            key={i}
                            className="button-box-shadow px-8 rounded-md bg-cover"
                        >
                            <div className="flex px-2 py-6">
                                <div className="w-[8.75rem]">
                                    <Image
                                        className="w-full rounded-md"
                                        src={houseLogo}
                                        alt="img"
                                        width={140}
                                        height={140}
                                        priority
                                    />
                                </div>
                                <div className="flex flex-1 flex-col pl-4">
                                    <Gap size={20}></Gap>
                                    <Text>License No. 276763C</Text>
                                    <Text>Since YYYY</Text>
                                    <Gap size={30}></Gap>
                                    <Link
                                        className="flex"
                                        href="/IndividualBuilder"
                                    >
                                        <Text variant="underlined-links">
                                            Visit Builder Website
                                        </Text>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Grid>
            <div className="text-center">
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
                <Title variant="6">Continue Exploring</Title>
                <Gap size={20}></Gap>
                <Button className="green-gradient">Show more</Button>
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
            </div>
            <div className="bg-cover bg-[url('../assets/index/module-bg.png')] text-center">
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
                <Title variant="2">Are You a builder?</Title>
                <Gap size={40} tabletSize={40} mobileSize={20}></Gap>
                <Button className="blue-green-gradient">
                    Join our Platform
                </Button>{' '}
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
            </div>
        </Main>
    );
}
