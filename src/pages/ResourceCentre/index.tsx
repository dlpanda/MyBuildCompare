import Image from 'next/image'
import { AppConfig } from '@/utils/AppConfig';
import React, { useState, useRef, useEffect } from "react";
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
import Link from "next/link"
// 组件
import Input from '@/components/common/Input';
import IconVerticalButton from '@/components/common/Button/IconVerticalButton';
import Button from '@/components/common/Button/Button';
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
import Blogs from '@/components/MybuildCompare/Blogs';
import MobileBlogs from '@/components/MybuildCompare/MobileBlogs';
// 图片
import MainPNG from '@/assets/resource-centre/mian.png'
import itemPNG from '@/assets/resource-centre/item.png'
import onePNG from '@/assets/resource-centre/1.png'
import twoPNG from '@/assets/resource-centre/2.png'
import bottomPNG from '@/assets/resource-centre/bottom.png'
import Blogs1 from '@/assets/index/blogs-1.png'
import Blogs2 from '@/assets/index/blogs-2.png'
import Blogs3 from '@/assets/index/blogs-3.png'
import Blogs4 from '@/assets/index/blogs-4.png'
import '@/styles/common.css'
import '@/styles/color.css'

export default function HouseDesigns() {
    const blogsData: any = [{
        id: '1',
        imgSrc: Blogs1,
        title: '4 Common Floor Plan Mistakes!',
        author: 'Mel Davies'
    }, {
        id: '2',
        title: 'Do not Fall For Fke Base Prices And Avoid The Price Hike!',
        imgSrc: Blogs2,
        author: 'Mel Davies'
    }, {
        id: '3',
        title: 'When Is The Best Time To Start Building My New Home?',
        imgSrc: Blogs3,
        author: 'Kathy Schoonenberg'
    }, {
        id: '4',
        title: 'What Stamp Duty Concessions And Exemptions Are Available For New Homes In NSW?',
        imgSrc: Blogs4,
        author: 'Mel Davies'
    },]
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
            <Gap className='mobile:hidden' size={50}></Gap>
            <Gap className='hidden tablet:block mobile:block' size={40}></Gap>
            <div className='relative px-[3.75rem]'>
                <div className='inline-block w-[40%] tablet:hidden mobile:hidden'></div>
                <div className='inline-block w-[60%] tablet:w-full mobile:w-full'>
                    <Image className='w-full' src={MainPNG} alt="carouselImg" priority />
                </div>
                <div className='absolute top-[30%] w-[30%] tablet:static mobile:static tablet:w-full mobile:w-full'>
                    <BodyText text='Written by Alex Morrison'></BodyText>
                    <Gap size={10}></Gap>
                    <Title4 text="5 Tips For Anyone Constructing a New Home"></Title4>
                    <Gap size={40}></Gap>
                    <Link href="/IndividualResource">
                        <GradientButton text='Read More'></GradientButton>
                    </Link>
                </div>
            </div>
            <Gap className='tablet:hidden mobile:hidden' size={75}></Gap>
            <Gap className='hidden tablet:block mobile:block' size={40}></Gap>
            <div className='px-[3.75rem]'>
                <Title4 text="Latest Resources"></Title4>
                <Gap size={40}></Gap>
                <Blogs className='mobile:hidden' dataList={blogsData}></Blogs>
                <MobileBlogs className='hidden mobile:block' dataList={blogsData}></MobileBlogs>
            </div>
            <div className='bg-[#F9FCFC] px-[8.75rem]  mobile:px-[2rem]'>
                <Gap className='tablet:hidden mobile:hidden' size={75}></Gap>
                <Gap className='hidden tablet:block mobile:block' size={40}></Gap>
                <Title4 text='Categories'></Title4>
                <Gap className='mobile:hidden' size={20}></Gap>
                <Button className='mr-4 py-2' text="All"></Button>
                <Button className='mr-4 py-2' text="Category 1"></Button>
                <Button className='mr-4 py-2' text="Category 2"></Button>
                <Button className='mr-4 py-2' text="Category 3"></Button>
                <Gap size={40}></Gap>
                <Grid className="grid-cols-4 gap-x-[20px] gap-y-[40px] tablet:hidden mobile:hidden">
                    {new Array(16).fill("").map((v: any, i: number) => {
                        return (
                            <div key={i}>
                                <Image className="rounded-[0.75rem] w-full" src={itemPNG} alt="icon" priority />
                                <Link href='/IndivdualStory'>
                                    <Title6 text="How to make your space a beautiful place on a budget!"></Title6>
                                </Link>
                                <BodyText className='inline-block' text="Written By"></BodyText>
                                <UnderLinedLinks className='inline-block ml-2' text="Mel Davies"></UnderLinedLinks>
                            </div>
                        )
                    })}
                </Grid>
                <Grid className="hidden gap-x-[20px] gap-y-[40px] tablet:grid mobile:grid tablet:grid-cols-2 mobile:grid-cols-1">
                    {new Array(4).fill("").map((v: any, i: number) => {
                        return (
                            <div key={i}>
                                <Image className="rounded-[0.75rem] w-full" src={itemPNG} alt="icon" priority />
                                <Link href='/IndivdualStory'>
                                    <Title6 text="How to make your space a beautiful place on a budget!"></Title6>
                                </Link>
                                <BodyText className='inline-block' text="Written By"></BodyText>
                                <UnderLinedLinks className='inline-block ml-2' text="Mel Davies"></UnderLinedLinks>
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={40}></Gap>
                <GradientButton text='Show more'></GradientButton>
                <Gap className='tablet:hidden mobile:hidden' size={75}></Gap>
                <Gap className='hidden tablet:block mobile:block' size={40}></Gap>
            </div>
            <div className='relative px-[8.75rem] mobile:px-[2rem]'>
                <div className='absolute top-[30%] w-[30%] tablet:static mobile:static tablet:w-full mobile:w-full'>
                    <Title4 text="Keep up to date with the latest"></Title4>
                    <Gap size={20}></Gap>
                    <Input className="rounded-md box-border border border-[#888888] px-4 py-3 mr-2 w-[65%] text-[#0D544E]"></Input>
                    <Gap className='hidden tablet:hidden mobile:block' size={10}></Gap>
                    <GradientButton className='' text='Subscribe'></GradientButton>
                </div>
                <Gap className='hidden tablet:block' size={40}></Gap>
                <Gap className='hidden mobile:block' size={20}></Gap>
                <div className='inline-block w-[40%] tablet:hidden mobile:hidden'></div>
                <div className='inline-block w-[60%] tablet:w-full mobile:w-full'>
                    <Image className='w-full' src={bottomPNG} alt="carouselImg" priority />
                </div>
                <Gap className='tablet:hidden mobile:hidden' size={75}></Gap>
                <Gap className='hidden tablet:block mobile:block' size={40}></Gap>
            </div>
        </Main>
    )
}
