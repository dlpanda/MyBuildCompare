import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';
import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { DataList } from '@/utils/DataList';
import Link from 'next/link';
// 组件
import Title2 from '@/components/common/Title/Title2';
import Title3 from '@/components/common/Title/Title3';
import Title4 from '@/components/common/Title/Title4';
import Title6 from '@/components/common/Title/Title6';
import ButtonOnImg from '@/components/common/Button/ButtonOnImg';
import Button from '@/components/common/Button/Button';
import Grid from '@/components/common/Grid';
import Form from '@/components/IndividualBuilder/Form';
import BodyText from '@/components/common/Text/BodyText';
import BodyTextLight from '@/components/common/Text/BodyTextLight';
import Gap from '@/components/common/Gap';
import GradientButton from '@/components/common/Button/GradientButton';
import HouseItem from '@/components/HouseItem';
import Blogs from '@/components/YourStories/Blogs';
// 图片
import MainPNG from '@/assets/your-stroies/main.png';
import Blogs1 from '@/assets/your-stroies/story1.png';
import Blogs2 from '@/assets/your-stroies/story2.png';
import img1 from '@/assets/your-stroies/1.png';
import img2 from '@/assets/your-stroies/2.png';
import img3 from '@/assets/your-stroies/3.png';
import img4 from '@/assets/your-stroies/4.png';
import img5 from '@/assets/your-stroies/5.png';
import img6 from '@/assets/your-stroies/6.png';
import '@/styles/common.css';
import '@/styles/color.css';

