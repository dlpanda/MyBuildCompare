import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import { useCallback, useState } from 'react';
// 组件
import {
    Button,
    Gap,
    Grid,
    IconButton,
    SearchBar,
    Text,
    Title,
} from '@/components/common';
// 图片
import HouseAbove from '@/assets/house-designs/house-above.png';
import HouseNext from '@/assets/house-designs/house-next.png';
import House from '@/assets/house-designs/house.png';
// 样式
import '@/styles/color.css';
import '@/styles/common.css';
// 接口
import sanity, { GetBuildersQuery } from '@/services/sanity';

const QUERY_LIMIT = 9;

type Props = { data: GetBuildersQuery['allBuilder'] };

export default function BuilderDirctory({ data = [] }: Props) {
    const [searchValue, setSearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log('searchValue：' + value);
        setSearchValue(value);
    };

    const [builders, setBuilders] = useState(data);
    const handleShowMore = useCallback(async () => {
        const more = await sanity.getBuilders({
            limit: QUERY_LIMIT,
            offset: builders.length,
        });
        setBuilders((prev) => prev.concat(more));
    }, [builders.length]);
    const changeRoute = useCallback((id: string) => {
        console.log(id);
        Router.push({
            pathname: '/IndividualBuilder',
            query: {
                id,
            },
        });
    }, []);
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <Gap size={50}></Gap>
            <div className="flex justify-center gap-5 h-12">
                <IconButton
                    iconPoistion="top"
                    className="mobile:hidden"
                    iconSrc={House}
                    iconWidth={29}
                    iconHeight={24}
                >
                    Single-Storey
                </IconButton>
                <IconButton
                    iconPoistion="top"
                    className="mobile:hidden"
                    iconSrc={HouseNext}
                    iconWidth={27}
                    iconHeight={24}
                >
                    Double-Storey
                </IconButton>
                <IconButton
                    iconPoistion="top"
                    className="mobile:hidden"
                    iconSrc={HouseAbove}
                    iconWidth={27}
                    iconHeight={24}
                >
                    Duplex
                </IconButton>
                <SearchBar
                    className="button-box-shadow"
                    clickSearch={getSearchValue}
                    placeholder={'Search'}
                    iconPoistion="left"
                ></SearchBar>
            </div>
            <Gap className="mobile:hidden" size={50}></Gap>
            <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1">
                {builders.map(
                    ({ _id, licenseNo, sinceYear, logo, website }) => {
                        return (
                            <div
                                key={_id}
                                className="flex button-box-shadow px-8 rounded-md bg-cover"
                            >
                                <div className="flex px-2 py-6">
                                    <div className="w-[8.75rem]">
                                        <Image
                                            className="w-full rounded-md"
                                            src={logo.asset.url || ''}
                                            alt="img"
                                            width={140}
                                            height={140}
                                            priority
                                            onClick={() => {
                                                changeRoute(_id);
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col pl-4">
                                        <Gap size={20}></Gap>
                                        <Text>License No. {licenseNo}</Text>
                                        <Text>Since {sinceYear}</Text>
                                        <Gap size={30}></Gap>
                                        <a
                                            href={website || 'www.baidu.com'}
                                            target="_blank"
                                            onClick={() => {
                                                window.event.cancelBubble =
                                                    true;
                                            }}
                                        >
                                            <Text
                                                variant="underlined-links"
                                                className="inline-block"
                                            >
                                                Visit Builder Website
                                            </Text>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </Grid>
            <div className="text-center">
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
                <Title variant="6">Continue Exploring</Title>
                <Gap size={20}></Gap>
                <Button className="green-gradient" onClick={handleShowMore}>
                    Show more
                </Button>
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
            </div>
            <div className="bg-cover bg-[url('../assets/index/module-bg.png')] text-center">
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
                <Title variant="2">Are You a builder?</Title>
                <Gap size={40} tabletSize={40} mobileSize={20}></Gap>
                <Button className="blue-green-gradient text-white">
                    Join our Platform
                </Button>{' '}
                <Gap size={75} tabletSize={75} mobileSize={40}></Gap>
            </div>
        </Main>
    );
}

export const getStaticProps = (async (context) => {
    const data = await sanity.getBuilders({ limit: QUERY_LIMIT, offset: 0 });
    return { props: { data } };
}) satisfies GetStaticProps<Props>;
