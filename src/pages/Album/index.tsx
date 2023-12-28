import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';
import Link from 'next/link';
// 组件
import Dialog from '@/components';
import Gap from '@/components/common/Gap';
import Popup from '@/components/common/Popup';
// 图片
import BackPNG from '@/assets/icon/left-arrow.png';
import HousePNG1 from '@/assets/photos/1.png';
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Popup>
        <Dialog>
          <Link href="/IndividualHouseDesigns">
            <Image
              className="absolute left-20 top-20"
              src={BackPNG}
              alt="carouselImg"
              width={32}
              height={32}
              priority
            />
          </Link>
          <Gap size={75}></Gap>
          <Image
            className="w-full"
            src={HousePNG1}
            alt="carouselImg"
            width={686}
            height={458}
            priority
          />
          <Gap size={20}></Gap>
          <Image
            className="inline-block w-[calc(50%-0.625rem)] mr-[1.25rem]"
            src={HousePNG1}
            alt="carouselImg"
            width={333}
            height={222}
            priority
          />
          <Image
            className="inline-block w-[calc(50%-0.625rem)]"
            src={HousePNG1}
            alt="carouselImg"
            width={333}
            height={222}
            priority
          />
          <Gap size={20}></Gap>
          <Image
            className="w-full"
            src={HousePNG1}
            alt="carouselImg"
            width={686}
            height={458}
            priority
          />
          <Gap size={75}></Gap>
        </Dialog>
      </Popup>
    </Main>
  );
}
