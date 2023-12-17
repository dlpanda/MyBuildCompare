import Image from 'next/image'
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { BreadcrumbData } from '@/utils/DataList';
import { DataList } from '@/utils/DataList';
// 组件
import Breadcrumb from '@/components/common/Breadcrumb';
import LineBottom from '@/components/common/LineBottom';
import Title4 from '@/components/common/Title/Title4';
import Title6 from '@/components/common/Title/Title6';
import BodyTextGreyBold from '@/components/common/Text/BodyTextGreyBold';
import Grid from '@/components/common/Grid';
import Form from '@/components/common/Form';
import ButtonOnImg from '@/components/common/Button/ButtonOnImg';
import IconButton from '@/components/common/Button/IconButton';
import Button from '@/components/common/Button/Button';
import IconVerticalButton from '@/components/common/Button/IconVerticalButton';
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks';
import BodyText from '@/components/common/Text/BodyText';
import Gap from '@/components/common/Gap';
import CheckBox from '@/components/common/CheckBox';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
// 图片
import Share from '@/assets/icon/share.png'
import HeartLine from '@/assets/icon/heart-line.png'
import Compare from '@/assets/icon/compare.png'
import houseLogo from '@/assets/index/other-builders/ansa-homes-logo.png'
import BathPNG from '@/assets/icon/bath.png'
import BedPNG from '@/assets/icon/bed.png'
import GaragePNG from '@/assets/icon/garage.png'
import LivingPNG from '@/assets/icon/living.png'
import MainImg from '@/assets/individual/main.png'
import Vertical1PNG from '@/assets/individual/vertical1.png'
import '@/styles/common.css'
import '@/styles/color.css'
import { useState } from 'react'

export default function HouseDesigns() {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log("searchValue：" + value)
        setsearchValue(value)
    }
    const houseList = DataList.splice(0,4)
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
                <Gap size={50}></Gap>
                <div className='flex justify-between'>
                    <Title4 text='Edgewater 186 by G.J. Gardner'></Title4>
                    <div className='flex'>
                        <IconButton className='border-none shadow-none pr-[0.75rem]' textClassName="underline body-text-grey" iconSrc={Share} iconWidth={20} iconHeight={20} text='Share'></IconButton>
                        <IconButton className='border-none shadow-none pr-[2rem]' textClassName="underline body-text-grey" iconSrc={HeartLine} iconWidth={20} iconHeight={20} text='Save'></IconButton>
                        <IconButton className='border-none shadow-none green-gradient text-white' iconSrc={Compare} iconWidth={20} iconHeight={20} text='Compare' iconPoistion='right'></IconButton>
                    </div>
                </div>
                <Gap size={40}></Gap>
                <ButtonOnImg className='mt-[2.5rem]' imgSrc={MainImg}>
                    <Button className='absolute bottom-7 right-7 bg-white body-text-grey-bold py-2' text='Show All Photos'></Button>
                </ButtonOnImg>
                <Gap size={40}></Gap>
                <div className='flex'>
                    <div className='w-[70%]'>
                        <Image className='inline-block ml-[30px]' src={houseLogo} alt="img" width={200} height={70} priority />
                        <UnderLinedLinks className='inline-block' text="Visit Builder Page"></UnderLinedLinks>
                        <Gap size={80}></Gap>
                        <div className='flex justify-between px-[4.375rem]'>
                            <IconVerticalButton iconSrc={BedPNG} iconWidth={33} iconHeight={30} text='4 Bed'></IconVerticalButton>
                            <IconVerticalButton iconSrc={BathPNG} iconWidth={33} iconHeight={30} text='2 Bath'></IconVerticalButton>
                            <IconVerticalButton iconSrc={GaragePNG} iconWidth={33} iconHeight={30} text='2 Garage'></IconVerticalButton>
                            <IconVerticalButton iconSrc={LivingPNG} iconWidth={33} iconHeight={30} text='1 Living'></IconVerticalButton>
                        </div>
                        <UnderLinedLinks className='text-center' text="Show more specs"></UnderLinedLinks>
                        <Gap size={40}></Gap>
                        <BodyText text="How would you like to live in a house which epitomises the best of indoor and outdoor entertaining, one which takes housing design to a whole new level? The Edgewater, exclusive to G.J. Gardner Homes, consistently delivers the ‘wow’ factor. Featuring a well thought out living area, an open plan family room making an effortless connection to the large alfresco and a formal dining area with its own patio. When seclusion is needed the master bedroom allows you to pamper yourself with a stylish walk-in robe and an elegant ensuite featuring double vanities. Edgewater designs, a stunning new addition to Australia’s best home range."></BodyText>
                        <Gap size={20}></Gap>
                        <UnderLinedLinks className='inline-block' text="Download Brochure"></UnderLinedLinks>
                        <Gap size={80}></Gap>
                        <Title6 text='Floor Plans'></Title6>
                        <Gap size={40}></Gap>
                        <Image className='w-[33%]' src={Vertical1PNG} alt="img" width={1352} height={560} priority />
                        <Gap size={80}></Gap>
                        <Title6 text='Inclusions'></Title6>
                        <Gap size={40}></Gap>
                        <BodyTextGreyBold text='Must Haves'></BodyTextGreyBold>
                        <Gap size={20}></Gap>
                        <Grid className="grid-cols-2 gap-y-[20px]">
                            <CheckBox text='Alfresco' isChecked={true}></CheckBox>
                            <CheckBox text='Rumpus' isChecked={true}></CheckBox>
                            <CheckBox text='Home Theatre'></CheckBox>
                            <CheckBox text='Separate Living/Dining'></CheckBox>
                            <CheckBox text='Study'></CheckBox>
                            <CheckBox text='Rear Master Bedroom' isChecked={true}></CheckBox>
                        </Grid>
                        <Gap size={20}></Gap>
                        <UnderLinedLinks className='text-left' text="Show all inclusions"></UnderLinedLinks>
                        <Gap size={75}></Gap>
                    </div>
                    <div className='w-[30%]'>
                        <Form></Form>
                    </div>
                </div>
            </div>
            <div className='bg-[#F9FCFC]'>
                <Gap size={75}></Gap>
                <Title4 className='mx-20' text='Similar House Designs'></Title4>
                <Gap size={40}></Gap>
                <Grid className="grid-cols-4 gap-x-[20px] gap-y-[40px] pt-[3.125rem] px-20">
                    {houseList.map((v: any, i: number) => {
                        if (i < 4) {
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
                        }
                        else {
                            return ''
                        }
                    })}
                </Grid>
                <Gap size={40}></Gap>
                <GradientButton className='mx-20' text='View more designs'></GradientButton>
                <Gap size={75}></Gap>
            </div>

        </Main>
    )
}
