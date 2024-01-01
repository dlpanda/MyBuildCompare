import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { DataList } from '@/utils/DataList';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
// 组件
import HouseItem from '@/components/HouseItem';
import Form from '@/components/IndividualBuilder/Form';
import { Button, Gap, Grid, Text, Title } from '@/components/common';
// 图片
import AwardsPNG from '@/assets/individual-builder/awards.png';
import '@/styles/color.css';
import '@/styles/common.css';
// 接口
import sanity, { GetBuilderQuery } from '@/services/sanity';
import { useState } from 'react';
type Props = { data: GetBuilderQuery['Builder'] };

export default function HouseDesigns({ data }: Props) {
    const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 2);
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    const [builder, setbuilder] = useState(data);
    // const getDetail = useCallback(async () => {
    //     const res = await sanity.getBuilder({
    //         id: id,
    //     });
    //     console.log(res);
    //     setbuilder(res);
    // }, []);
    // getDetail();
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <Gap size={75}></Gap>
            <div className="flex px-20 flex-wrap mobile:px-2">
                <div className="w-[30%] tablet:w-[65%] mobile:w-full">
                    <Form data={builder}></Form>
                </div>
                <div className="w-[70%] px-40 tablet:w-full tablet:px-0 mobile:w-full mobile:px-2">
                    <Gap
                        className="hidden tablet:block mobile:block"
                        size={75}
                    ></Gap>
                    <Title variant="6">About Builder</Title>
                    <Gap size={30}></Gap>
                    <Text>
                        {builder.description ||
                            `GJ Gardner Homes is rated as Australia&apos;s No.1 and
                        Most Trusted National Home Building brand as a result of
                        their level of customer satisfaction. Their commitment
                        to acting with integrity, transparency and reliability
                        in everything they do ensures that you will only receive
                        the best service from Australia&apos;s most reputable
                        building network.`}
                    </Text>
                    <Gap size={60}></Gap>
                    <Title variant="6">Awards</Title>
                    <Gap size={30}></Gap>
                    <Image
                        src={
                            builder.awards && builder.awards.length
                                ? builder.awards[0].asset.url
                                : AwardsPNG
                        }
                        alt="img"
                        width={492}
                        height={140}
                        priority
                    />
                    <Gap size={60}></Gap>
                    <Title variant="6">House Designs</Title>
                    <Gap size={30}></Gap>
                    <Grid className="grid-cols-2 gap-x-[20px] mobile:grid-cols-1">
                        {houseList.map((v: any, i: number) => {
                            return (
                                <HouseItem
                                    key={i}
                                    logoSrc={v.logoSrc}
                                    isCollect={v.isCollect}
                                    carouselItem={v.carouselItem}
                                    title={v.title}
                                    text={v.text}
                                    author={v.author}
                                ></HouseItem>
                            );
                        })}
                    </Grid>
                    <Gap size={30}></Gap>
                    <Button className="green-gradient">
                        View more designs
                    </Button>
                    <Gap size={75}></Gap>
                </div>
            </div>
            {/* <Popup></Popup> */}
        </Main>
    );
}
export const getStaticProps = (async (context) => {
    const data = await sanity.getBuilder({
        id: 'ca2b1164-b669-498b-ab7f-79db011f8ddc',
    });
    return { props: { data } };
}) satisfies GetStaticProps<Props>;
