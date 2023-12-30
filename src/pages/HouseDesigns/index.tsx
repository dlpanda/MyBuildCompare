import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { DataList } from '@/utils/DataList';
import Link from 'next/link';
// 组件
import HouseItem from '@/components/HouseItem';
import {
    Button,
    Grid,
    IconButton,
    SearchBar,
    Title,
} from '@/components/common';
// 图片
import { useState } from 'react';
import HouseAbove from '../../assets/house-designs/house-above.png';
import HouseNext from '../../assets/house-designs/house-next.png';
import House from '../../assets/house-designs/house.png';
import CofingPNG from '../../assets/icon/cofing.png';
import '../../styles/color.css';
import '../../styles/common.css';

export default function HouseDesigns() {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log('searchValue：' + value);
        setsearchValue(value);
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
            <div className="flex justify-center gap-5 h-12">
                <IconButton
                    iconSrc={House}
                    iconWidth={29}
                    iconHeight={24}
                    iconPoistion="top"
                >
                    Single-Storey
                </IconButton>
                <IconButton
                    iconSrc={HouseNext}
                    iconWidth={27}
                    iconHeight={24}
                    iconPoistion="top"
                >
                    Double-Storey
                </IconButton>
                <IconButton
                    iconSrc={HouseAbove}
                    iconWidth={27}
                    iconHeight={24}
                    iconPoistion="top"
                >
                    Duplex
                </IconButton>
                <SearchBar
                    className="button-box-shadow mobile:hidden"
                    clickSearch={getSearchValue}
                    placeholder={'Search'}
                    iconPoistion="left"
                ></SearchBar>
                <Link className="flex" href="/Filter">
                    <IconButton
                        textClassName="mobile:hidden"
                        iconSrc={CofingPNG}
                        iconWidth={20}
                        iconHeight={20}
                    >
                        Filters
                    </IconButton>
                </Link>
            </div>
            <Grid
                cols="4"
                className="gap-x-[20px] gap-y-[40px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1"
            >
                {DataList.map((v: any, i: number) => {
                    return (
                        // destruction
                        <HouseItem
                            key={i}
                            logoSrc={v.logoSrc}
                            isCollect={v.isCollect}
                            carouselImgSrc={v.carouselImgSrc}
                            title={v.title}
                            text={v.text}
                            author={v.author}
                        ></HouseItem>
                    );
                })}
            </Grid>
            <Title
                variant="6"
                className="mt-[4.6875rem] mb-[1.25rem] mx-auto text-center"
            >
                Continuing Exploring
            </Title>
            <div className="text-center">
                <Button className="blue-green-gradient mb-[4.6875rem] mx-auto">
                    Show More
                </Button>
            </div>
        </Main>
    );
}
