import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { BreadcrumbData, DataList } from '@/utils/DataList';
import Image from 'next/image';
import Link from 'next/link';
// 组件
import HouseItem from '@/components/HouseItem';
import {
    Breadcrumb,
    Button,
    ButtonOnImg,
    Carousel,
    CheckBox,
    Form,
    Gap,
    Grid,
    IconButton,
    Line,
    Text,
    Title,
} from '@/components/common';
// 图片
import BathPNG from '@/assets/icon/bath.png';
import BedPNG from '@/assets/icon/bed.png';
import Compare from '@/assets/icon/compare.png';
import GaragePNG from '@/assets/icon/garage.png';
import HeartLine from '@/assets/icon/heart-line.png';
import LivingPNG from '@/assets/icon/living.png';
import Share from '@/assets/icon/share.png';
import houseLogo from '@/assets/index/other-builders/ansa-homes-logo.png';
import MainImg from '@/assets/individual/main.png';
import Vertical1PNG from '@/assets/individual/vertical1.png';
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
    const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 4);
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <Line color="#EFEFEF"></Line>
            <Breadcrumb
                className="mobile:px-2"
                data={BreadcrumbData}
            ></Breadcrumb>
            <Line color="#EFEFEF"></Line>
            <div className="px-20 mobile:px-2">
                <Gap className="mobile:hidden" size={50}></Gap>
                <div className="flex justify-between">
                    <Title variant="4" className="mobile:hidden">
                        Edgewater 186 by G.J. Gardner
                    </Title>
                    <div className="flex">
                        <IconButton
                            className="border-none shadow-none pr-[0.75rem] mobile:hidden"
                            textClassName="underline body-text-grey tablet:hidden"
                            iconSrc={Share}
                            iconWidth={20}
                            iconHeight={20}
                        >
                            Share
                        </IconButton>
                        <IconButton
                            className="border-none shadow-none pr-[2rem] mobile:hidden"
                            textClassName="underline body-text-grey tablet:hidden"
                            iconSrc={HeartLine}
                            iconWidth={20}
                            iconHeight={20}
                        >
                            Save
                        </IconButton>
                        <Link className="flex" href="/CompareHouseDesigns">
                            <IconButton
                                className="border-none shadow-none green-gradient text-white tablet:hidden mobile:hidden"
                                iconSrc={Compare}
                                iconWidth={20}
                                iconHeight={20}
                                iconPoistion="right"
                            >
                                Compare
                            </IconButton>
                        </Link>
                    </div>
                </div>
                <Gap className="mobile:hidden" size={40}></Gap>
                <ButtonOnImg className="mobile:hidden" imgSrc={MainImg}>
                    <Link className="flex" href="/Album">
                        <Button
                            className="absolute bottom-7 right-7 bg-white"
                            textClassName=" body-text-grey-bold"
                        >
                            Show All Photos
                        </Button>
                    </Link>
                </ButtonOnImg>
                <Carousel className="hidden mobile:block" autoPlay={false}>
                    {houseList[0].carouselImgSrc.map(
                        (item: any, index: any) => {
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
                        }
                    )}
                </Carousel>
                <Title variant="6-light" className="hidden mobile:block">
                    Edgewater 186 by G.J. Gardner
                </Title>
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
                            <Text
                                variant="underlined-links"
                                className="inline-block"
                            >
                                Visit Builder Page
                            </Text>
                        </Link>
                        <Gap size={80}></Gap>
                        <Grid className="grid-cols-4 gap-y-[20px] px-[4.375rem] text-center mobile:grid-cols-2">
                            <IconButton
                                iconPoistion="top"
                                iconSrc={BedPNG}
                                iconWidth={33}
                                iconHeight={30}
                            >
                                4 Bed
                            </IconButton>
                            <IconButton
                                iconPoistion="top"
                                iconSrc={BathPNG}
                                iconWidth={33}
                                iconHeight={30}
                            >
                                2 Bath
                            </IconButton>
                            <IconButton
                                iconPoistion="top"
                                iconSrc={GaragePNG}
                                iconWidth={33}
                                iconHeight={30}
                            >
                                2 Garage
                            </IconButton>
                            <IconButton
                                iconPoistion="top"
                                iconSrc={LivingPNG}
                                iconWidth={33}
                                iconHeight={30}
                            >
                                1 Living
                            </IconButton>
                        </Grid>
                        {/* <div className='flex justify-between px-[4.375rem]  mobile:grid-cols-1'>
                            <IconVerticalButton iconSrc={BedPNG} iconWidth={33} iconHeight={30} text='4 Bed'></IconVerticalButton>
                            <IconVerticalButton iconSrc={BathPNG} iconWidth={33} iconHeight={30} text='2 Bath'></IconVerticalButton>
                            <IconVerticalButton iconSrc={GaragePNG} iconWidth={33} iconHeight={30} text='2 Garage'></IconVerticalButton>
                            <IconVerticalButton iconSrc={LivingPNG} iconWidth={33} iconHeight={30} text='1 Living'></IconVerticalButton>
                        </div> */}
                        <Text
                            variant="underlined-links"
                            className="text-center"
                        >
                            Show more specs
                        </Text>
                        <Gap size={40}></Gap>
                        <Text>
                            How would you like to live in a house which
                            epitomises the best of indoor and outdoor
                            entertaining, one which takes housing design to a
                            whole new level? The Edgewater, exclusive to G.J.
                            Gardner Homes, consistently delivers the
                            &apos;wow&apos; factor. Featuring a well thought out
                            living area, an open plan family room making an
                            effortless connection to the large alfresco and a
                            formal dining area with its own patio. When
                            seclusion is needed the master bedroom allows you to
                            pamper yourself with a stylish walk-in robe and an
                            elegant ensuite featuring double vanities. Edgewater
                            designs, a stunning new addition to Australia&apos;s
                            best home range.
                        </Text>
                        <Gap size={20}></Gap>
                        <Text
                            variant="underlined-links"
                            className="inline-block"
                        >
                            Download Brochure
                        </Text>
                        <Gap size={80}></Gap>
                        <Title variant="6" className="hidden mobile:block">
                            Floor Plans
                        </Title>
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
                        <Title variant="6">Inclusions</Title>
                        <Gap size={40}></Gap>
                        <Text variant="grey-bold">Must Haves</Text>
                        <Gap size={20}></Gap>
                        <Grid className="grid-cols-2 gap-y-[20px] mobile:grid-cols-1">
                            <CheckBox isChecked={true}>Alfresco</CheckBox>
                            <CheckBox isChecked={true}>Rumpus</CheckBox>
                            <CheckBox>Home Theatre</CheckBox>
                            <CheckBox>Separate Living/Dining</CheckBox>
                            <CheckBox>Study</CheckBox>
                            <CheckBox isChecked={true}>
                                Rear Master Bedroom
                            </CheckBox>
                        </Grid>
                        <Gap size={20}></Gap>
                        <Text variant="underlined-links" className="text-left">
                            Show all inclusions
                        </Text>
                        <Gap size={75}></Gap>
                    </div>
                    <div className="w-[30%] tablet:hidden mobile:hidden">
                        <Form></Form>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9FCFC]">
                <Gap size={75}></Gap>
                <Title variant="4" className="mx-20">
                    Similar House Designs
                </Title>
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
                <Button className="mx-20 green-gradient">
                    View more designs
                </Button>
                <Gap size={75}></Gap>
            </div>
        </Main>
    );
}
