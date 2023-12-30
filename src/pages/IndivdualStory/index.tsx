import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';
import Link from 'next/link';
// 组件
import { Button, ButtonOnImg, Gap, Text, Title } from '@/components/common';
// 图片
import img1 from '@/assets/your-stroies/1.png';
import img2 from '@/assets/your-stroies/2.png';
import img3 from '@/assets/your-stroies/3.png';
import img4 from '@/assets/your-stroies/4.png';
import img5 from '@/assets/your-stroies/5.png';
import img6 from '@/assets/your-stroies/6.png';
import MainPNG from '@/assets/your-stroies/main.png';
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
            <div className="px-[8rem]">
                <Gap className="mobile:hidden" size={50}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Text className="hidden tablet:block mobile:block">
                    November 6, 2023
                </Text>

                <Title variant="3" className="desktop:px-[418px]">
                    Daniel&apos;s brand new investment home
                </Title>
                <Gap size={10}></Gap>
                <Text
                    variant="light"
                    className="desktop:px-[418px] tablet:hidden mobile:hidden"
                >
                    Date Published • Time to Read
                </Text>
                <Gap className="mobile:hidden tablet:hidden" size={40}></Gap>
                <Title
                    variant="6"
                    className="desktop:px-[418px] tablet:hidden mobile:hidden"
                >
                    Key Takeaways
                </Title>
                <Gap className="mobile:hidden tablet:hidden" size={20}></Gap>
                <Text
                    variant="light"
                    className="desktop:px-[418px] tablet:hidden mobile:hidden"
                >
                    • Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                </Text>
                <Gap className="mobile:hidden tablet:hidden" size={20}></Gap>
                <Text
                    variant="light"
                    className="desktop:px-[418px] tablet:hidden mobile:hidden"
                >
                    • Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                </Text>
                <Gap className="mobile:hidden tablet:hidden" size={75}></Gap>
                <Gap className="hidden tablet:block" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Image className="w-[100%]" src={MainPNG} alt="img" priority />
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden tablet:block" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Text variant="light" className="desktop:px-[418px]">
                    Daniel is in the process of building his brand new
                    investment home at Edmondson Park. He now shares his
                    experience and thoughts on the process to date. The good,
                    the bad and the ugly.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    We interviewed Daniel about his current build at Edmondson
                    Park. Daniel works in the world of finance so he knows a
                    thing or two about money and investing. We get the inside
                    tips of investing in new home builds and find out his story.
                </Text>
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    What made you decide to buy and tell us a little bit of the
                    process?
                </Title>
                <Gap size={20}></Gap>
                <Text variant="light" className="desktop:px-[418px]">
                    It was the year 2015 and I was in the market of buying an
                    investment property. The idea of building a new home
                    appealed to me from a cash flow perspective (as the land was
                    unregistered which meant settlement was delayed for some
                    time). I also knew that there was going to be some
                    significant tax benefits for me once the house was built and
                    rented (in the form of depreciation). At that time, Sydney
                    house prices had already had a decent run and I was a bit
                    skeptical as to how much value was actually left. In fact, I
                    was &quot;umming and ahhing&quot; as to whether I should
                    proceed or not. The prices were as high as $1,100 per m2!!
                    It was absolutely crazy but looking back, it was still cheap
                    in the scheme of things - compared to the prices now!
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    Aside from the good fundamentals of the new estate (future
                    town centre, new schools (primary and secondary), new train
                    station and easy access to M5 and M7), the sheer volume of
                    interest in the new estate was overwhelming. The developer
                    (UrbanGrowth NSW) had a priority number system which was on
                    a first in first served basis. Depending on how quickly you
                    clicked on a link, you would then be allocated a priority
                    number. I still remember getting number &quot;58&quot; and
                    there was only 55 lots for sale in that release. I
                    didn&quot;t like my chances but I decided to rock up anyways
                    to see what all the hype was about.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    I arrived at my allocated time and boy was the sales office
                    packed. There must have been over 300+ people waiting there.
                    The sales person said that they had over 1000 clicks on the
                    website for a priority number. Getting 58 seemed pretty good
                    - even though there was no guarantee.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    As the priority numbers approached 50, the lots available
                    slowly diminished on the sale board with only a handful of
                    lots left which did not have a &quot;sold&quot; sticker on
                    them. What I soon realized though was that my chances of
                    picking up a lot (even though it would probably be a lot no
                    one else wanted) was growing ever so slightly. Each time the
                    sales person called out a number and no one had claimed it,
                    the little person inside me was &quot;YESSS!!! *fist pump*.
                    A bit like the picture below.
                </Text>
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Image
                    className="desktop:px-[418px] w-[100%]"
                    src={img1}
                    alt="img"
                    priority
                />
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Text variant="light" className="desktop:px-[418px]">
                    It was the year 2015 and I was in the market of buying an
                    investment property. The idea of building a new home
                    appealed to me from a cash flow perspective (as the land was
                    unregistered which meant settlement was delayed for some
                    time). I also knew that there was going to be some
                    significant tax benefits for me once the house was built and
                    rented (in the form of depreciation). At that time, Sydney
                    house prices had already had a decent run and I was a bit
                    skeptical as to how much value was actually left. In fact, I
                    was &quot;umming and ahhing&quot; as to whether I should
                    proceed or not. The prices were as high as $1,100 per m2!!
                    It was absolutely crazy but looking back, it was still cheap
                    in the scheme of things - compared to the prices now!
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    Aside from the good fundamentals of the new estate (future
                    town centre, new schools (primary and secondary), new train
                    station and easy access to M5 and M7), the sheer volume of
                    interest in the new estate was overwhelming. The developer
                    (UrbanGrowth NSW) had a priority number system which was on
                    a first in first served basis. Depending on how quickly you
                    clicked on a link, you would then be allocated a priority
                    number. I still remember getting number &quot;58&quot; and
                    there was only 55 lots for sale in that release. I
                    didn&quot;t like my chances but I decided to rock up anyways
                    to see what all the hype was about.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    I arrived at my allocated time and boy was the sales office
                    packed. There must have been over 300+ people waiting there.
                    The sales person said that they had over 1000 clicks on the
                    website for a priority number. Getting 58 seemed pretty good
                    - even though there was no guarantee.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    As the priority numbers approached 50, the lots available
                    slowly diminished on the sale board with only a handful of
                    lots left which did not have a &quot;sold&quot; sticker on
                    them. What I soon realized though was that my chances of
                    picking up a lot (even though it would probably be a lot no
                    one else wanted) was growing ever so slightly. Each time the
                    sales person called out a number and no one had claimed it,
                    the little person inside me was &quot;YESSS!!! *fist pump*.
                    A bit like the picture below.
                </Text>
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    What type of block did you end up buying?
                </Title>
                <Gap size={20}></Gap>
                <Text variant="light" className="desktop:px-[418px]">
                    It was the year 2015 and I was in the market of buying an
                    investment property. The idea of building a new home
                    appealed to me from a cash flow perspective (as the land was
                    unregistered which meant settlement was delayed for some
                    time). I also knew that there was going to be some
                    significant tax benefits for me once the house was built and
                    rented (in the form of depreciation). At that time, Sydney
                    house prices had already had a decent run and I was a bit
                    skeptical as to how much value was actually left. In fact, I
                    was &quot;umming and ahhing&quot; as to whether I should
                    proceed or not. The prices were as high as $1,100 per m2!!
                    It was absolutely crazy but looking back, it was still cheap
                    in the scheme of things - compared to the prices now!
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    Aside from the good fundamentals of the new estate (future
                    town centre, new schools (primary and secondary), new train
                    station and easy access to M5 and M7), the sheer volume of
                    interest in the new estate was overwhelming. The developer
                    (UrbanGrowth NSW) had a priority number system which was on
                    a first in first served basis. Depending on how quickly you
                    clicked on a link, you would then be allocated a priority
                    number. I still remember getting number &quot;58&quot; and
                    there was only 55 lots for sale in that release. I
                    didn&quot;t like my chances but I decided to rock up anyways
                    to see what all the hype was about.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    I arrived at my allocated time and boy was the sales office
                    packed. There must have been over 300+ people waiting there.
                    The sales person said that they had over 1000 clicks on the
                    website for a priority number. Getting 58 seemed pretty good
                    - even though there was no guarantee.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    As the priority numbers approached 50, the lots available
                    slowly diminished on the sale board with only a handful of
                    lots left which did not have a &quot;sold&quot; sticker on
                    them. What I soon realized though was that my chances of
                    picking up a lot (even though it would probably be a lot no
                    one else wanted) was growing ever so slightly. Each time the
                    sales person called out a number and no one had claimed it,
                    the little person inside me was &quot;YESSS!!! *fist pump*.
                    A bit like the picture below.
                </Text>
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Image
                    className="desktop:px-[418px] w-[100%]"
                    src={img2}
                    alt="img"
                    priority
                />
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    What sort of design did you end up doing?
                </Title>
                <Text variant="light" className="desktop:px-[418px]">
                    It was the year 2015 and I was in the market of buying an
                    investment property. The idea of building a new home
                    appealed to me from a cash flow perspective (as the land was
                    unregistered which meant settlement was delayed for some
                    time). I also knew that there was going to be some
                    significant tax benefits for me once the house was built and
                    rented (in the form of depreciation). At that time, Sydney
                    house prices had already had a decent run and I was a bit
                    skeptical as to how much value was actually left. In fact, I
                    was &quot;umming and ahhing&quot; as to whether I should
                    proceed or not. The prices were as high as $1,100 per m2!!
                    It was absolutely crazy but looking back, it was still cheap
                    in the scheme of things - compared to the prices now!
                </Text>
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Image
                    className="desktop:px-[418px] w-[100%]"
                    src={img3}
                    alt="img"
                    priority
                />
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Image
                    className="desktop:px-[418px] w-[100%]"
                    src={img4}
                    alt="img"
                    priority
                />
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Text variant="light" className="desktop:px-[418px]">
                    Aside from the good fundamentals of the new estate (future
                    town centre, new schools (primary and secondary), new train
                    station and easy access to M5 and M7), the sheer volume of
                    interest in the new estate was overwhelming. The developer
                    (UrbanGrowth NSW) had a priority number system which was on
                    a first in first served basis. Depending on how quickly you
                    clicked on a link, you would then be allocated a priority
                    number. I still remember getting number &quot;58&quot; and
                    there was only 55 lots for sale in that release. I
                    didn&quot;t like my chances but I decided to rock up anyways
                    to see what all the hype was about.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    I arrived at my allocated time and boy was the sales office
                    packed. There must have been over 300+ people waiting there.
                    The sales person said that they had over 1000 clicks on the
                    website for a priority number. Getting 58 seemed pretty good
                    - even though there was no guarantee.
                </Text>
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    How long was the build process?
                </Title>
                <Gap size={20}></Gap>
                <Text variant="light" className="desktop:px-[418px]">
                    Aside from the good fundamentals of the new estate (future
                    town centre, new schools (primary and secondary), new train
                    station and easy access to M5 and M7), the sheer volume of
                    interest in the new estate was overwhelming. The developer
                    (UrbanGrowth NSW) had a priority number system which was on
                    a first in first served basis. Depending on how quickly you
                    clicked on a link, you would then be allocated a priority
                    number. I still remember getting number &quot;58&quot; and
                    there was only 55 lots for sale in that release. I
                    didn&quot;t like my chances but I decided to rock up anyways
                    to see what all the hype was about.
                </Text>
                <Text variant="light" className="desktop:px-[418px]">
                    I arrived at my allocated time and boy was the sales office
                    packed. There must have been over 300+ people waiting there.
                    The sales person said that they had over 1000 clicks on the
                    website for a priority number. Getting 58 seemed pretty good
                    - even though there was no guarantee.
                </Text>
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <ButtonOnImg
                    className="desktop:px-[418px] relative"
                    imgSrc={img5}
                >
                    <Link
                        className="absolute bottom-[30px] right-[448px]"
                        href="/Album"
                    >
                        <Button
                            className="bg-white"
                            textClassName="body-text-grey-bold"
                        >
                            Show All Photos
                        </Button>
                    </Link>
                </ButtonOnImg>
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Title variant="4" className="desktop:px-[418px]">
                    So let&apos;s talk about the financials. What were the
                    numbers?
                </Title>
                <Text variant="light" className="desktop:px-[418px]">
                    Aside from the good fundamentals of the new estate (future
                    town centre, new schools (primary and secondary), new train
                    station and easy access to M5 and M7), the sheer volume of
                    interest in the new estate was overwhelming. The developer
                    (UrbanGrowth NSW) had a priority number system which was on
                    a first in first served basis. Depending on how quickly you
                    clicked on a link, you would then be allocated a priority
                    number. I still remember getting number &quot;58&quot; and
                    there was only 55 lots for sale in that release. I
                    didn&quot;t like my chances but I decided to rock up anyways
                    to see what all the hype was about.
                </Text>
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Image
                    className="desktop:px-[418px] w-[100%]"
                    src={img6}
                    alt="img"
                    priority
                />
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
            </div>
            <div className="bg-cover bg-[url('../assets/index/module-bg.png')] text-center">
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
                <Title variant="2">Building your new home?</Title>
                <Gap className="mobile:hidden" size={40}></Gap>
                <Gap className="hidden mobile:block" size={20}></Gap>
                <Button className="blue-green-gradient">
                    Share your story with us
                </Button>
                <Gap className="mobile:hidden" size={75}></Gap>
                <Gap className="hidden mobile:block" size={40}></Gap>
            </div>
        </Main>
    );
}
