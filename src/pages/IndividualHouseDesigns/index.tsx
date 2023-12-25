import Image from 'next/image';
import Link from 'next/link';
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
import Title6Light from '@/components/common/Title/Title6Light';
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
import CommonCarousel from '@/components/common/CommonCarousel';
// 图片
import Share from '@/assets/icon/share.png';
import HeartLine from '@/assets/icon/heart-line.png';
import Compare from '@/assets/icon/compare.png';
import houseLogo from '@/assets/index/other-builders/ansa-homes-logo.png';
import BathPNG from '@/assets/icon/bath.png';
import BedPNG from '@/assets/icon/bed.png';
import GaragePNG from '@/assets/icon/garage.png';
import LivingPNG from '@/assets/icon/living.png';
import MainImg from '@/assets/individual/main.png';
import Vertical1PNG from '@/assets/individual/vertical1.png';
import '@/styles/common.css';
import '@/styles/color.css';
import { useState } from 'react';

export default function HouseDesigns() {
  const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 4);
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <LineBottom color="#EFEFEF"></LineBottom>
      <Breadcrumb className=" mobile:px-2" data={BreadcrumbData}></Breadcrumb>
      <LineBottom color="#EFEFEF"></LineBottom>
      <div className="px-20 mobile:px-2">
        <Gap className="mobile:hidden" size={50}></Gap>
        <div className="flex justify-between">
          <Title4
            className="mobile:hidden"
            text="Edgewater 186 by G.J. Gardner"
          ></Title4>
          <div className="flex">
            <IconButton
              className="border-none shadow-none pr-[0.75rem] mobile:hidden"
              textClassName="underline body-text-grey tablet:hidden"
              iconSrc={Share}
              iconWidth={20}
              iconHeight={20}
              text="Share"
            ></IconButton>
            <IconButton
              className="border-none shadow-none pr-[2rem] mobile:hidden"
              textClassName="underline body-text-grey tablet:hidden"
              iconSrc={HeartLine}
              iconWidth={20}
              iconHeight={20}
              text="Save"
            ></IconButton>
            <Link className="flex" href="/CompareHouseDesigns">
              <IconButton
                className="border-none shadow-none green-gradient text-white tablet:hidden mobile:hidden"
                iconSrc={Compare}
                iconWidth={20}
                iconHeight={20}
                text="Compare"
                iconPoistion="right"
              ></IconButton>
            </Link>
          </div>
        </div>
        <Gap className="mobile:hidden" size={40}></Gap>
        <ButtonOnImg className="mobile:hidden" imgSrc={MainImg}>
          <Link className="flex" href="/Album">
            <Button
              className="absolute bottom-7 right-7 bg-white body-text-grey-bold py-2"
              text="Show All Photos"
            ></Button>
          </Link>
        </ButtonOnImg>
        <CommonCarousel className="hidden mobile:block" autoPlay={false}>
          {houseList[0].carouselImgSrc.map((item: any, index: any) => {
            return (
              <div className="w-full" key={index}>
                <Image
                  src={item.src}
                  alt="carouselImg"
                  width={323}
                  height={333}
                  priority
                />
              </div>
            );
          })}
        </CommonCarousel>
        <Title6Light
          className="hidden mobile:block"
          text="Edgewater 186 by G.J. Gardner"
        ></Title6Light>
        <IconButton
          className="border-none shadow-none hidden float-right mobile:block"
          iconSrc={HeartLine}
          iconWidth={20}
          iconHeight={20}
          iconPoistion="right"
        ></IconButton>
        <Gap size={40}></Gap>
        <div className="flex">
          <div className="w-[70%] tablet:w-full mobile:w-full">
            <Image
              className="inline-block ml-[30px] mobile:hidden"
              src={houseLogo}
              alt="img"
              width={200}
              height={70}
              priority
            />
            <Link href="/IndividualBuilder">
              <UnderLinedLinks
                className="inline-block"
                text="Visit Builder Page"
              ></UnderLinedLinks>
            </Link>
            <Gap size={80}></Gap>
            <Grid className="grid-cols-4 gap-y-[20px] px-[4.375rem] text-center mobile:grid-cols-2">
              <IconVerticalButton
                iconSrc={BedPNG}
                iconWidth={33}
                iconHeight={30}
                text="4 Bed"
              ></IconVerticalButton>
              <IconVerticalButton
                iconSrc={BathPNG}
                iconWidth={33}
                iconHeight={30}
                text="2 Bath"
              ></IconVerticalButton>
              <IconVerticalButton
                iconSrc={GaragePNG}
                iconWidth={33}
                iconHeight={30}
                text="2 Garage"
              ></IconVerticalButton>
              <IconVerticalButton
                iconSrc={LivingPNG}
                iconWidth={33}
                iconHeight={30}
                text="1 Living"
              ></IconVerticalButton>
            </Grid>
            {/* <div className='flex justify-between px-[4.375rem]  mobile:grid-cols-1'>
                            <IconVerticalButton iconSrc={BedPNG} iconWidth={33} iconHeight={30} text='4 Bed'></IconVerticalButton>
                            <IconVerticalButton iconSrc={BathPNG} iconWidth={33} iconHeight={30} text='2 Bath'></IconVerticalButton>
                            <IconVerticalButton iconSrc={GaragePNG} iconWidth={33} iconHeight={30} text='2 Garage'></IconVerticalButton>
                            <IconVerticalButton iconSrc={LivingPNG} iconWidth={33} iconHeight={30} text='1 Living'></IconVerticalButton>
                        </div> */}
            <UnderLinedLinks
              className="text-center"
              text="Show more specs"
            ></UnderLinedLinks>
            <Gap size={40}></Gap>
            <BodyText text="How would you like to live in a house which epitomises the best of indoor and outdoor entertaining, one which takes housing design to a whole new level? The Edgewater, exclusive to G.J. Gardner Homes, consistently delivers the ‘wow’ factor. Featuring a well thought out living area, an open plan family room making an effortless connection to the large alfresco and a formal dining area with its own patio. When seclusion is needed the master bedroom allows you to pamper yourself with a stylish walk-in robe and an elegant ensuite featuring double vanities. Edgewater designs, a stunning new addition to Australia’s best home range."></BodyText>
            <Gap size={20}></Gap>
            <UnderLinedLinks
              className="inline-block"
              text="Download Brochure"
            ></UnderLinedLinks>
            <Gap size={80}></Gap>
            <Title6 text="Floor Plans"></Title6>
            <Gap size={40}></Gap>
            <Image
              className="w-[33%]"
              src={Vertical1PNG}
              alt="img"
              width={1352}
              height={560}
              priority
            />
            <Gap size={80}></Gap>
            <Title6 text="Inclusions"></Title6>
            <Gap size={40}></Gap>
            <BodyTextGreyBold text="Must Haves"></BodyTextGreyBold>
            <Gap size={20}></Gap>
            <Grid className="grid-cols-2 gap-y-[20px] mobile:grid-cols-1">
              <CheckBox text="Alfresco" isChecked={true}></CheckBox>
              <CheckBox text="Rumpus" isChecked={true}></CheckBox>
              <CheckBox text="Home Theatre"></CheckBox>
              <CheckBox text="Separate Living/Dining"></CheckBox>
              <CheckBox text="Study"></CheckBox>
              <CheckBox text="Rear Master Bedroom" isChecked={true}></CheckBox>
            </Grid>
            <Gap size={20}></Gap>
            <UnderLinedLinks
              className="text-left"
              text="Show all inclusions"
            ></UnderLinedLinks>
            <Gap size={75}></Gap>
          </div>
          <div className="w-[30%] tablet:hidden mobile:hidden">
            <Form></Form>
          </div>
        </div>
      </div>
      <div className="bg-[#F9FCFC]">
        <Gap size={75}></Gap>
        <Title4 className="mx-20" text="Similar House Designs"></Title4>
        <Gap size={40}></Gap>
        <Grid className="grid-cols-4 gap-x-[20px] gap-y-[40px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1">
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
                  author={v.author}
                ></HouseItem>
              );
            } else {
              return '';
            }
          })}
        </Grid>
        <Gap size={40}></Gap>
        <GradientButton
          className="mx-20"
          text="View more designs"
        ></GradientButton>
        <Gap size={75}></Gap>
      </div>
    </Main>
  );
}
