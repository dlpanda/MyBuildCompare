import Image from 'next/image'
import { AppConfig } from '@/utils/AppConfig';
import React, { useState, useRef, useEffect } from "react";
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
import Link from "next/link"
// 组件
import SearchBar from '@/components/common/SearchBar';
import IconVerticalButton from '@/components/common/Button/IconVerticalButton';
import IconButton from '@/components/common/Button/IconButton';
import Title2 from '@/components/common/Title/Title2';
import Title3 from '@/components/common/Title/Title3';
import Title4 from '@/components/common/Title/Title4';
import Title6 from '@/components/common/Title/Title6';
import Grid from '@/components/common/Grid';
import Form from '@/components/IndividualBuilder/Form';
import BodyText from '@/components/common/Text/BodyText';
import BodyTextLight from '@/components/common/Text/BodyTextLight';
import Gap from '@/components/common/Gap';
import GradientButton from '@/components/common/Button/GradientButton';
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks';
import HouseItem from '@/components/HouseItem';
import Blogs from '@/components/YourStories/Blogs';
// 图片
import CofingPNG from '@/assets/icon/cofing.png'
import House from '@/assets/house-designs/house.png'
import HouseNext from '@/assets/house-designs/house-next.png'
import HouseAbove from '@/assets/house-designs/house-above.png'
import MainPNG from '@/assets/your-stroies/main.png'
import Blogs1 from '@/assets/your-stroies/story1.png'
import Blogs2 from '@/assets/your-stroies/story2.png'
import houseLogo from '@/assets/individual-builder/logo.png'
import '@/styles/common.css'
import '@/styles/color.css'

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
            <Gap size={50}></Gap>
            <div className='flex justify-center gap-5 h-12'>
                <IconVerticalButton className='mobile:hidden' iconSrc={House} iconWidth={29} iconHeight={24} text='Single-Storey'></IconVerticalButton>
                <IconVerticalButton className='mobile:hidden' iconSrc={HouseNext} iconWidth={27} iconHeight={24} text='Double-Storey'></IconVerticalButton>
                <IconVerticalButton className='mobile:hidden' iconSrc={HouseAbove} iconWidth={27} iconHeight={24} text='Duplex'></IconVerticalButton>
                <SearchBar className='button-box-shadow' clickSearch={getSearchValue} placeholder={'Search'} iconPoistion='left'></SearchBar>
            </div>
            <Gap className='mobile:hidden' size={50}></Gap>
            <Grid className='grid-cols-3 gap-x-[20px] gap-y-[20px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1'>
                {
                    new Array(11).fill('').map((v: any, i: number) => {
                        return (
                            <div key={i} className="button-box-shadow px-8 rounded-md bg-cover">
                                <div className="flex px-2 py-6">
                                    <div className="w-[8.75rem]">
                                        <Image className='w-full rounded-md' src={houseLogo} alt="img" width={140} height={140} priority />
                                    </div>
                                    <div className="flex flex-1 flex-col pl-4">
                                        <Gap size={20}></Gap>
                                        <BodyText text="License No. 276763C"></BodyText>
                                        <BodyText text="Since YYYY"></BodyText>
                                        <Gap size={30}></Gap>
                                        <Link className='flex' href='/IndividualBuilder'>
                                            <UnderLinedLinks text="Visit Builder Website"></UnderLinedLinks>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Grid>
            <div className='text-center'>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title6 text="Continue Exploring"></Title6>
                <Gap size={20}></Gap>
                <GradientButton className='' text={'Show more'}></GradientButton>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
            </div>
            <div className="bg-cover bg-[url('../assets/index/module-bg.png')] text-center">
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title2 text="Are You a builder?"></Title2>
                <Gap className='mobile:hidden' size={40}></Gap>
                <Gap className='hidden mobile:block' size={20}></Gap>
                <GradientButton text='Join our Platform' className="blue-green-gradient"></GradientButton>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
            </div>
        </Main>
    )
}
