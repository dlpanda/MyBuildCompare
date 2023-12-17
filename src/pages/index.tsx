import Image from 'next/image'
import Link from "next/link"
import { AppConfig } from '@/utils/AppConfig';
import { BuilderCompare } from '@/utils/BuilderCompare';
// 组件
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import Slider from '@/components/MybuildCompare/Slider';
import Grid from '@/components/common/Grid';
import Gap from '@/components/common/Gap';
import Blogs from '@/components/MybuildCompare/Blogs';
import MobileBlogs from '@/components/MybuildCompare/MobileBlogs';
import Colunm from '@/components/MybuildCompare/Colunm';
import Title4 from '@/components/common/Title/Title4';
import LineVertical from '@/components/common/LineVertical';
import GradientButton from '@/components/common/Button/GradientButton';
// 图片
import Search from '@/assets/icon/search.png'
import SearchGreen from '../assets/icon/search-green.png'
import ContactGreen from '../assets/icon/contact-green.png'
import HammerGreen from '../assets/icon/hammer-green.png'
import Blogs1 from '../assets/index/blogs-1.png'
import Blogs2 from '../assets/index/blogs-2.png'
import Blogs3 from '../assets/index/blogs-3.png'
import Blogs4 from '../assets/index/blogs-4.png'
import ModuleBg from '../assets/index/module-bg.png'
import '@/styles/color.css'
import '@/styles/common.css'
import '@/styles/global.css'
import '@/styles/index.css'

export default function Home() {
    const columData: any = [{
        id: '01',
        iconSrc: SearchGreen,
        text: 'Find The Ideal Home'
    }, {
        id: '02',
        iconSrc: ContactGreen,
        text: 'Compare Builders'
    }, {
        id: '03',
        iconSrc: HammerGreen,
        text: 'Build Your Dream Home'
    },]
    const blogsData: any = [{
        id: '1',
        imgSrc: Blogs1,
        title: '4 Common Floor Plan Mistakes!',
        author: 'Mel Davies'
    }, {
        id: '2',
        title: 'Do not Fall For Fke Base Prices And Avoid The Price Hike!',
        imgSrc: Blogs2,
        author: 'Mel Davies'
    }, {
        id: '3',
        title: 'When Is The Best Time To Start Building My New Home?',
        imgSrc: Blogs3,
        author: 'Kathy Schoonenberg'
    }, {
        id: '4',
        title: 'What Stamp Duty Concessions And Exemptions Are Available For New Homes In NSW?',
        imgSrc: Blogs4,
        author: 'Mel Davies'
    },]
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
            <div className="banner bg-cover bg-[url('../assets/index/banner.png')] mobile:bg-[url('../assets/index/banner-small-screen.png')]">
                <div className='title'>Search. Compare. Build.</div>
                <div className='search'>
                    <div className='option bold'><Link href={'/HouseDesigns'}>House Design</Link></div>
                    <LineVertical></LineVertical>
                    <div className='option bold'>Filters</div>
                    <LineVertical></LineVertical>
                    <div className='option'>Search Location</div>
                    <div className='round-icon-button blue-green-gradient'>
                        <Image className='inline-block' src={Search} alt="Search" width={16} height={16} priority />
                    </div>
                </div>
            </div>
            <Gap className="mobile:hidden" size={75}></Gap>
            <Gap className="hidden mobile:block" size={40}></Gap>
            <Slider></Slider>
            <div className='mt-[4.6875rem] py-[4.6875rem] bg-cover text-center bg-cover' style={{backgroundImage: `url(${ModuleBg.src})`}}>
                <Title4 text="How It Works"></Title4>
                <Colunm dataList={columData}></Colunm>
                <GradientButton className='mt-10' text='Connect With Right Builder'></GradientButton>
            </div>
            <div className='my-20 mx-[4.6875rem] mobile:mx-2'>
                <Title4 text="Blogs And Articles"></Title4>
                <Blogs className='mobile:hidden' dataList={blogsData}></Blogs>
                <MobileBlogs className='hidden mobile:block' dataList={blogsData}></MobileBlogs>
                <GradientButton text='View More Articles'></GradientButton>
            </div>
            <div className='pt-[4.7rem] pb-[3.75rem] bg-cover text-center' style={{backgroundImage: `url(${ModuleBg.src})`}}>
                <Title4 className='mobile:text-left px-4' text="Some Of The Many Builders We Compare"></Title4>
                <Grid className="grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 max-w-[67.25rem] mt-[1.875rem] mx-auto gap-3 px-4">
                    {BuilderCompare.map((v: any) => {
                        return (
                            <div className='bg-white rounded-xl' key={v.id}>
                                <Image className='mx-auto' src={v.src} alt={v.id} priority />
                            </div>
                        )
                    })}
                </Grid >
            </div>
        </Main>
    )
}