export default function HouseDesigns() {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div className="px-[8rem]">
        <Gap className="mobile:hidden" size={50}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
        <BodyText
          className="hidden tablet:block mobile:block"
          text="November 6, 2023"
        ></BodyText>
        <Title3
          className="desktop:px-[418px]"
          text="Daniel's brand new investment home"
        ></Title3>
        <Gap size={10}></Gap>
        <BodyTextLight
          className="desktop:px-[418px] tablet:hidden mobile:hidden"
          text="Date Published • Time to Read"
        ></BodyTextLight>
        <Gap className="mobile:hidden tablet:hidden" size={40}></Gap>
        <Title6
          className="desktop:px-[418px] tablet:hidden mobile:hidden"
          text="Key Takeaways"
        ></Title6>
        <Gap className="mobile:hidden tablet:hidden" size={20}></Gap>
        <BodyTextLight
          className="desktop:px-[418px] tablet:hidden mobile:hidden"
          text="• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        ></BodyTextLight>
        <Gap className="mobile:hidden tablet:hidden" size={20}></Gap>
        <BodyTextLight
          className="desktop:px-[418px] tablet:hidden mobile:hidden"
          text="• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        ></BodyTextLight>
        <Gap className="mobile:hidden tablet:hidden" size={75}></Gap>
        <Gap className="hidden tablet:block" size={40}></Gap>
        <Gap className="hidden mobile:block" size={20}></Gap>
        <Image className="w-[100%]" src={MainPNG} alt="img" priority />
        <Gap className="mobile:hidden" size={75}></Gap>
        <Gap className="hidden tablet:block" size={40}></Gap>
        <Gap className="hidden mobile:block" size={20}></Gap>
        <BodyTextLight
          className="desktop:px-[418px]"
          text="Daniel is in the process of building his brand new investment home at Edmondson Park. He now shares his experience and thoughts on the process to date. The good, the bad and the ugly."
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text="We interviewed Daniel about his current build at Edmondson Park. Daniel works in the world of finance so he knows a thing or two about money and investing. We get the inside tips of investing in new home builds and find out his story."
        ></BodyTextLight>
        <Gap className="mobile:hidden" size={75}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
        <Title4
          className="desktop:px-[418px]"
          text="What made you decide to buy and tell us a little bit of the process?"
        ></Title4>
        <Gap size={20}></Gap>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`It was the year 2015 and I was in the market of buying an investment property. The idea of building a new home appealed to me from a cash flow perspective (as the land was unregistered which meant settlement was delayed for some time). I also knew that there was going to be some significant tax benefits for me once the house was built and rented (in the form of depreciation). At that time, Sydney house prices had already had a decent run and I was a bit skeptical as to how much value was actually left. In fact, I was "umming and ahhing" as to whether I should proceed or not. The prices were as high as $1,100 per m2!! It was absolutely crazy but looking back, it was still cheap in the scheme of things - compared to the prices now!`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`Aside from the good fundamentals of the new estate (future town centre, new schools (primary and secondary), new train station and easy access to M5 and M7), the sheer volume of interest in the new estate was overwhelming. The developer (UrbanGrowth NSW) had a priority number system which was on a first in first served basis. Depending on how quickly you clicked on a link, you would then be allocated a priority number. I still remember getting number "58" and there was only 55 lots for sale in that release. I didn't like my chances but I decided to rock up anyways to see what all the hype was about.`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`I arrived at my allocated time and boy was the sales office packed. There must have been over 300+ people waiting there. The sales person said that they had over 1000 clicks on the website for a priority number. Getting 58 seemed pretty good - even though there was no guarantee.`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`As the priority numbers approached 50, the lots available slowly diminished on the sale board with only a handful of lots left which did not have a "sold" sticker on them. What I soon realized though was that my chances of picking up a lot (even though it would probably be a lot no one else wanted) was growing ever so slightly. Each time the sales person called out a number and no one had claimed it, the little person inside me was "YESSS!!! *fist pump*. A bit like the picture below.`}
        ></BodyTextLight>
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
        <BodyTextLight
          className="desktop:px-[418px]"
          text={'Slowly but surely, I was getting closer to getting a lot.'}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`I must admit, the sales staff were brutal. There was no mercy for the late. I recall one couple arriving the same time that I did but must have not heard their number being called out. As the sales staff progressed to the following number the couple approached the sales staff saying that they had missed their number. The sales staff simply said "No, it is too late." Not even a single "sorry" was given. Yeah, it was their own fault but you couldn't help feeling sorry for the guys. In saying this, another one had bit the dust *fist pump again*.`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`After an excruciating 3 hours, they called up "58". With only 3 blocks left, I did it. I got the chance to buy a block.`}
        ></BodyTextLight>
        <Gap className="mobile:hidden" size={75}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
        <Title4
          className="desktop:px-[418px]"
          text="What type of block did you end up buying?"
        ></Title4>
        <Gap size={20}></Gap>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`The block of land was only 250m2 and the cost was $270,000. I didn't even know they could build houses on such a small block. I called up my brother who works as a lawyer and asked for some free legal advice. He has a lot of builder clients which was handy. After a quick call, I had the green light to go ahead. I paid the $300.00 administration fee and the rest is history.`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`Registration of the land took 15 months which was a little longer than expected but it worked out well for me. During this time, Sydney house prices kept sky rocketing. By the time I settled the land, my bank had valued the land to be worth $320,000. An instant $50,000 in equity. Kaching! Winning.`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`Here is a picture of my block. Doesn't look like much for a quarter of a million dollars - but I am grateful that I got one. If you look closely, it is the tiny one in the middle between those 2 fence posts.`}
        ></BodyTextLight>
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
        <Title4
          className="desktop:px-[418px]"
          text="What sort of design did you end up doing?"
        ></Title4>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`Below is the floor plan for the house. It was a custom design as the block was so small. This was the biggest hurdle in trying to maximise the use of the land.`}
        ></BodyTextLight>
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
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`There are 4 bedrooms upstairs including a sitting area. Another bedroom/study downstairs with a separate sitting room as you enter the house. The "feng shei" was not the best as the chi could enter the front door and exit the back, so I had to introduce a sliding door near the garage to keep all the good chi in the house. By all means, I am no expert in feng shei but this was recommended by my mum, so I did it.`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`The backyard is tiny but who needs a backyard when you are surrounding by facilities and parks?`}
        ></BodyTextLight>
        <Gap className="mobile:hidden" size={75}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
        <Title4
          className="desktop:px-[418px]"
          text="How long was the build process?"
        ></Title4>
        <Gap size={20}></Gap>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`The house has been in construction for a little over 6 months (which included the "shutdown" period over Christmas) so we are not going too bad on time. The builder has told me that we are on the home stretch and the house should be complete in the next few weeks. Once complete, I am going to rent the house out. As I had mentioned briefly, one of the best deductions (besides negative gearing) is depreciation. If you are an investor who has just built a new home, you should get a depreciation report for the property. The cost of $500 for the report will save you thousands and thousands in deductions and tax.`}
        ></BodyTextLight>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`Here are some pictures of the build process which you may like.`}
        ></BodyTextLight>
        <Gap className="mobile:hidden" size={40}></Gap>
        <Gap className="hidden mobile:block" size={20}></Gap>
        <ButtonOnImg className="desktop:px-[418px] relative" imgSrc={img5}>
          <Link className="absolute bottom-[30px] right-[448px]" href="/Album">
            <Button
              className=" bg-white body-text-grey-bold py-2"
              text="Show All Photos"
            ></Button>
          </Link>
        </ButtonOnImg>
        <Gap className="mobile:hidden" size={75}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
        <Title4
          className="desktop:px-[418px]"
          text="So let's talk about the financials. What were the numbers?"
        ></Title4>
        <BodyTextLight
          className="desktop:px-[418px]"
          text={`The cost of my build was $305,000. There was an additional $25,000 in upgrades/extras (such as raised ceilings, down lights, etc). As the block was so small, my main goal was to make the house as big as possible. With the land cost being $270,000, my total cost to buy and build was around $600,000. If you look at realestate.com.au, the average house price in Edmondson Park is around $700,000 and $750,000 (conservatively). Putting aside interest cost and what not, I am looking at up to $150,000 in equity, which I will then use for my next project.`}
        ></BodyTextLight>
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
        <Title2 text="Building your new home?"></Title2>
        <Gap className="mobile:hidden" size={40}></Gap>
        <Gap className="hidden mobile:block" size={20}></Gap>
        <GradientButton
          text="Share your story with us"
          className="blue-green-gradient"
        ></GradientButton>
        <Gap className="mobile:hidden" size={75}></Gap>
        <Gap className="hidden mobile:block" size={40}></Gap>
      </div>
    </Main>
  );
}
