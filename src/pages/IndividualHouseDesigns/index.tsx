import Image from 'next/image'
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { BreadcrumbData } from '@/utils/DataList';
// 组件
import Breadcrumb from '@/components/common/Breadcrumb';
import LineBottom from '@/components/common/LineBottom';
import Title4 from '@/components/common/Title/Title4';
import ButtonOnImg from '@/components/common/ButtonOnImg';
import IconButton from '@/components/common/Button/IconButton';
import Button from '@/components/common/Button/Button';
import IconVerticalButton from '@/components/common/Button/IconVerticalButton';
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks';
import BodyText from '@/components/common/Text/BodyText';
import Title6 from '@/components/common/Title/Title6';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
// 图片
import Share from '@/assets/icon/share.png'
import HeartLine from '@/assets/icon/heart-line.png'
import Compare from '@/assets/icon/compare.png'
import MainImg from '@/assets/individual/main.png'
import houseLogo from '@/assets/index/other-builders/ansa-homes-logo.png'
import BathPNG from '@/assets/icon/bath.png'
import BedPNG from '@/assets/icon/bed.png'
import GaragePNG from '@/assets/icon/garage.png'
import LivingPNG from '@/assets/icon/living.png'
import '@/styles/common.css'
import '@/styles/color.css'
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
            <LineBottom color="#EFEFEF"></LineBottom>
            <Breadcrumb data={BreadcrumbData}></Breadcrumb>
            <LineBottom color="#EFEFEF"></LineBottom>
            <div className='px-20'>
                <div className='mt-[3.125rem] flex justify-between'>
                    <Title4 text='Edgewater 186 by G.J. Gardner'></Title4>
                    <div className='flex'>
                        <IconButton className='border-none shadow-none pr-[0.75rem]' textClassName="underline body-text-grey" iconSrc={Share} iconWidth={20} iconHeight={20} text='Share'></IconButton>
                        <IconButton className='border-none shadow-none pr-[2rem]' textClassName="underline body-text-grey" iconSrc={HeartLine} iconWidth={20} iconHeight={20} text='Save'></IconButton>
                        <IconButton className='border-none shadow-none green-gradient text-white' iconSrc={Compare} iconWidth={20} iconHeight={20} text='Compare' iconPoistion='right'></IconButton>
                    </div>
                </div>
                <ButtonOnImg className='mt-[2.5rem]' imgSrc={MainImg}>
                    <Button className='absolute bottom-7 right-7 bg-white body-text-grey-bold py-2' text='Show All Photos'></Button>
                </ButtonOnImg>
                <div className='flex mt-[40px]'>
                    <div className='w-[70%]'>
                        <Image className='inline-block ml-[30px]' src={houseLogo} alt="img" width={200} height={70} priority />
                        <UnderLinedLinks className='inline-block' text="Visit Builder Page"></UnderLinedLinks>
                        <div className='flex justify-between px-[4.375rem] mt-[5rem]'>
                            <IconVerticalButton iconSrc={BedPNG} iconWidth={33} iconHeight={30} text='4 Bed'></IconVerticalButton>
                            <IconVerticalButton iconSrc={BathPNG} iconWidth={33} iconHeight={30} text='2 Bath'></IconVerticalButton>
                            <IconVerticalButton iconSrc={GaragePNG} iconWidth={33} iconHeight={30} text='2 Garage'></IconVerticalButton>
                            <IconVerticalButton iconSrc={LivingPNG} iconWidth={33} iconHeight={30} text='1 Living'></IconVerticalButton>
                        </div>
                        <UnderLinedLinks className='text-center' text="Show more specs"></UnderLinedLinks>
                        <BodyText text="How would you like to live in a house which epitomises the best of indoor and outdoor entertaining, one which takes housing design to a whole new level? The Edgewater, exclusive to G.J. Gardner Homes, consistently delivers the ‘wow’ factor. Featuring a well thought out living area, an open plan family room making an effortless connection to the large alfresco and a formal dining area with its own patio. When seclusion is needed the master bedroom allows you to pamper yourself with a stylish walk-in robe and an elegant ensuite featuring double vanities. Edgewater designs, a stunning new addition to Australia’s best home range."></BodyText>
                    </div>
                    <div className='w-[30%]'>
                        <Image className='w-full' src={MainImg} alt="img" width={1352} height={560} priority />
                    </div>
                </div>
            </div>

        </Main>
    )
}
