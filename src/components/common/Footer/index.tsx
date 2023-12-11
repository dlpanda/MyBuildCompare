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
            <div className='message body-text'>
                <span></span>
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
