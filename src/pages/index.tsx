import { AppConfig } from '@/utils/AppConfig';
import { BuilderCompare } from '@/utils/BuilderCompare';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
// 组件
import HouseAbove from '@/assets/house-designs/house-above.png';
import HouseNext from '@/assets/house-designs/house-next.png';
import House from '@/assets/house-designs/house.png';
import CofingPNG from '@/assets/icon/cofing.png';
import SearchBlack from '@/assets/icon/search-black.png';
import Search from '@/assets/icon/search.png';
import Blogs from '@/components/MybuildCompare/Blogs';
import ButtonGroup from '@/components/MybuildCompare/ButtonGroup';
import Colunm from '@/components/MybuildCompare/Colunm';
import SeachItem from '@/components/MybuildCompare/SeachItem';
import Slider from '@/components/MybuildCompare/Slider';
import {
    Button,
    Gap,
    Grid,
    Icon,
    Line,
    SearchBar,
    Title,
} from '@/components/common';
import Meta from '@/layouts/Meta';
import sanity, { GetArticlesQuery } from '@/services/sanity';
import '@/styles/color.css';
import '@/styles/common.css';
import '@/styles/global.css';
import '@/styles/index.css';
import Main from '@/templates/Main';
import clsx from 'clsx';
import { GetStaticProps } from 'next';
import Router from 'next/router';
import PlacesAutocomplete, {
    geocodeByPlaceId,
} from 'react-places-autocomplete';
import ContactGreen from '../assets/icon/contact-green.png';
import HammerGreen from '../assets/icon/hammer-green.png';
import SearchGreen from '../assets/icon/search-green.png';
import ModuleBg from '../assets/index/module-bg.png';
import { BATHROOMS, BEDROOMS, GARAGES } from '../utils/FilterConfig';

const QUERY_LIMIT = 4;

type SearchBy = 'by-design' | 'by-filter' | 'by-location';

type SearchConditions = {
    'by-design': {
        storeys: number[];
        duplex?: boolean;
    };
    'by-filter': {
        bedrooms: number[];
        bathrooms: number[];
        garages: number[];
    };
    'by-location': {
        location: {
            center: {
                lat: number;
                lng: number;
            };
            radius: number;
        };
    };
};

type Props = {
    className?: string;
    blogsData: GetArticlesQuery['allArticle'];
};

