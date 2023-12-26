import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import Link from 'next/link';
import { useState } from 'react';
// 组件
import ButtonGroup from '@/components/MybuildCompare/ButtonGroup';
import SeachItem from '@/components/MybuildCompare/SeachItem';
import IconButton from '@/components/common/Button/IconButton';
import Dialog from '@/components/common/CommonDialog';
import Gap from '@/components/common/Gap';
import LineBottom from '@/components/common/LineBottom';
import Popup from '@/components/common/Popup';
import SearchBar from '@/components/common/SearchBar';
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks';
import Title6 from '@/components/common/Title/Title6';
// 图片
import HouseAbove from '@/assets/house-designs/house-above.png';
import HouseNext from '@/assets/house-designs/house-next.png';
import House from '@/assets/house-designs/house.png';
import SearchBlack from '@/assets/icon/search-black.png';
import Search from '@/assets/icon/search.png';
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
  const [currentDesign, setcurrentDesign] = useState('');
  const changeDesign = (type: string) => {
    if (type === currentDesign) {
      setcurrentDesign('');
    } else {
      setcurrentDesign(type);
    }
  };

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Popup>
        <Dialog className="relative my-[40px] !h-[calc(100%-80px)] px-8 py-4 bg-white rounded-md mobile:my-0 mobile:mt-8 mobile:!h-[calc(100%-2rem)] mobile:!w-full">
          <Gap size={20}></Gap>
          <div className="absolute top-4 left-8 text-2xl">
            <Link className="flex" href="/">
              x
            </Link>
          </div>
          <Gap size={20}></Gap>
          <LineBottom color="#EFEFEF"></LineBottom>
          <Gap size={20}></Gap>
          <Title6 text="House Design"></Title6>
          <Gap size={20}></Gap>
          <div className="flex">
            <SeachItem
              icon={House}
              iconWidth={28}
              iconHeight={24}
              text="Single-Storey"
              isAcitve={currentDesign === 'Single-Storey'}
              onClick={() => changeDesign('Single-Storey')}
            ></SeachItem>
            <Gap direction="verical" size={20}></Gap>
            <SeachItem
              icon={HouseAbove}
              iconWidth={28}
              iconHeight={24}
              text="Double-Storey"
              isAcitve={currentDesign === 'Double-Storey'}
              onClick={() => changeDesign('Double-Storey')}
            ></SeachItem>
            <Gap direction="verical" size={20}></Gap>
            <SeachItem
              icon={HouseNext}
              iconWidth={41}
              iconHeight={24}
              text="Duplex"
              isAcitve={currentDesign === 'Duplex'}
              onClick={() => changeDesign('Duplex')}
            ></SeachItem>
          </div>
          <Gap size={20}></Gap>
          <Gap size={20}></Gap>
          <Title6 text="Rooms and Parking"></Title6>
          <Gap size={20}></Gap>
          <ButtonGroup title="Bedrooms"></ButtonGroup>
          <Gap size={20}></Gap>
          <ButtonGroup title="Bathrooms"></ButtonGroup>
          <Gap size={20}></Gap>
          <ButtonGroup title="Garage"></ButtonGroup>
          <Gap size={20}></Gap>
          <Gap size={20}></Gap>
          <Title6 text="Search Location"></Title6>
          <Gap size={20}></Gap>
          <div className="h-[3.75rem]">
            <SearchBar
              className="w-full h-full !inline-block leading-[3rem] rounded-xl font-semibold"
              iconUrl={SearchBlack}
              iconPoistion="left"
              placeholder="Search Locations"
              iconSize={20}
              inputClassName="!w-[calc(100%-20px-0.625rem)] !text-[#3D3D3D]"
              clickSearch={() => {}}
            ></SearchBar>
          </div>
          <Gap size={20}></Gap>
          <LineBottom color="#EFEFEF"></LineBottom>
          <div className="flex">
            <div className="flex-1">
              <Gap size={10}></Gap>
              <UnderLinedLinks
                className={`h-[3rem] leading-[3rem] text-[#3D3D3D]`}
                text="Clear All"
              ></UnderLinedLinks>
            </div>
            <div className="w-[7.3125rem]">
              <Gap size={10}></Gap>
              <IconButton
                className="inline-block text-center blue-green-gradient h-[3rem] text-white !gap-2"
                iconSrc={Search}
                iconWidth={12}
                iconHeight={12}
                iconPoistion="left"
                text="filters "
              ></IconButton>
            </div>
          </div>
          <Gap size={10}></Gap>
        </Dialog>
      </Popup>
    </Main>
  );
}
