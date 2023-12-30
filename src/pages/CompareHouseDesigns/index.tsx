import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { DataList } from '@/utils/DataList';
import Image from 'next/image';
import Link from 'next/link';
// 组件
import {
    Carousel,
    CheckBox,
    Gap,
    Grid,
    IconButton,
    Select,
    Text,
    Title,
} from '@/components/common';

// 图片
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
    // ??
    const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 3);
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <div className="px-[15rem] mobile:px-2">
                <Gap size={50}></Gap>
                <Title variant="4" className="text-center">
                    Compare house Designs
                </Title>
                <Gap size={50}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }
                            >
                                <Select label={v.type}></Select>
                                <Gap size={40}></Gap>
                                <Carousel autoPlay={false}>
                                    {v.carouselImgSrc.map(
                                        (item: any, index: any) => {
                                            return (
                                                <div
                                                    className="w-full"
                                                    key={index}
                                                >
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
                                <Gap size={40}></Gap>
                                <Image
                                    className="button-box-shadow w-[200px] h-[70px]"
                                    src={v.logoSrc}
                                    alt="icon"
                                    priority
                                />

                                <Gap size={20}></Gap>
                                <Text variant="grey-bold">{v.title}</Text>
                                <Gap size={20}></Gap>
                                <Link href="/IndividualHouseDesigns">
                                    <Text variant="underlined-links">
                                        {v.author}
                                    </Text>
                                </Link>
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={75}></Gap>
                <Title variant="6">Quick Look</Title>
                <Gap size={40}></Gap>
                <Gap size={40}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }
                            >
                                {v.quickLook.map((quick: any, qi: number) => {
                                    return (
                                        <div key={qi}>
                                            <IconButton
                                                iconPoistion="top"
                                                className="text-center"
                                                iconSrc={quick.icon}
                                                iconWidth={33}
                                                iconHeight={30}
                                            >
                                                {quick.num + ' ' + quick.name}
                                            </IconButton>
                                            <Gap
                                                className={
                                                    (qi === 3 && 'hidden') || ''
                                                }
                                                size={40}
                                            ></Gap>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={75}></Gap>
                <Title variant="6">Floor Plans</Title>
                <Gap size={40}></Gap>
                <Gap size={40}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <Image
                                key={i}
                                className={`button-box-shadow w-full ${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                                src={v.floorImg}
                                alt="icon"
                                priority
                            />
                        );
                    })}
                </Grid>
                <Gap size={75}></Gap>
                <Title variant="6">Inclusions</Title>
                <Gap size={40}></Gap>
                <Gap size={40}></Gap>
                <Text variant="grey-bold">Must Haves</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {new Array(20)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Alfresco
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">External Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                            >
                                {new Array(16)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px]`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Termite Treated Timber
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Internal Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                            >
                                {new Array(5)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Flooring
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Kitchen Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                            >
                                {new Array(5)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Overhead Cupboards
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Kitchen Appliances</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                            >
                                {new Array(5)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Oven
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Bathroom/En-suite Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                            >
                                {new Array(6)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Floor to ceiling tiles
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Electrical/Gas Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                            >
                                {new Array(12)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Ducted Air-conditioning
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Miscellaneous</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                            >
                                {new Array(2)
                                    .fill('')
                                    .map((vv: any, ii: number) => {
                                        return (
                                            <div
                                                key={ii}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox isChecked={true}>
                                                    Interim Occupation
                                                    Certificate
                                                </CheckBox>
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </Grid>
            </div>
        </Main>
    );
}
