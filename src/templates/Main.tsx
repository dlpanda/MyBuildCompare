import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import type { ReactNode } from 'react';
import '@/styles/common.css'
import '@/styles/color.css'
import '@/styles/index.css'
// 图片
import Logo from '../assets/index/logo.png'
import SearchGrey from '../assets/icon/search-grey.png'
import Facebook from '../assets/index/facebook.png'
import Instagram from '../assets/index/instagram.png'
import Pinterest from '../assets/index/pinterest.png'
type IMainProps = {
    meta?: ReactNode;
    children: ReactNode;
};

export default function Main(props: IMainProps) {
    const [searchValue, setsearchValue] = useState('');
    return (
        <div className='index'>
            {props.meta}
            <div className='navbar'>
                <div className='logo'>
                    <Image src={Logo} alt="Logo" width={120} height={40} priority />
                </div>
                <div className='menu'>
                    <div className='menu-item'><Link href="/HouseDesigns">House Designs</Link></div>
                    <div className='menu-item'>Your Stories</div>
                    <div className='menu-item'>Resource Centre</div>
                    <div className='menu-item'>Builders Directory</div>
                    <div className='menu-item'>Contact</div>
                    <div className='search-item'>
                        <input className='grey' type="text" value={searchValue} placeholder='Search Category 2...' onChange={e => {
                            setsearchValue(e.target.value);
                        }} />
                        <Image src={SearchGrey} alt="SearchGrey" width={15} height={15} priority />
                    </div>
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