export default function Home({ blogsData }: Props) {
    const columData: any = [
        {
            id: '01',
            iconSrc: SearchGreen,
            text: 'Find The Ideal Home',
        },
        {
            id: '02',
            iconSrc: ContactGreen,
            text: 'Compare Builders',
        },
        {
            id: '03',
            iconSrc: HammerGreen,
            text: 'Build Your Dream Home',
        },
    ];

    const [address, setAddress] = useState('');
    const [searchBy, setSearchBy] = useState<SearchBy>();
    const [searchConditions, setSearchConditions] = useState<SearchConditions>({
        'by-design': { storeys: [], duplex: false },
        'by-filter': { bedrooms: [], bathrooms: [], garages: [] },
        'by-location': {
            location: {
                center: {
                    lat: -33.865143,
                    lng: 151.2099,
                },
                radius: 15 * 1000,
            },
        },
    });
    const { 'by-design': design, 'by-filter': filter } = searchConditions;

    const handleSearch = useCallback(async () => {
        Router.push({
            pathname: '/HouseDesigns',
            query: {
                searchParams: JSON.stringify(searchConditions[searchBy]),
            },
        });
    }, [searchConditions, searchBy]);

    const handleSelect = useCallback(
        async (address: string, placeId: string) => {
            const [
                {
                    geometry: { location },
                },
            ] = await geocodeByPlaceId(placeId);
            setSearchConditions(
                ({
                    'by-location': {
                        location: { radius },
                    },
                    ...rest
                }) => ({
                    'by-location': {
                        location: {
                            center: {
                                lat: location.lat(),
                                lng: location.lng(),
                            },
                            radius,
                        },
                    },
                    ...rest,
                })
            );
            setAddress(address);
        },
        []
    );

    const handleSearchFilterChange = useCallback(
        (
            key: keyof SearchConditions['by-filter'],
            { type, index }: { type: 'add' | 'remove'; index: number }
        ) =>
            setSearchConditions(
                ({ 'by-filter': { [key]: val, ...others }, ...rest }) => ({
                    'by-filter': {
                        [key]:
                            index == 0
                                ? type === 'add'
                                    ? []
                                    : val
                                : type === 'remove'
                                ? val.filter((e) => e !== index)
                                : getBoundaryArray([...val, index]),

                        ...others,
                    } as SearchConditions['by-filter'],
                    ...rest,
                })
            ),
        []
    );

    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <div className="banner select-none bg-cover bg-[url('../assets/index/banner.png')] mobile:bg-[url('../assets/index/banner-small-screen.png')]">
                <Gap size={226}></Gap>
                <div className="title">
                    Search. Compare.
                    <br className="hidden mobile:block" /> Build.
                </div>
                <Gap size={20}></Gap>
                {/* desktop & tablet */}
                <div
                    className={`search mobile:!hidden ${
                        searchBy ? '!bg-[#F2F2F2]' : ''
                    } `}
                >
                    <div
                        className={`
                            option 
                            bold 
                            ${
                                searchBy === 'by-design'
                                    ? 'bg-white active-shadow !font-semibold !text-[#3D3D3D]'
                                    : ''
                            }
                            ${
                                searchBy
                                    ? '!font-normal text-[#888888]'
                                    : 'font-semibold !text-[#3D3D3D]'
                            }
                        `}
                        onClick={() => setSearchBy('by-design')}
                    >
                        House Design
                    </div>
                    <Line
                        direction="verical"
                        width="1px"
                        height="3.125rem"
                        color="#D9D9D9"
                        className={`${
                            searchBy && searchBy !== 'by-location'
                                ? '!hidden'
                                : ''
                        }`}
                    ></Line>
                    <div
                        className={`
                        option 
                        bold 
                        ${
                            searchBy === 'by-filter'
                                ? 'bg-white active-shadow !font-semibold !text-[#3D3D3D]'
                                : ''
                        }
                        ${
                            searchBy
                                ? '!font-normal text-[#888888]'
                                : 'font-semibold !text-[#3D3D3D]'
                        }
                        `}
                        onClick={() => setSearchBy('by-filter')}
                    >
                        Filters
                    </div>
                    <Line
                        direction="verical"
                        width="1px"
                        height="3.125rem"
                        color="#D9D9D9"
                        className={`${
                            searchBy && searchBy !== 'by-design'
                                ? '!hidden'
                                : ''
                        }`}
                    ></Line>
                    <div
                        className={`
                            option 
                            ${
                                searchBy === 'by-location'
                                    ? '!bg-white active-shadow !font-semibold !text-[#3D3D3D]'
                                    : ''
                            }
                            ${
                                searchBy
                                    ? '!pr-[10rem] bg-[#F2F2F2] !font-normal'
                                    : 'bg-white font-semibold'
                            }
                        `}
                        onClick={() => setSearchBy('by-location')}
                    >
                        Search Location
                    </div>
                    <div
                        className={`
                            round-icon-button 
                            text-center
                            blue-green-gradient 
                            text-white
                            rounded-[1.5625rem]
                            mt-[-2px]
                            cursor-pointer
                            ${searchBy === 'by-location' ? 'bg-white' : ''}
                            ${
                                searchBy
                                    ? 'w-[7.5rem] pl-[1.25rem] right-[-4rem] !text-left'
                                    : ''
                            }
                        `}
                        onClick={handleSearch}
                    >
                        <Image
                            className={`
                                inline-block
                                ${searchBy ? 'mr-[0.625rem]' : ''}
                            `}
                            src={Search}
                            alt="Search"
                            width={16}
                            height={16}
                            priority
                        />
                        <span
                            className={`
                            text-white
                            ${searchBy ? 'inline-block' : 'hidden'}
                        `}
                        >
                            Search
                        </span>
                    </div>
                </div>
                <Gap size={10}></Gap>
                <div
                    className={`${
                        searchBy === 'by-design' ? 'flex' : 'hidden'
                    } button-box-shadow w-[37.5rem] h-[12.5rem] p-[2.5rem] bg-[#fff] mx-auto rounded-xl text-left relative`}
                >
                    <SeachItem
                        icon={House}
                        iconWidth={28}
                        iconHeight={24}
                        text="Single-Storey"
                        isAcitve={design.storeys.includes(1)}
                        onClick={() =>
                            setSearchConditions(
                                ({
                                    'by-design': { storeys: storey, ...others },
                                    ...rest
                                }) => ({
                                    'by-design': {
                                        ...others,
                                        storeys: storey.includes(1)
                                            ? storey.filter((e) => e !== 1)
                                            : [...storey, 1],
                                    },
                                    ...rest,
                                })
                            )
                        }
                    ></SeachItem>
                    <Gap direction="verical" size={20}></Gap>
                    <SeachItem
                        icon={HouseAbove}
                        iconWidth={28}
                        iconHeight={24}
                        text="Double-Storey"
                        isAcitve={design.storeys.includes(2)}
                        onClick={() =>
                            setSearchConditions(
                                ({
                                    'by-design': { storeys: storey, ...others },
                                    ...rest
                                }) => ({
                                    'by-design': {
                                        ...others,
                                        storeys: storey.includes(2)
                                            ? storey.filter((e) => e !== 2)
                                            : [...storey, 2],
                                    },
                                    ...rest,
                                })
                            )
                        }
                    ></SeachItem>
                    <Gap direction="verical" size={20}></Gap>
                    <SeachItem
                        icon={HouseNext}
                        iconWidth={41}
                        iconHeight={24}
                        text="Duplex"
                        isAcitve={design.duplex}
                        onClick={() =>
                            setSearchConditions(
                                ({
                                    'by-design': { duplex, ...others },
                                    ...rest
                                }) => ({
                                    'by-design': {
                                        ...others,
                                        duplex: !duplex,
                                    },
                                    ...rest,
                                })
                            )
                        }
                    ></SeachItem>
                </div>
                <div
                    className={`${
                        searchBy === 'by-filter' ? 'block' : 'hidden'
                    } button-box-shadow w-[31.0625rem] h-[21rem] p-[2.5rem] bg-[#fff] mx-auto rounded-xl text-left relative`}
                >
                    <ButtonGroup
                        title="Bedrooms"
                        items={BEDROOMS.map((label) => ({ label }))}
                        selectedIndexes={
                            !filter.bedrooms?.length ? [0] : filter.bedrooms
                        }
                        onChange={(args) =>
                            handleSearchFilterChange('bedrooms', args)
                        }
                    />
                    <Gap size={20}></Gap>
                    <ButtonGroup
                        title="Bathrooms"
                        items={BATHROOMS.map((label) => ({ label }))}
                        selectedIndexes={
                            !filter.bathrooms?.length ? [0] : filter.bathrooms
                        }
                        onChange={(args) =>
                            handleSearchFilterChange('bathrooms', args)
                        }
                    />
                    <Gap size={20}></Gap>
                    <ButtonGroup
                        title="Garages"
                        items={GARAGES.map((label) => ({ label }))}
                        selectedIndexes={
                            !filter.garages?.length ? [0] : filter.garages
                        }
                        onChange={(args) =>
                            handleSearchFilterChange('garages', args)
                        }
                    />
                </div>
                <div
                    className={`${
                        searchBy === 'by-location' ? 'block' : 'hidden'
                    } button-box-shadow w-[36.8125rem] h-[8.75rem] p-[2.5rem] bg-[#fff] mx-auto rounded-xl text-left relative`}
                >
                    <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                        searchOptions={{
                            componentRestrictions: { country: ['au'] },
                        }}
                        googleCallbackName="initializeGoogleAPI"
                    >
                        {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                        }) => (
                            <div className="inline h-full border border-[#D1D1D1] background-white rounded-[5.625rem] py-[0.5625rem] px-5 w-full h-full !inline-block leading-[2.5rem] rounded-xl font-semibold">
                                <Icon
                                    className={clsx(
                                        `inline-block mr-[0.625rem]`
                                    )}
                                    iconSrc={SearchBlack}
                                    iconWidth={20}
                                    iconHeight={20}
                                />
                                <input
                                    {...getInputProps({
                                        placeholder: 'Search Places ...',
                                        className:
                                            'grey inline-block outline-none w-[11.75rem] bg-transparent !w-[calc(100%-20px-0.625rem)] !text-[#3D3D3D]',
                                    })}
                                />
                                <div className="autocomplete-dropdown-container">
                                    {suggestions.map((suggestion) => {
                                        const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                        const style = suggestion.active
                                            ? {
                                                  backgroundColor: '#fafafa',
                                                  cursor: 'pointer',
                                              }
                                            : {
                                                  backgroundColor: '#ffffff',
                                                  cursor: 'pointer',
                                              };
                                        return (
                                            <div
                                                {...getSuggestionItemProps(
                                                    suggestion,
                                                    {
                                                        className,
                                                        style,
                                                    }
                                                )}
                                            >
                                                <span>
                                                    {suggestion.description}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                </div>
                {/* mobile search */}
                <div className="hidden w-[90%] h-[48px] mx-auto mobile:flex">
                    <SearchBar
                        className="flex-1 h-full !inline-block leading-[36px] rounded-full font-semibold button-box-shadow border-[0.5px] border-[#D1D1D1] bg-white"
                        iconUrl={SearchBlack}
                        iconPoistion="left"
                        placeholder="Search Locations"
                        iconSize={20}
                        iconClassName="mt-[-6px]"
                        inputClassName="!w-[calc(100%-20px-0.625rem)] !text-[#3D3D3D] text-[16px]"
                        clickSearch={() => {}}
                    ></SearchBar>
                    <div className="rounded-full ml-2 inline-block w-[48px] h-full leading-[48px] p-[14px] button-box-shadow border-[0.5px] border-[#D1D1D1] bg-white">
                        <Link href="/IndexFilter">
                            <Image
                                className=""
                                src={CofingPNG}
                                alt="img"
                                width={20}
                                height={20}
                                priority
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <Gap size={75} mobileSize={40}></Gap>
            <Slider></Slider>
            <div
                className="mt-[4.6875rem] py-[4.6875rem] text-center bg-cover"
                style={{ backgroundImage: `url(${ModuleBg.src})` }}
            >
                <Title variant="4">How It Works</Title>
                <Colunm dataList={columData}></Colunm>
                <Button className="mt-10 green-gradient">
                    Connect With Right Builder
                </Button>
            </div>
            <div className="my-20 mx-[4.6875rem] mobile:mx-2">
                <Title variant="4">Blogs And Articles</Title>
                <Blogs data={blogsData}></Blogs>
                <Button className="green-gradient">View More Articles</Button>
            </div>
            <div
                className="pt-[4.7rem] pb-[3.75rem] bg-cover text-center"
                style={{ backgroundImage: `url(${ModuleBg.src})` }}
            >
                <Title variant="4" className="mobile:text-left px-4">
                    Some Of The Many Builders We Compare
                </Title>
                <Grid className="grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 max-w-[67.25rem] mt-[1.875rem] mx-auto gap-3 px-4">
                    {BuilderCompare.map((v: any) => {
                        return (
                            <div className="bg-white rounded-xl" key={v.id}>
                                <Image
                                    className="mx-auto"
                                    src={v.src}
                                    alt={v.id}
                                    priority
                                />
                            </div>
                        );
                    })}
                </Grid>
            </div>
        </Main>
    );
}

const getBoundaryArray = (arr: number[]) => {
    if (arr.length < 2) return arr;

    arr.sort();
    return [arr[0], arr[arr.length - 1]];
};

export const getStaticProps = (async (context) => {
    const blogsData = await sanity.getArticles({
        limit: QUERY_LIMIT,
        offset: 0,
    });
    return { props: { blogsData } };
}) satisfies GetStaticProps<Props>;
