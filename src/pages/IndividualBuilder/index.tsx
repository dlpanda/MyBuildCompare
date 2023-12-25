import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
// 组件
import Title6 from '@/components/common/Title/Title6';
import Grid from '@/components/common/Grid';
import Form from '@/components/IndividualBuilder/Form';
import BodyTextLight from '@/components/common/Text/BodyTextLight';
import Gap from '@/components/common/Gap';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
import Popup from '@/components/common/Popup';
// 图片
import AwardsPNG from '@/assets/individual-builder/awards.png';
import '@/styles/common.css';
import '@/styles/color.css';

export default function HouseDesigns() {
  const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 2);
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Gap size={75}></Gap>
      <div className="flex px-20 flex-wrap mobile:px-2">
        <div className="w-[30%] tablet:w-[65%] mobile:w-full">
          <Form></Form>
        </div>
        <div className="w-[70%] px-40 tablet:w-full tablet:px-0 mobile:w-full mobile:px-2">
          <Gap className="hidden tablet:block mobile:block" size={75}></Gap>
          <Title6 text="About Builder"></Title6>
          <Gap size={30}></Gap>
          <BodyTextLight
            text={`GJ Gardner Homes is rated as Australia's No.1 and Most Trusted National Home Building brand as a result of their level of customer satisfaction. Their commitment to acting with integrity, transparency and reliability in everything they do ensures that you will only receive the best service from Australia's most reputable building network.`}
          ></BodyTextLight>
          <Gap size={60}></Gap>
          <Title6 text="Awards"></Title6>
          <Gap size={30}></Gap>
          <Image src={AwardsPNG} alt="img" width={492} height={140} priority />
          <Gap size={60}></Gap>
          <Title6 text="House Designs"></Title6>
          <Gap size={30}></Gap>
          <Grid className="grid-cols-2 gap-x-[20px] mobile:grid-cols-1">
            {houseList.map((v: any, i: number) => {
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
            })}
          </Grid>
          <Gap size={30}></Gap>
          <GradientButton text={'View more designs'}></GradientButton>
          <Gap size={75}></Gap>
        </div>
      </div>
      {/* <Popup></Popup> */}
    </Main>
  );
}
