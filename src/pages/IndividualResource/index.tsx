import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';
import Link from 'next/link';
// 组件
import { Button, Gap, Grid, Text, Title } from '@/components/common';
// 图片
import MainPNG from '@/assets/resource-centre/detail.png';
import itemPNG from '@/assets/resource-centre/item.png';
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <div className="px-[8rem] mobile:px-[2rem]">
                <Gap size={75} mobileSize={40}></Gap>
                <Title variant="3" className="desktop:px-[418px]">
                    5 Tips For Anyone Constructing a New Home
                </Title>
                <Gap size={10}></Gap>
                <Text className="desktop:px-[418px]">
                    Written by Alex Morrison · Time to read · Category
                </Text>
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Text className="desktop:px-[418px]" variant="grey-bold">
                    Key Takeaways
                </Text>
                <Gap size={20}></Gap>
                <Text className="desktop:px-[418px]">
                    • Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                </Text>
                <Gap size={20}></Gap>
                <Text className="desktop:px-[418px]">
                    • Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                </Text>

                <Gap size={75} mobileSize={40}></Gap>
                <Image className="w-[100%]" src={MainPNG} alt="img" priority />

                <Gap size={75} mobileSize={40}></Gap>
                <Text className="desktop:px-[418px]">
                    Getting it right the first time is crucial when building a
                    new home because you obviously can&quot;t do a trial
                    version. There&quot;s no question that building a home is a
                    major undertaking and one of the most joyous decisions that
                    you&quot;ll ever make. It can also be full of pressure and
                    trepidation along with the happiness and excitement. The
                    main thing is being fully prepared, even though nobody can
                    control the weather or the chain of events that finally see
                    the delivery of building materials and components on time.
                    You obviously don&quot;t want to be making grave mistakes
                    when building your dream home, so here are five tips that
                    will help keep you informed on your adventure:
                </Text>

                <Gap size={75} mobileSize={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    1. Meticulous Planning
                </Title>
                <Gap size={20}></Gap>
                <Text className="desktop:px-[418px]">
                    &quot;Once you&quot;ve embarked on your project, a blizzard
                    of decisions will come your way every day. To keep
                    everything running as smoothly as possible, you need to make
                    sure you have a clear idea of everything you want in your
                    new home. Having an idea of what you want will ease any
                    stress and confusion when you&quot;re forced to make a
                    decision. Think about such things as which direction the
                    building will face, how many power points you want and make
                    sure your designer, draftsperson or architect knows exactly
                    what you want with regard to the layout and the lighting,
                    e.g. Consider the interior design among a host of other
                    factors. Get a good grasp of local council requirements and
                    building codes.
                </Text>
                <Gap size={75} mobileSize={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    2. Assemble the Right Team
                </Title>
                <Gap size={20}></Gap>
                <Text className="desktop:px-[418px]">
                    The most important part of your home building project will
                    be which contractors or builders you choose to hire to do
                    the work on your home. Therefore, getting that part right
                    from the very start will pay dividends further down the
                    track. Fortunately, the team at myBuildcompare can help you
                    here. It&quot;s time well spent speaking to one of our new
                    home building specialists. Always check on your
                    builder&quot;s credentials; get references and ask for a
                    portfolio or samples of their past work. Talk to homeowners
                    who have used them before, and consider the builder&quot;s
                    personality - can you work with a person such as that? A
                    good builder might even take you on a tour to other sites
                    the team has completed. Always check their fees and get a
                    lawyer to read the contract before you sign.
                </Text>

                <Gap size={75} mobileSize={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    3. Take Care With Your Budget
                </Title>
                <Gap size={20}></Gap>
                <Text className="desktop:px-[418px]">
                    The sad truth is that most building projects go over their
                    budget and cost more than anyone originally expected, no
                    matter what size or style of construction. Building
                    contractors usually don&quot;t factor in the cost of fencing
                    and gates, window dressing, gas and electrical meters or NBN
                    hookups. This is apart from any cost and build-time blowouts
                    for things such as unforeseen circumstances, the weather and
                    material scarcity so you need to budget for all of the
                    above. You might change your mind about a structural element
                    or fittings once they&quot;ve been installed and
                    there&quot;s no guarantee some repair or other issues
                    won&quot;t crop up.
                </Text>

                <Gap size={75} mobileSize={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    4. Look For Ways to Save Money
                </Title>
                <Gap size={20}></Gap>
                <Text className="desktop:px-[418px]">
                    The sad truth is that most building projects go over their
                    budget and cost more than anyone originally expected, no
                    matter what size or style of construction. Building
                    contractors usually don&quot;t factor in the cost of fencing
                    and gates, window dressing, gas and electrical meters or NBN
                    hookups. This is apart from any cost and build-time blowouts
                    for things such as unforeseen circumstances, the weather and
                    material scarcity so you need to budget for all of the
                    above. You might change your mind about a structural element
                    or fittings once they&quot;ve been installed and
                    there&quot;s no guarantee some repair or other issues
                    won&quot;t crop up.
                </Text>

                <Gap size={75} mobileSize={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    5. Actively Take Part in the Building Process
                </Title>
                <Gap size={20}></Gap>
                <Text className="desktop:px-[418px]">
                    The sad truth is that most building projects go over their
                    budget and cost more than anyone originally expected, no
                    matter what size or style of construction. Building
                    contractors usually don&quot;t factor in the cost of fencing
                    and gates, window dressing, gas and electrical meters or NBN
                    hookups. This is apart from any cost and build-time blowouts
                    for things such as unforeseen circumstances, the weather and
                    material scarcity so you need to budget for all of the
                    above. You might change your mind about a structural element
                    or fittings once they&quot;ve been installed and
                    there&quot;s no guarantee some repair or other issues
                    won&quot;t crop up.
                </Text>

                <Gap size={75} mobileSize={40}></Gap>
            </div>
            <div className="bg-[#F9FCFC] px-[8.75rem]  mobile:px-[2rem]">
                <Title variant="4">Categories</Title>
                <Gap className="mobile:hidden" size={20}></Gap>
                <Grid className="grid-cols-4 gap-x-[20px] gap-y-[40px] tablet:grid mobile:grid tablet:grid-cols-2 mobile:grid-cols-1">
                    {new Array(4).fill('').map((v, i: number) => {
                        return (
                            <div key={i}>
                                <Image
                                    className="rounded-[0.75rem] w-full"
                                    src={itemPNG}
                                    alt="icon"
                                    priority
                                />
                                <Link href="/IndivdualStory">
                                    <Title variant="6">
                                        How to make your space a beautiful place
                                        on a budget!
                                    </Title>
                                </Link>
                                <Text className="inline-block">Written By</Text>
                                <Text
                                    variant="underlined-links"
                                    className="inline-block ml-2"
                                >
                                    Mel Davies
                                </Text>
                            </div>
                        );
                    })}
                </Grid>
                <Gap size={40}></Gap>
                <Button className="green-gradient">View more Resources</Button>
                <Gap size={75} tabletSize={40} mobileSize={40}></Gap>
            </div>
        </Main>
    );
}
