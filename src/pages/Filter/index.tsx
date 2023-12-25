import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
// 组件
import Title6 from '@/components/common/Title/Title6';
import GradientButton from '@/components/common/Button/GradientButton';
import Button from '@/components/common/Button/Button';
import BodyText from '@/components/common/Text/BodyText';
import BodyTextGrey from '@/components/common/Text/BodyTextGrey';
import BodyTextGreyBold from '@/components/common/Text/BodyTextGreyBold';
import LineBottom from '@/components/common/LineBottom';
import Popup from '@/components/common/Popup';
import Dialog from '@/components/common/CommonDialog';
import Gap from '@/components/common/Gap';
import Grid from '@/components/common/Grid';
import CheckBox from '@/components/common/CheckBox';
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks';
import Input from '@/components/common/Input';
import ButtonGroup from '@/components/MybuildCompare/ButtonGroup';
// 图片
import HousePNG1 from '@/assets/photos/1.png';
import BackPNG from '@/assets/icon/left-arrow.png';
import '@/styles/common.css';
import '@/styles/color.css';

export default function HouseDesigns() {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Popup>
        <Dialog className="relative my-[40px] !h-[calc(100%-80px)] px-8 py-4 bg-white rounded-md mobile:my-0 mobile:mt-8 mobile:!h-[calc(100%-2rem)] mobile:!w-full">
          <Gap size={15}></Gap>
          <div className="absolute top-4 left-8 text-2xl">
            <Link className="flex" href="/HouseDesigns">
              x
            </Link>
          </div>
          <BodyTextGreyBold
            className="w-full text-center"
            text="Filter"
          ></BodyTextGreyBold>
          <Gap size={15}></Gap>
          <LineBottom color="#EFEFEF"></LineBottom>
          <Gap size={15}></Gap>
          <Title6 text="Rooms and Parking"></Title6>
          <Gap size={15}></Gap>
          <ButtonGroup title="Bedrooms"></ButtonGroup>
          <Gap size={20}></Gap>
          <ButtonGroup title="Bathrooms"></ButtonGroup>
          <Gap size={20}></Gap>
          <ButtonGroup title="Garage"></ButtonGroup>
          <Gap size={15}></Gap>
          <LineBottom color="#EFEFEF"></LineBottom>
          <Gap size={15}></Gap>
          <Title6 text="Land Dimension (㎡)"></Title6>
          <Gap size={15}></Gap>
          <div className="flex">
            <div className="py-2 px-3 border border-[#D1D1D1] w-[40%] rounded-xl">
              <p className="text-[#6E6E6E] text-[0.875rem]">Block Width</p>
              <Input inputValue="0"></Input>
            </div>
            <div className="w-[20%] text-center leading-[4.125]">——</div>
            <div className="py-2 px-3 border border-[#D1D1D1] w-[40%] rounded-xl">
              <p className="text-[#6E6E6E] text-[0.875rem]">Block Length</p>
              <Input inputValue="0"></Input>
            </div>
          </div>
          <Gap size={15}></Gap>
          <LineBottom color="#EFEFEF"></LineBottom>
          <Gap size={15}></Gap>
          <Title6 text="inclusions"></Title6>
          <Gap size={15}></Gap>
          <BodyTextGrey text="Must Haves"></BodyTextGrey>
          <Gap size={10}></Gap>
          <Grid className="grid-cols-2 gap-x-[20px] mobile:grid-cols-1">
            {new Array(6).fill('').map((vv: any, ii: number) => {
              return (
                <div key={ii} className={`mb-[20px]`}>
                  <CheckBox text="Alfresco" isChecked={false}></CheckBox>
                </div>
              );
            })}
          </Grid>
          <Gap size={10}></Gap>
          <UnderLinedLinks text="Show all inclusions"></UnderLinedLinks>
          <Gap size={15}></Gap>
          <LineBottom color="#EFEFEF"></LineBottom>
          <Gap size={15}></Gap>
          <Title6 text="Builders"></Title6>
          <Gap size={10}></Gap>
          <Grid className="grid-cols-2 gap-x-[20px] mobile:grid-cols-1">
            {new Array(6).fill('').map((vv: any, ii: number) => {
              return (
                <div key={ii} className={`mb-[20px]`}>
                  <CheckBox text="Alfresco" isChecked={false}></CheckBox>
                </div>
              );
            })}
          </Grid>
          <Gap size={10}></Gap>
          <UnderLinedLinks text="Show all Builders"></UnderLinedLinks>
          <Gap size={15}></Gap>
          <LineBottom color="#EFEFEF"></LineBottom>
          <div className="inline-block w-1/2">
            <Gap size={15}></Gap>
            <UnderLinedLinks
              className={`text-[#3D3D3D]`}
              text="Clear All"
            ></UnderLinedLinks>
            <Gap size={15}></Gap>
          </div>
          <div className="inline-block w-1/2 text-right">
            <Gap size={10}></Gap>
            <GradientButton className="" text="Apply filters "></GradientButton>
          </div>
        </Dialog>
      </Popup>
    </Main>
  );
}
