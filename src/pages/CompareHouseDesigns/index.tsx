import house1 from '@/assets/compare-house-designs/house1.png';
import Meta from '@/layouts/Meta';
import sanity from '@/services/sanity';
import Main from '@/templates/Main';
import {
    BathroomEnSuiteFeatures,
    ElectricalGasFeatures,
    ExternalFeatures,
    InternalFeatures,
    KitchenFeatures,
    Miscellaneous,
    MustHaves,
    QuickLockConfig,
    interfaceKeyFormatter,
} from '@/utils';
import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
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
// 接口

export default function HouseDesigns() {
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
    // const selectedData = JSON.parse(JSON.stringify(DataList)).splice(0, 3);
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
                                                    className="h-auto w-full"
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
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {MustHaves.map((key: any, ii: number) => {
                                    return (
                                        <div
                                            key={key}
                                            className={`mb-[20px] ${
                                                (ii === 2 &&
                                                    'tablet:hidden mobile:hidden') ||
                                                ''
                                            }`}
                                        >
                                            <CheckBox
                                                isChecked={data[key] || false}
                                                disabled={true}
                                            >
                                                {interfaceKeyFormatter(key)}
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
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {ExternalFeatures.map(
                                    (key: any, ii: number) => {
                                        return (
                                            <div
                                                key={key}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox
                                                    isChecked={
                                                        data[key] || false
                                                    }
                                                    disabled={true}
                                                >
                                                    {interfaceKeyFormatter(key)}
                                                </CheckBox>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Internal Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {InternalFeatures.map(
                                    (key: any, ii: number) => {
                                        return (
                                            <div
                                                key={key}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox
                                                    isChecked={
                                                        data[key] || false
                                                    }
                                                    disabled={true}
                                                >
                                                    {interfaceKeyFormatter(key)}
                                                </CheckBox>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Kitchen Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {KitchenFeatures.map((key: any, ii: number) => {
                                    return (
                                        <div
                                            key={key}
                                            className={`mb-[20px] ${
                                                (ii === 2 &&
                                                    'tablet:hidden mobile:hidden') ||
                                                ''
                                            }`}
                                        >
                                            <CheckBox
                                                isChecked={data[key] || false}
                                                disabled={true}
                                            >
                                                {interfaceKeyFormatter(key)}
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
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {KitchenFeatures.map((key: any, ii: number) => {
                                    return (
                                        <div
                                            key={key}
                                            className={`mb-[20px] ${
                                                (ii === 2 &&
                                                    'tablet:hidden mobile:hidden') ||
                                                ''
                                            }`}
                                        >
                                            <CheckBox
                                                isChecked={data[key] || false}
                                                disabled={true}
                                            >
                                                {interfaceKeyFormatter(key)}
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
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {BathroomEnSuiteFeatures.map(
                                    (key: any, ii: number) => {
                                        return (
                                            <div
                                                key={key}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox
                                                    isChecked={
                                                        data[key] || false
                                                    }
                                                    disabled={true}
                                                >
                                                    {interfaceKeyFormatter(key)}
                                                </CheckBox>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Electrical/Gas Features</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {ElectricalGasFeatures.map(
                                    (key: any, ii: number) => {
                                        return (
                                            <div
                                                key={key}
                                                className={`mb-[20px] ${
                                                    (ii === 2 &&
                                                        'tablet:hidden mobile:hidden') ||
                                                    ''
                                                }`}
                                            >
                                                <CheckBox
                                                    isChecked={
                                                        data[key] || false
                                                    }
                                                    disabled={true}
                                                >
                                                    {interfaceKeyFormatter(key)}
                                                </CheckBox>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <Text variant="grey-bold">Miscellaneous</Text>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {selectedData.map((data: any, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`${
                                    (i === 2 &&
                                        'tablet:hidden mobile:hidden') ||
                                    i
                                }`}
                            >
                                {Miscellaneous.map((key: any, ii: number) => {
                                    return (
                                        <div
                                            key={key}
                                            className={`mb-[20px] ${
                                                (ii === 2 &&
                                                    'tablet:hidden mobile:hidden') ||
                                                ''
                                            }`}
                                        >
                                            <CheckBox
                                                isChecked={data[key] || false}
                                                disabled={true}
                                            >
                                                {interfaceKeyFormatter(key)}
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
