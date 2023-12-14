import Image from 'next/image'
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
// 组件
import SearchBar from '@/components/common/SearchBar';
import IconVerticalButton from '@/components/common/Button/IconVerticalButton';
import IconButton from '@/components/common/Button/IconButton';
import Grid from '@/components/common/Grid';
import Title6 from '@/components/common/Title/Title6';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
// 图片
import SearchBlack from '../../assets/icon/search-black.png'
import CofingPNG from '../../assets/icon/cofing.png'
import HeartPNG from '../../assets/icon/heart.png'
import House from '../../assets/houseDesigns/house.png'
import HouseNext from '../../assets/houseDesigns/house-next.png'
import HouseAbove from '../../assets/houseDesigns/house-above.png'
import ItemLogo from '../../assets/houseDesigns/item-logo.png'
import '../../styles/common.css'
import '../../styles/color.css'
import { useState } from 'react'

export default function HouseDesigns() {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log("searchValue：" + value)
        setsearchValue(value)
    }
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
        </Main>
    )
}
