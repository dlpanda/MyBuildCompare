import Image from 'next/image'
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
import Link from "next/link"
// 组件
import UnderLinedLinks from '@/components/common/Text/UnderLinedLinks';
import Title3 from '@/components/common/Title/Title3';
import Title4 from '@/components/common/Title/Title4';
import Title6 from '@/components/common/Title/Title6';
import ButtonOnImg from '@/components/common/Button/ButtonOnImg';
import Button from '@/components/common/Button/Button';
import Grid from '@/components/common/Grid';
import Form from '@/components/IndividualBuilder/Form';
import BodyText from '@/components/common/Text/BodyText';
import BodyTextGreyBold from '@/components/common/Text/BodyTextGreyBold';
import BodyTextLight from '@/components/common/Text/BodyTextLight';
import Gap from '@/components/common/Gap';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
import Blogs from '@/components/YourStories/Blogs';
// 图片
import itemPNG from '@/assets/resource-centre/item.png'
import MainPNG from '@/assets/resource-centre/detail.png'
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
            <div className='px-[8rem] mobile:px-[2rem]'>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title3 className='desktop:px-[418px]' text="5 Tips For Anyone Constructing a New Home"></Title3>
                <Gap size={10}></Gap>
                <BodyText className='desktop:px-[418px]' text="Written by Alex Morrison · Time to read · Category "></BodyText>
                <Gap className='mobile:hidden' size={40}></Gap>
                <Gap className='hidden mobile:block' size={20}></Gap>
                <BodyTextGreyBold className='desktop:px-[418px]' text="Key Takeaways"></BodyTextGreyBold>
                <Gap size={20}></Gap>
                <BodyText className='desktop:px-[418px]' text="• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"></BodyText>
                <Gap size={20}></Gap>
                <BodyText className='desktop:px-[418px]' text="• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"></BodyText>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Image className='w-[100%]' src={MainPNG} alt="img" priority />
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <BodyText className='desktop:px-[418px]' text={`Getting it right the first time is crucial when building a new home because you obviously can’t do a trial version. There’s no question that building a home is a major undertaking and one of the most joyous decisions that you’ll ever make. It can also be full of pressure and trepidation along with the happiness and excitement. The main thing is being fully prepared, even though nobody can control the weather or the chain of events that finally see the delivery of building materials and components on time. You obviously don’t want to be making grave mistakes when building your dream home, so here are five tips that will help keep you informed on your adventure:`}></BodyText>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text='1. Meticulous Planning'></Title4>
                <Gap size={20}></Gap>
                <BodyText className='desktop:px-[418px]' text={`"Once you’ve embarked on your project, a blizzard of decisions will come your way every day. To keep everything running as smoothly as possible, you need to make sure you have a clear idea of everything you want in your new home. Having an idea of what you want will ease any stress and confusion when you’re forced to make a decision. Think about such things as which direction the building will face, how many power points you want and make sure your designer, draftsperson or architect knows exactly what you want with regard to the layout and the lighting, e.g. Consider the interior design among a host of other factors. Get a good grasp of local council requirements and building codes.`}></BodyText>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text='2. Assemble the Right Team'></Title4><Gap size={20}></Gap>
                <BodyText className='desktop:px-[418px]' text={`The most important part of your home building project will be which contractors or builders you choose to hire to do the work on your home. Therefore, getting that part right from the very start will pay dividends further down the track. Fortunately, the team at myBuildcompare can help you here. It’s time well spent speaking to one of our new home building specialists. Always check on your builder’s credentials; get references and ask for a portfolio or samples of their past work. Talk to homeowners who have used them before, and consider the builder’s personality - can you work with a person such as that? A good builder might even take you on a tour to other sites the team has completed. Always check their fees and get a lawyer to read the contract before you sign.`}></BodyText>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text='3. Take Care With Your Budget'></Title4><Gap size={20}></Gap>
                <BodyText className='desktop:px-[418px]' text={`The sad truth is that most building projects go over their budget and cost more than anyone originally expected, no matter what size or style of construction. Building contractors usually don’t factor in the cost of fencing and gates, window dressing, gas and electrical meters or NBN hookups. This is apart from any cost and build-time blowouts for things such as unforeseen circumstances, the weather and material scarcity so you need to budget for all of the above. You might change your mind about a structural element or fittings once they’ve been installed and there’s no guarantee some repair or other issues won’t crop up.`}></BodyText>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text='4. Look For Ways to Save Money'></Title4><Gap size={20}></Gap>
                <BodyText className='desktop:px-[418px]' text={`The sad truth is that most building projects go over their budget and cost more than anyone originally expected, no matter what size or style of construction. Building contractors usually don’t factor in the cost of fencing and gates, window dressing, gas and electrical meters or NBN hookups. This is apart from any cost and build-time blowouts for things such as unforeseen circumstances, the weather and material scarcity so you need to budget for all of the above. You might change your mind about a structural element or fittings once they’ve been installed and there’s no guarantee some repair or other issues won’t crop up.`}></BodyText>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
                <Title4 className='desktop:px-[418px]' text='5. Actively Take Part in the Building Process'></Title4><Gap size={20}></Gap>
                <BodyText className='desktop:px-[418px]' text={`The sad truth is that most building projects go over their budget and cost more than anyone originally expected, no matter what size or style of construction. Building contractors usually don’t factor in the cost of fencing and gates, window dressing, gas and electrical meters or NBN hookups. This is apart from any cost and build-time blowouts for things such as unforeseen circumstances, the weather and material scarcity so you need to budget for all of the above. You might change your mind about a structural element or fittings once they’ve been installed and there’s no guarantee some repair or other issues won’t crop up.`}></BodyText>
                <Gap className='mobile:hidden' size={75}></Gap>
                <Gap className='hidden mobile:block' size={40}></Gap>
            </div>
            <div className='bg-[#F9FCFC] px-[8.75rem]  mobile:px-[2rem]'>
                <Gap className='tablet:hidden mobile:hidden' size={75}></Gap>
                <Gap className='hidden tablet:block mobile:block' size={40}></Gap>
                <Title4 text='Categories'></Title4>
                <Gap className='mobile:hidden' size={20}></Gap>
                <Grid className="grid-cols-4 gap-x-[20px] gap-y-[40px] tablet:grid mobile:grid tablet:grid-cols-2 mobile:grid-cols-1">
                    {new Array(4).fill("").map((v: any, i: number) => {
                        return (
                            <div key={i}>
                                <Image className="rounded-[0.75rem] w-full" src={itemPNG} alt="icon" priority />
                                <Link href='/IndivdualStory'>
                                    <Title6 text="How to make your space a beautiful place on a budget!"></Title6>
                                </Link>
                                <BodyText className='inline-block' text="Written By"></BodyText>
                                <UnderLinedLinks className='inline-block ml-2' text="Mel Davies"></UnderLinedLinks>
                            </div>
                        )
                    })}
                </Grid>
                <Gap size={40}></Gap>
                <GradientButton text='View more Resources'></GradientButton>
                <Gap className='tablet:hidden mobile:hidden' size={75}></Gap>
                <Gap className='hidden tablet:block mobile:block' size={40}></Gap>
            </div>
        </Main>
    )
}
