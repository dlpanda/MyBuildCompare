import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { GetStaticProps } from 'next';
import Link from 'next/link';
// 组件
import HouseItem from '@/components/HouseItem';
import {
    Button,
    Grid,
    IconButton,
    SearchBar,
    Title,
} from '@/components/common';
// 图片
import { useState } from 'react';
import HouseAbove from '../../assets/house-designs/house-above.png';
import HouseNext from '../../assets/house-designs/house-next.png';
import House from '../../assets/house-designs/house.png';
import CofingPNG from '../../assets/icon/cofing.png';
import '../../styles/color.css';
import '../../styles/common.css';
// 接口
import sanity, { GetHouseDesignsQuery } from '@/services/sanity';
const QUERY_LIMIT = 9;
type Props = { data: GetHouseDesignsQuery['allHouseDesign'] };

export default function HouseDesigns({ data }: Props) {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log('searchValue：' + value);
        setsearchValue(value);
    };
    const [designs, setDesigns] = useState(data);
    console.log(designs);
    // const handleShowMore = useCallback(async () => {
    //     const more = await sanity.getHouseDesigns({
    //         limit: QUERY_LIMIT,
    //         offset: designs.length,
    //     });
    //     setDesigns((prev) => prev.concat(more));
    // }, [designs.length]);
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <div className="flex justify-center gap-5 h-12">
                <IconButton
                    iconSrc={House}
                    iconWidth={29}
                    iconHeight={24}
                    iconPoistion="top"
                >
                    Single-Storey
                </IconButton>
                <IconButton
                    iconSrc={HouseNext}
                    iconWidth={27}
                    iconHeight={24}
                    iconPoistion="top"
                >
                    Double-Storey
                </IconButton>
                <IconButton
                    iconSrc={HouseAbove}
                    iconWidth={27}
                    iconHeight={24}
                    iconPoistion="top"
                >
                    Duplex
                </IconButton>
                <SearchBar
                    className="button-box-shadow mobile:hidden"
                    clickSearch={getSearchValue}
                    placeholder={'Search'}
                    iconPoistion="left"
                ></SearchBar>
                <Link className="flex" href="/Filter">
                    <IconButton
                        textClassName="mobile:hidden"
                        iconSrc={CofingPNG}
                        iconWidth={20}
                        iconHeight={20}
                    >
                        Filters
                    </IconButton>
                </Link>
            </div>
            <Grid
                cols="4"
                className="gap-x-[20px] gap-y-[40px] pt-[3.125rem] px-20 tablet:grid-cols-2 mobile:grid-cols-1"
            >
                {/* DataList */}
                {designs.map((v) => {
                    return (
                        // destruction
                        <HouseItem
                            key={v._id}
                            logoSrc={v.builder.logo.asset.url}
                            isCollect={false}
                            carouselItem={v.photos}
                            title={v.title}
                            text={v.overview}
                            author={'More Details'}
                        ></HouseItem>
                    );
                })}
            </Grid>
            <Title
                variant="6"
                className="mt-[4.6875rem] mb-[1.25rem] mx-auto text-center"
            >
                Continuing Exploring
            </Title>
            <div className="text-center">
                <Button className="blue-green-gradient text-white mb-[4.6875rem] mx-auto">
                    Show More
                </Button>
            </div>
        </Main>
    );
}

export const getStaticProps = (async (context) => {
    const data = await sanity.getHouseDesigns({
        limit: QUERY_LIMIT,
        offset: 0,
    });
    return { props: { data } };
}) satisfies GetStaticProps<Props>;
