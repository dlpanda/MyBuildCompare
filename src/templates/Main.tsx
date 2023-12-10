import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import type { ReactNode } from 'react';
import '@/styles/common.css'
import '@/styles/color.css'
import '@/styles/index.css'
// 组件
import SearchItem from '@/components/index/SearchItem';
// 图片
import Logo from '../assets/index/logo.png'
import MenuIcon from '@/assets/icon/menu-icon.png'
import Facebook from '../assets/index/facebook.png'
import Instagram from '../assets/index/instagram.png'
import Pinterest from '../assets/index/pinterest.png'
type IMainProps = {
    meta?: ReactNode;
    children: ReactNode;
};

export default function Main(props: IMainProps) {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log("searchValue：" + value)
        setsearchValue(value)
    }
    return (
        <div className='index'>
            {props.meta}
            <div className='navbar'>
                <div className='logo'>
                    <Link href="/"><Image src={Logo} alt="Logo" width={120} height={40} priority /></Link>
                </div>
                <div className='menu'>
                    <div className='menu-item'><Link href="/HouseDesigns">House Designs</Link></div>
                    <div className='menu-item'>Your Stories</div>
                    <div className='menu-item'>Resource Centre</div>
                    <div className='menu-item'>Builders Directory</div>
                    <div className='menu-item'>Contact</div>
                    <SearchItem clickSearch={getSearchValue}></SearchItem>
                </div>
                <div className='menu-btn'>
                    <Image src={MenuIcon} alt="MenuIcon" width={30} height={20} priority />
                </div>
            </div>
            {props.children}
            <footer>
                <div className='content'>
                    <div className='items'>
                        <p className='title dark-grey'>Quick Links</p>
                        <p className='body-888888'>Quick Links1</p>
                        <p className='body-888888'>Quick Links1</p>
                        <p className='body-888888'>Quick Links1</p>
                    </div>
                    <div className='items'>
                        <p className='title dark-grey'>Resources</p>
                        <p className='body-888888'>Category 1</p>
                        <p className='body-888888'>Category 2</p>
                        <p className='body-888888'>Category 3</p>
                    </div>
                    <div className='items'>
                        <p className='title dark-grey'>Designs By room</p>
                        <p className='body-888888'>3 Bedroom Home Designs</p>
                        <p className='body-888888'>4 Bedroom Home Designs</p>
                        <p className='body-888888'>5 Bedroom Home Designs</p>
                    </div>
                    <div className='items'>
                        <p className='title dark-grey'>Level Sites</p>
                        <p className='body-888888'>All Level Site Home Designs</p>
                        <p className='body-888888'>Single Storey Home Designs</p>
                        <p className='body-888888'>Two Storey Home Designs</p>
                    </div>
                    <div className='items'>
                        <p className='title dark-grey'>Designs By Must-Haves</p>
                        <p className='body-888888'>Alfresco</p>
                        <p className='body-888888'>Must-Have 2</p>
                        <p className='body-888888'>Must-Have 3</p>
                    </div>
                    <div className='items'>
                        <p className='title dark-grey'>Designs By Features</p>
                        <p className='body-888888'>Popular feature 1</p>
                        <p className='body-888888'>Popular feature 2</p>
                        <p className='body-888888'>Popular feature 3</p>
                    </div>
                </div>
                <div className='message body-888888'>
                    <span>© 2023 My Build Compare</span>
                    <span>All rights reserveds</span>
                    <span>privacy policy</span>
                    <span>terms & conditions</span>
                    <div>
                        <Image src={Instagram} alt="Blogs3" width={30} height={30} priority />
                        <Image src={Facebook} alt="Blogs3" width={30} height={30} priority />
                        <Image src={Pinterest} alt="Blogs3" width={30} height={30} priority />
                    </div>
                </div>
            </footer>
        </div>
    )
}
