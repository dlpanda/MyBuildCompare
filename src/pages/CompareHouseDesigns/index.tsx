import house1 from '@/assets/compare-house-designs/house1.png';
import Meta from '@/layouts/Meta';
import sanity from '@/services/sanity';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { DataList } from '@/utils/DataList';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
// 组件
import BathPNG from '@/assets/icon/bath.png';
import BedPNG from '@/assets/icon/bed.png';
import GaragePNG from '@/assets/icon/garage.png';
import LivingPNG from '@/assets/icon/living.png';
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
// 接口

export default function HouseDesigns() {
    const QuickLockConfig = [
        {
            key: 'bedrooms',
            title: 'Bed',
            icon: BedPNG,
        },
        {
            key: 'storey',
            title: 'Bath',
            icon: BathPNG,
        },
        {
            key: 'garage',
            title: 'Garage',
            icon: GaragePNG,
        },
        {
            key: 'livingRooms',
            title: 'squares',
            icon: LivingPNG,
        },
    ];
    const router = useRouter();
    const { selectedIds } = router.query;
    const [dataList, setDataList] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [compSelectData, setCompSelectData] = useState([]);
    const getDataList = useCallback(async () => {
        console.log(selectedIds);
        if (!selectedIds || !selectedIds.length) return; // 开发有时获取不到
        const dataList = await Promise.all(
            (selectedIds as string[]).map((id) => sanity.getHouseDesign({ id }))
        );
        setDataList(dataList);
        setSelectedData(dataList.slice(0, 3)); // 前三个展示在页面
        console.log(dataList.slice(3));
        setCompSelectData(dataList.slice(3)); // 其余的放到筛选组件
    }, [selectedIds]);
    useEffect(() => {
        getDataList();
    }, [getDataList]);
    const onSelectChange = useCallback((item: any) => {}, []);
    // 假数据
    const xxxData = JSON.parse(JSON.stringify(DataList)).splice(0, 3);
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
                    {selectedData.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }
                            >
                                <Select
                                    label={v.title}
                                    items={compSelectData}
                                    onSelectChange={onSelectChange}
                                ></Select>
                                <Gap size={40}></Gap>
                                <Carousel autoPlay={false}>
                                    {v.photos.map((item: any, index: any) => {
                                        return (
                                            <div className="w-full" key={index}>
                                                <Image
                                                    src={
                                                        item.asset
                                                            ? item.asset.url
                                                            : house1
                                                    }
                                                    className="h-[20.8125rem] w-auto"
                                                    alt="carouselImg"
                                                    width={323}
                                                    height={333}
                                                    priority
                                                />
                                            </div>
                                        );
                                    })}
                                </Carousel>
                                <Gap size={40}></Gap>
                                <Image
                                    className="button-box-shadow w-auto h-[4.375rem]"
                                    src={v.builder.logo.asset.url}
                                    alt="icon"
                                    priority
                                    width={200}
                                    height={70}
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
                    {selectedData.map((v: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }
                            >
                                {QuickLockConfig.map(
                                    (quick: any, qi: number) => {
                                        return (
                                            <div key={qi}>
                                                <IconButton
                                                    iconPosition="top"
                                                    className="text-center"
                                                    iconSrc={quick.icon}
                                                    iconWidth={33}
                                                    iconHeight={30}
                                                >
                                                    {`${v[quick.key] || 0}  ${
                                                        quick.title
                                                    }`}
                                                </IconButton>
                                                <Gap
                                                    className={
                                                        (qi === 3 &&
                                                            'hidden') ||
                                                        ''
                                                    }
                                                    size={40}
                                                ></Gap>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={75}></Gap>
                <Title variant="6">Floor Plans</Title>
                <Gap size={40}></Gap>
                <Gap size={40}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {selectedData.map((v: any, i: number) => {
                        return (
                            <Image
                                // fill
                                key={i}
                                className={`button-box-shadow w-full ${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    ''
                                }`}
                                src={v.floorPlans[0].asset.url}
                                alt="icon"
                                priority
                                width={300}
                                height={500}
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
                    {xxxData.map((v: any, i: number) => {
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
                    {xxxData.map((v: any, i: number) => {
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
                    {xxxData.map((v: any, i: number) => {
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
                    {xxxData.map((v: any, i: number) => {
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
                    {xxxData.map((v: any, i: number) => {
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
                    {xxxData.map((v: any, i: number) => {
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
                    {xxxData.map((v: any, i: number) => {
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
                    {xxxData.map((v: any, i: number) => {
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
