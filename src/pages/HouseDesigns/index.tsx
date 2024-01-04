import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
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
import ComparePNG from '@/assets/icon/compare.png';
import HouseAbove from '../../assets/house-designs/house-above.png';
import HouseNext from '../../assets/house-designs/house-next.png';
import House from '../../assets/house-designs/house.png';
import CofingPNG from '../../assets/icon/cofing.png';
import '../../styles/color.css';
import '../../styles/common.css';
// 接口
import sanity, { GetHouseDesignsQuery } from '@/services/sanity';

const QUERY_LIMIT = 9;
const API_ENDPOINT = process.env.NEXT_PUBLIC_SANITY_API_ENDPOINT;

type Props = { data: GetHouseDesignsQuery['allHouseDesign'] };

export default function HouseDesigns({ data }: Props) {
    const {
        query: { searchParams },
    } = useRouter();

    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log('searchValue：' + value);
        setsearchValue(value);
    };
    const [designs, setDesigns] = useState<typeof data>([]);

    useEffect(() => {
        if (!searchParams) {
            setDesigns(data);
            return;
        }

        (async () => {
            const params = {
                limit: QUERY_LIMIT,
                params: JSON.parse(searchParams as string),
            };
            const resp = await fetch(`${API_ENDPOINT}/search-designs`, {
                method: 'POST',
                body: JSON.stringify(params),
            });
            const entities: { _id: string }[] = await resp.json();
            const data = await sanity.getHouseDesigns({
                where: { _id: { in: entities.map(({ _id }) => _id) } },
                limit: QUERY_LIMIT,
                offset: 0,
            });
            setDesigns(data);
        })();
    }, [searchParams]);

    // 选中
    const [selectedIds, setSelectedIds] = useState([]);
    const handleHeartClick = useCallback((id: string, isSelected: boolean) => {
        if (selectedIds.length === 10) return alert('请不要选择超过10项');
        console.log(isSelected);
        if (isSelected) {
            setSelectedIds((prev) => {
                prev.push(id);
                console.log(prev);
                return prev;
            });
        } else {
            const index = selectedIds.findIndex((value) => value === id);
            setSelectedIds((prev) => {
                prev.splice(index, 1);
                console.log(prev);
                return prev;
            });
        }
    }, []);
    // 跳转到对比
    const handleCompare = useCallback(() => {
        Router.push({
            pathname: '/CompareHouseDesigns',
            query: {
                selectedIds,
            },
        });
    }, []);
    // 更多
    const handleShowMore = useCallback(async () => {
        const more = await sanity.getHouseDesigns({
            limit: QUERY_LIMIT,
            offset: designs.length,
        });
        setDesigns((prev) => prev.concat(more));
    }, [designs.length]);
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
                            id={v._id}
                            logoSrc={v.builder.logo.asset.url}
                            handleHeartClick={handleHeartClick}
                            isCollect={false}
                            carouselItem={v.photos}
                            title={v.title}
                            text={`${v.bedrooms || 0} Bed ${
                                v.storey || 0
                            } Bath ${v.garage || 0} Garage ${
                                v.houseSize || 0
                            } Squares`}
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
                <Button
                    className="blue-green-gradient text-white mb-[4.6875rem] mx-auto"
                    onClick={handleShowMore}
                >
                    Show More
                </Button>
            </div>
            <div
                onClick={handleCompare}
                className="fixed z-20 top-1/2 left-[50%] ml-[-3rem] rounded-xl border w-[6rem] bg-[#ccc] text-center cursor-pointer select-none"
            >
                Compare
            </div>
            <IconButton
                className="hover:bg-[#888888] border-none shadow-none bg-[#686868] text-white fixed z-20 top-1/2 left-[50%] ml-[-4.5rem] rounded-[16px] border w-[9rem] text-center cursor-pointer select-none py-2"
                iconSrc={ComparePNG}
                iconWidth={20}
                iconHeight={20}
                iconPoistion="right"
            >
                Compare
            </IconButton>
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
