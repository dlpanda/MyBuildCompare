import Image from 'next/image'
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
// 图片
import SearchBlack from '../../assets/icon/search-black.png'
import CofingPNG from '../../assets/icon/cofing.png'
import HeartPNG from '../../assets/icon/heart.png'
import House from '../../assets/houseDesigns/house.png'
import HouseNext from '../../assets/houseDesigns/house-next.png'
import HouseAbove from '../../assets/houseDesigns/house-above.png'
import ItemLogo from '../../assets/houseDesigns/item-logo.png'
import ItemImg from '../../assets/houseDesigns/item-img.png'
import '../../styles/common.css'
import '../../styles/color.css'
import '@/styles/houseDesigns.css'
import { useState } from 'react'

export default function HouseDesigns() {
    const [searchValue, setsearchValue] = useState('');
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }

        >
            <div className='search-items dark-grey'>
                <div className='item'>
                    <Image src={House} alt="House" width={29} height={24} priority />
                    <p>Single-Storey</p>
                </div>
                <div className='item'>
                    <Image src={HouseNext} alt="HouseNext" width={27} height={24} priority />
                    <p>Double-Storey</p>
                </div>
                <div className='item'>
                    <Image src={HouseAbove} alt="HouseAbove" width={27} height={24} priority />
                    <p>Duplex</p>
                </div>
                <div className='search-item'>
                    <Image src={SearchBlack} alt="SearchBlack" width={20} height={20} priority />
                    <input className='grey' type="text" value={searchValue} placeholder='Search' onChange={e => {
                        setsearchValue(e.target.value);
                    }} />
                </div>
                <div className='filters'>
                    <Image src={CofingPNG} alt="CofingPNG" width={20} height={17.5} priority />
                    <p>Filters</p>
                </div>
            </div>
            <div className='house-list'>
                {new Array(9).fill(0).map((v, i) => {
                    return (
                        <div key={i} className='house-item'>
                            <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                            <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                            <div className='heart'>
                                <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                            </div>
                            <div className='info'>
                                <p className='body-text-grey-bold'>Name</p>
                                <p className='body-text-light'>Bed, bath, Garage, Squares</p>
                            </div>
                            <div className='user underlined-links'>
                                More Details
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='continuing title-6'>Continuing Exploring</div>
            <div className='show-more button blue-green-gradient'>Show More</div>
        </Main>
    )
}
