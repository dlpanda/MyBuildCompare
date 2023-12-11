import Image from 'next/image'
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import { BuilderCompare } from '@/utils/BuilderCompare';
// 組件
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import Slider from '@/components/index/Slider';
import Grid from '@/components/common/Grid';
// 图片
import Search from '@/assets/icon/search.png'
import SearchGreen from '../assets/icon/search-green.png'
import ContactGreen from '../assets/icon/contact-green.png'
import HammerGreen from '../assets/icon/hammer-green.png'
import Blogs1 from '../assets/index/blogs-1.png'
import Blogs2 from '../assets/index/blogs-2.png'
import Blogs3 from '../assets/index/blogs-3.png'
import Blogs4 from '../assets/index/blogs-4.png'
import '@/styles/color.css'
import '@/styles/common.css'
import '@/styles/global.css'
import '@/styles/index.css'

export default function Home() {
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
            <div className='banner backgroundImage-gradient-conic colors-hh'>
                <div className='title'>Search. Compare. Build.</div>
                <div className='search'>
                    <div className='option bold'>House Design</div>
                    <div className='vertical-lines'>&nbsp;</div>
                    <div className='option bold'>Filters</div>
                    <div className='vertical-lines'>&nbsp;</div>
                    <div className='option'>Search Location</div>
                    <div className='round-icon-button blue-green-gradient'>
                        <Image className='inline-block' src={Search} alt="Search" width={16} height={16} priority />
                    </div>
                </div>
            </div>
            <Slider></Slider>
            <div className='how-it-works'>
                <div className='title title-4'>
                    How It Works</div>
                <div className='items'>
                    <div className='item'>
                        <Image src={SearchGreen} alt="SearchGreen" width={40} height={40} priority />
                        <p className='body-text'>
                            01
                        </p>
                        <div className='content title-6'>
                            Find The Ideal Home
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={ContactGreen} alt="ContactGreen" width={40} height={40} priority />
                        <p className='body-text'>
                            03
                        </p>
                        <div className='content title-6'>
                            Compare Builders
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={HammerGreen} alt="HammerGreen" width={40} height={40} priority />
                        <p className='body-text'>
                            04
                        </p>
                        <div className='content title-6'>
                            Build Your Dream Home
                        </div>
                    </div>
                </div>
                <div className='button green-gradient'>
                    Connect With Right Builder
                </div>
            </div>
            <div className='blogs-articles'>
                <div className='title-4'>
                    Blogs And Articles
                </div>
                <div className='items'>
                    <div className='item'>
                        <Image src={Blogs1} alt="Blogs1" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6'>
                                4 Common Floor Plan Mistakes!
                            </p>
                            <p className='body-text'>
                                Written By <span className='underlined-links'>Mel Davies</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={Blogs2} alt="Blogs2" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6'>
                                Do not Fall For Fke Base Prices And Avoid The Price Hike!
                            </p>
                            <p className='body-text'>
                                Written By <span className='underlined-links'>Mel Davies</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={Blogs3} alt="Blogs3" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6'>
                                When Is The Best Time To Start Building My New Home?
                            </p>
                            <p className='body-text'>
                                Written By <span className='underlined-links'>Kathy Schoonenberg</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={Blogs4} alt="Blogs4" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6'>
                                What Stamp Duty Concessions And Exemptions Are Available For New Homes In NSW?
                            </p>
                            <p className='body-text'>
                                Written By <span className='underlined-links'>Mel Davies</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='button green-gradient'>
                    View More Articles
                </div>
            </div>
            <div className='other-builders'>
                <div className='title title-4'>
                    Some Of The Many Builders We Compare
                </div>
                <Grid className="grid-cols-4 w-[67.25rem] mt-[1.875rem] mx-auto gap-3">
                    {BuilderCompare.map((v: any) => {
                        return (
                            <div className='bg-white h-[5.625rem] rounded-xl]' key={v.id}>
                                {/* <Image src="../assets/index/other-builders/ansa-homes-logo.png" alt="BuilderCompare" width={40} height={40} priority /> */}
                            </div>
                        )
                    })}
                </Grid >
                    {/* <div className='items'>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div> */}
            </div>
        </Main>
    )
}
