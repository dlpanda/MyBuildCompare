import Image from 'next/image'
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
// 组件
import Popup from '@/components/common/Popup';
import Dialog from '@/components/common/CommonDialog';
import Gap from '@/components/common/Gap';
import Input from '@/components/common/Input';
import Title6 from '@/components/common/Title/Title6';
import GradientButton from '@/components/common/Button/GradientButton';
// 图片
import HousePNG1 from '@/assets/photos/1.png'
import BackPNG from '@/assets/icon/left-arrow.png'
import '@/styles/common.css'
import '@/styles/color.css'

export default function HouseDesigns() {
    const inputClassName = 'text-[#0D544E] p-4 w-full outline-none border border-[#888888] rounded-md placeholder:text-[#0D544E] placeholder:opacity-50'
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
            <Popup>
                <Dialog className='!w-[45%] mt-[10rem] mobile:!w-[90%] bg-white py-20 px-20 rounded-md h-auto'>
                    <Title6 text="Get in Touch"></Title6>
                    <Gap size={30}></Gap>
                    <Input className={inputClassName} placeholder="Full Name*"></Input>
                    <Gap size={10}></Gap>
                    <Input className={inputClassName} placeholder="Phone"></Input>
                    <Gap size={10}></Gap>
                    <Input className={inputClassName} placeholder="Email Address*"></Input>
                    <Gap size={10}></Gap>
                    <Input className={inputClassName} placeholder="Postcode"></Input>
                    <Gap size={10}></Gap>
                    <Input className={inputClassName} placeholder="Message*"></Input>
                    <Gap size={40}></Gap>
                    <GradientButton text='Submit Enquiry' className="w-full text-center blue-green-gradient"></GradientButton>
                    <Gap size={50}></Gap>
                </Dialog>
            </Popup>
        </Main>
    )
}
