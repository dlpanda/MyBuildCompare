import Image from 'next/image'
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
import Link from "next/link"
// 组件
import Title2 from '@/components/common/Title/Title2';
import Title3 from '@/components/common/Title/Title3';
import Title4 from '@/components/common/Title/Title4';
import Title6 from '@/components/common/Title/Title6';
import Grid from '@/components/common/Grid';
import Form from '@/components/IndividualBuilder/Form';
import BodyText from '@/components/common/Text/BodyText';
import BodyTextLight from '@/components/common/Text/BodyTextLight';
import Gap from '@/components/common/Gap';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
import Blogs from '@/components/YourStories/Blogs';
// 图片
import MainPNG from '@/assets/your-stroies/main.png'
import Blogs1 from '@/assets/your-stroies/story1.png'
import Blogs2 from '@/assets/your-stroies/story2.png'
import '@/styles/common.css'
import '@/styles/color.css'

export default function HouseDesigns() {
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
            <div className='px-[8rem]'>
                <Gap className='mobile:hidden' size={50}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <BodyText className='hidden tablet:block mobile:block' text="November 6, 2023"></BodyText>
                <Title3 className='desktop:px-[418px]' text="Daniel's brand new investment home"></Title3>
                <Gap size={10}></Gap>
                <BodyTextLight className='desktop:px-[418px] tablet:hidden mobile:hidden' text="Date Published • Time to Read"></BodyTextLight>
                <Gap className='mobile:hidden tablet:hidden' size={40}></Gap>
                <Title6 className='desktop:px-[418px] tablet:hidden mobile:hidden' text="Key Takeaways"></Title6>
                <Gap className='mobile:hidden tablet:hidden' size={20}></Gap>
                <BodyTextLight className='desktop:px-[418px] tablet:hidden mobile:hidden' text="• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"></BodyTextLight>
                <Gap className='mobile:hidden tablet:hidden' size={20}></Gap>
                <BodyTextLight className='desktop:px-[418px] tablet:hidden mobile:hidden' text="• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"></BodyTextLight>
                <Gap className='mobile:hidden tablet:hidden' size={75}></Gap>
                <Gap className='hidden tablet:block' size={40}></Gap>
                <Gap className='hidden mobile:block' size={20}></Gap>
                <Image className='w-[100%]' src={MainPNG} alt="img" priority />
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden tablet:block' size={40}></Gap>
                <Gap className='hidden mobile:block' size={20}></Gap>
                <BodyTextLight className='desktop:px-[418px]' text="Daniel is in the process of building his brand new investment home at Edmondson Park. He now shares his experience and thoughts on the process to date. The good, the bad and the ugly."></BodyTextLight>
                <BodyTextLight className='desktop:px-[418px]' text="We interviewed Daniel about his current build at Edmondson Park. Daniel works in the world of finance so he knows a thing or two about money and investing. We get the inside tips of investing in new home builds and find out his story."></BodyTextLight>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text="What made you decide to buy and tell us a little bit of the process?"></Title4>
                <Gap size={20}></Gap>
                <BodyTextLight className='desktop:px-[418px]' text={`As the priority numbers approached 50, the lots available slowly diminished on the sale board with only a handful of lots left which did not have a "sold" sticker on them. What I soon realized though was that my chances of picking up a lot (even though it would probably be a lot no one else wanted) was growing ever so slightly. Each time the sales person called out a number and no one had claimed it, the little person inside me was "YESSS!!! *fist pump*. A bit like the picture below.`}></BodyTextLight>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text="What made you decide to buy and tell us a little bit of the process?"></Title4>
                <Gap size={20}></Gap>
                <BodyTextLight className='desktop:px-[418px]' text={`As the priority numbers approached 50, the lots available slowly diminished on the sale board with only a handful of lots left which did not have a "sold" sticker on them. What I soon realized though was that my chances of picking up a lot (even though it would probably be a lot no one else wanted) was growing ever so slightly. Each time the sales person called out a number and no one had claimed it, the little person inside me was "YESSS!!! *fist pump*. A bit like the picture below.`}></BodyTextLight>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Image className='desktop:px-[418px] w-[100%]' src={Blogs1} alt="img" priority />
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text="What made you decide to buy and tell us a little bit of the process?"></Title4>
                <Gap size={20}></Gap>
                <BodyTextLight className='desktop:px-[418px]' text={`As the priority numbers approached 50, the lots available slowly diminished on the sale board with only a handful of lots left which did not have a "sold" sticker on them. What I soon realized though was that my chances of picking up a lot (even though it would probably be a lot no one else wanted) was growing ever so slightly. Each time the sales person called out a number and no one had claimed it, the little person inside me was "YESSS!!! *fist pump*. A bit like the picture below.`}></BodyTextLight>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
            </div>
            <div className="bg-cover bg-[url('../assets/index/module-bg.png')] text-center">
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title2 text="Building your new home?"></Title2>
                <Gap className='mobile:hidden' size={40}></Gap>
                <Gap className='hidden mobile:block' size={20}></Gap>
                <GradientButton text='Share your story with us' className="blue-green-gradient"></GradientButton>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
            </div>
        </Main>
    )
}
