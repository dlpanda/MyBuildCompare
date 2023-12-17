import Image from 'next/image'
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
// 组件
import SearchBar from '@/components/common/SearchBar';
import IconVerticalButton from '@/components/common/Button/IconVerticalButton';
import IconButton from '@/components/common/Button/IconButton';
import Grid from '@/components/common/Grid';
import Title6 from '@/components/common/Title/Title6';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
// 图片
import CofingPNG from '../../assets/icon/cofing.png'
import House from '../../assets/house-designs/house.png'
import HouseNext from '../../assets/house-designs/house-next.png'
import HouseAbove from '../../assets/house-designs/house-above.png'
import '../../styles/common.css'
import '../../styles/color.css'
import { useState } from 'react'

export default function HouseDesigns() {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log("searchValue：" + value)
        setsearchValue(value)
    }
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
            <div className='flex justify-center gap-5 h-12'>
                <IconVerticalButton iconSrc={House} iconWidth={29} iconHeight={24} text='Single-Storey'></IconVerticalButton>
                <IconVerticalButton iconSrc={HouseNext} iconWidth={27} iconHeight={24} text='Double-Storey'></IconVerticalButton>
                <IconVerticalButton iconSrc={HouseAbove} iconWidth={27} iconHeight={24} text='Duplex'></IconVerticalButton>
                <SearchBar className='button-box-shadow mobile:hidden' clickSearch={getSearchValue} placeholder={'Search'} iconPoistion='left'></SearchBar>
                <IconButton textClassName="mobile:hidden" iconSrc={CofingPNG} iconWidth={20} iconHeight={20} text='Filters'></IconButton>
            </div>
            <Grid className="grid-cols-4 gap-x-[20px] gap-y-[40px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1">
                {DataList.map((v: any,i:number) => {
                    return (
                        <HouseItem
                            key={i}
                            logoSrc={v.logoSrc}
                            isCollect={v.isCollect}
                            carouselImgSrc={v.carouselImgSrc}
                            title={v.title}
                            text={v.text}
                            author={v.author}></HouseItem>
                    )
                })}
            </Grid>
            <Title6 className='mt-[4.6875rem] mb-[1.25rem] mx-auto text-center' text={'Continuing Exploring'}></Title6> 
            <div className='text-center'>
                <GradientButton className='blue-green-gradient mb-[4.6875rem] mx-auto' text={'Show More'}></GradientButton> 
            </div>
        </Main>
    )
}
