import Image from 'next/image'
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
import Link from 'next/link';
// 组件
import Title4 from '@/components/common/Title/Title4';
import Title6 from '@/components/common/Title/Title6';
import Grid from '@/components/common/Grid';
import CommonCarousel from '@/components/common/CommonCarousel';
import BodyTextGreyBold from '@/components/common/Text/BodyTextGreyBold';
import Gap from '@/components/common/Gap';
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks'
import Select from '@/components/common/Select'
import IconVerticalButton from '@/components/common/Button/IconVerticalButton';
import CheckBox from '@/components/common/CheckBox';

import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
import Popup from '@/components/common/Popup';
// 图片
import AwardsPNG from '@/assets/individual-builder/awards.png'
import '@/styles/common.css'
import '@/styles/color.css'

export default function HouseDesigns() {
    const houseList = JSON.parse(JSON.stringify(DataList)).splice(0, 3)
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description} />
            }
        >
            <div className='px-[15rem] mobile:px-2'>
                <Gap size={50}></Gap>
                <Title4 className='text-center' text="Compare house Designs"></Title4>
                <Gap size={50}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={i === 2 && 'tablet:hidden mobile:hidden' || ''}>
                                <Select text={v.type}></Select>
                                <Gap size={40}></Gap>
                                <CommonCarousel
                                    autoPlay={false}
                                >{
                                        v.carouselImgSrc.map((item: any, index: any) => {
                                            return (
                                                <div className='w-full' key={index}>
                                                    <Image src={item.src} alt="carouselImg" width={323} height={333} priority />
                                                </div>
                                            )
                                        })
                                    }
                                </CommonCarousel>
                                <Gap size={40}></Gap>
                                <Image
                                    className='button-box-shadow w-[200px] h-[70px]'
                                    src={v.logoSrc} alt="icon"
                                    priority />

                                <Gap size={20}></Gap>
                                <BodyTextGreyBold text={v.title}></BodyTextGreyBold>
                                <Gap size={20}></Gap>
                                <Link href='/IndividualHouseDesigns'>
                                    <UnderLinedLinks text={v.author}></UnderLinedLinks>
                                </Link>
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={75}></Gap>
                <Title6 text="Quick Look"></Title6>
                <Gap size={40}></Gap>
                <Gap size={40}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={i === 2 && 'tablet:hidden mobile:hidden' || ''}>
                                {v.quickLook.map((quick: any, qi: number) => {
                                    return (
                                        <div key={qi}>
                                            <IconVerticalButton className='text-center' iconSrc={quick.icon} iconWidth={33} iconHeight={30} text={quick.num + ' ' + quick.name}></IconVerticalButton>
                                            <Gap className={qi === 3 && 'hidden' || ''} size={40}></Gap>
                                        </div>
                                    )
                                })}

                            </div>
                        )
                    })}
                </Grid>
                <Gap size={75}></Gap>
                <Title6 text="Floor Plans"></Title6>
                <Gap size={40}></Gap>
                <Gap size={40}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] gap-y-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <Image
                                key={i}
                                className={`button-box-shadow w-full ${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}
                                src={v.floorImg} alt="icon"
                                priority />
                        )
                    })}
                </Grid>
                <Gap size={75}></Gap>
                <Title6 text="Inclusions"></Title6>
                <Gap size={40}></Gap>
                <Gap size={40}></Gap>
                <BodyTextGreyBold text={'Must Haves'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || i}`}>
                                {new Array(20).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px] ${ii === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                            <CheckBox text='Alfresco' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <BodyTextGreyBold text={'External Features'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                {new Array(16).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px]`}>
                                            <CheckBox text='Termite Treated Timber' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <BodyTextGreyBold text={'Internal Features'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                {new Array(5).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px] ${ii === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                            <CheckBox text='Flooring' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <BodyTextGreyBold text={'Kitchen Features'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                {new Array(5).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px] ${ii === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                            <CheckBox text='Overhead Cupboards' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <BodyTextGreyBold text={'Kitchen Appliances'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                {new Array(5).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px] ${ii === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                            <CheckBox text='Oven' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <BodyTextGreyBold text={'Bathroom/En-suite Features'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                {new Array(6).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px] ${ii === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                            <CheckBox text='Floor to ceiling tiles' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <BodyTextGreyBold text={'Electrical/Gas Features'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                {new Array(12).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px] ${ii === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                            <CheckBox text='Ducted Air-conditioning' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={20}></Gap>
                <BodyTextGreyBold text={'Miscellaneous'}></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <Grid className="grid-cols-3 gap-x-[20px] tablet:grid-cols-2 mobile:grid-cols-2">
                    {houseList.map((v: any, i: number) => {
                        return (
                            <div key={i} className={`${i === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                {new Array(2).fill('').map((vv: any, ii: number) => {
                                    return (
                                        <div key={ii} className={`mb-[20px] ${ii === 2 && 'tablet:hidden mobile:hidden' || ''}`}>
                                            <CheckBox text='Interim Occupation Certificate' isChecked={true}></CheckBox>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Grid>

            </div>
        </Main>
    )
}
