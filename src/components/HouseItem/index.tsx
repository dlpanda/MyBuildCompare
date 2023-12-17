
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import heart from '@/assets/icon/heart.png'
import CommonCarousel from '@/components/common/CommonCarousel';
import BodyTextGreyBold from '@/components/common/Text/BodyTextGreyBold'
import BodyTextLight from '@/components/common/Text/BodyTextLight'
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks'
type HouseItemProps = {
    logoSrc: StaticImageData,
    isCollect: string,
    carouselImgSrc: [],
    title: string,
    text: string,
    author: string,
};
export default function HouseItem(props: HouseItemProps) {
    return (
        <div className='relative'>
            <Image
                className=''
                src={props.logoSrc} alt="icon"
                width={100}
                height={50}
                priority />
            <div className='bg-white z-10 absolute top-[0.625rem] right-[0.625rem] w-[50px] h-[50px] py-[15px] px-[13px] rounded-full border border-[#EFEFEF]'>
                <Image
                    src={heart} alt="icon"
                    width={24}
                    height={20}
                    priority />
            </div>
            <CommonCarousel
                autoPlay={false}
            >{
                props.carouselImgSrc.map((item: any,index: any) => {
                    return <div className='w-full' key={index}>
                        <Image src={item.src} alt="carouselImg" width={323} height={333} priority />
                    </div>
                })
            }</CommonCarousel>
            <Link href='/IndividualHouseDesigns'><BodyTextGreyBold className="mt-[20px]" text={props.title}></BodyTextGreyBold></Link>
            <BodyTextLight text={props.text}></BodyTextLight>
            <UnderLinedLinks className="mt-[10px]" text={props.author}></UnderLinedLinks>
        </div>
    )
}
