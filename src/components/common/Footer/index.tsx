import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
import Facebook from '@/assets/index/facebook.png'
import Instagram from '@/assets/index/instagram.png'
import Pinterest from '@/assets/index/pinterest.png'
import { ReactNode } from 'react';
type FooterProps = {
    contentTemplate: any,
    children: ReactNode;
};
export default function Footer(props: FooterProps) {
    return (
        <footer>
            {props.contentTemplate}
            {/* <div className='content'>
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
            </div> */}
            <div className='message body-888888'>
                <span>e</span>
                <span></span>
                <span></span>
                <span></span>
                <div>
                    <Image src={Instagram} alt="Blogs3" width={30} height={30} priority />
                    <Image src={Facebook} alt="Blogs3" width={30} height={30} priority />
                    <Image src={Pinterest} alt="Blogs3" width={30} height={30} priority />
                </div>
            </div>
        </footer>
    )
}
