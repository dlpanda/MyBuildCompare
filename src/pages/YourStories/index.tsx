import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { DataList } from '@/utils/DataList';
import Image from 'next/image';
import Link from 'next/link';
// 组件
import HouseItem from '@/components/HouseItem';
import Blogs from '@/components/YourStories/Blogs';
import GradientButton from '@/components/common/Button/GradientButton';
import Gap from '@/components/common/Gap';
import Grid from '@/components/common/Grid';
import BodyText from '@/components/common/Text/BodyText';
import Title4 from '@/components/common/Title/Title4';
// 图片
import MainPNG from '@/assets/your-stroies/main.png';
import Blogs1 from '@/assets/your-stroies/story1.png';
import Blogs2 from '@/assets/your-stroies/story2.png';
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
  const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 4);
  const blogsData: any = [
    {
      id: '1',
      imgSrc: Blogs1,
      title: 'Gerri and Grant move into their new double storey home',
      date: 'November 6, 2023',
      author: 'Mel Davies',
    },
    {
      id: '2',
      imgSrc: Blogs2,
      title: 'Lachlan, Steph and their puppies build their first family home',
      date: 'November 6, 2023',
      author: 'Mel Davies',
    },
  ];
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div className="relative px-10">
        <Gap className="mobile:hidden" size={50}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
        <Image
          className="w-[75%] ml-[25%] tablet:w-[100%] mobile:w-[100%] tablet:ml-0 mobile:ml-0"
          src={MainPNG}
          alt="img"
          priority
        />
        <div className="absolute left-10 top-[20%] h-[60%] w-[30%] px-[5%] py-[5%] rounded-md button-box-shadow bg-white tablet:hidden mobile:hidden">
          <BodyText text="November 6, 2023"></BodyText>
          <Gap size={10}></Gap>
          <Title4 text="Daniel's brand new investment home"></Title4>
          <Gap size={40}></Gap>
          <Link className="flex" href="/IndivdualStory">
            <GradientButton className="" text={'Read More'}></GradientButton>
          </Link>
        </div>
        <div className="hidden tablet:block mobile:block">
          <Gap className="mobile:hidden" size={40}></Gap>
          <Gap className="hidden mobile:block" size={20}></Gap>
          <BodyText text="November 6, 2023"></BodyText>
          <Gap size={10}></Gap>
          <Title4 text="Daniel's brand new investment home"></Title4>
          <Gap className="mobile:hidden" size={40}></Gap>
          <Gap className="hidden mobile:block" size={20}></Gap>
          <Link className="flex" href="/IndivdualStory">
            <GradientButton className="" text={'Read More'}></GradientButton>
          </Link>
        </div>
      </div>
      <div className="px-10">
        <Gap className="tablet:hidden mobile:hidden" size={75}></Gap>
        <Gap className="hidden tablet:block mobile:block" size={40}></Gap>
        <Title4 text="Latest Stories"></Title4>
        <Gap size={40}></Gap>
        <Blogs dataList={blogsData}></Blogs>
        <Gap className="mobile:hidden" size={75}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
      </div>
      <div className="bg-[#F9FCFC]">
        <Gap className="tablet:hidden mobile:hidden" size={75}></Gap>
        <Gap className="hidden tablet:block mobile:block" size={40}></Gap>
        <Title4 className="mx-20" text="Featured Listings"></Title4>
        <Gap className="mobile:hidden" size={40}></Gap>
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
        <Gap className="tablet:hidden mobile:hidden" size={75}></Gap>
        <Gap className="hidden tablet:block mobile:block" size={40}></Gap>
      </div>
    </Main>
  );
}
