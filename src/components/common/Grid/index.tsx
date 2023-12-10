import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
import Facebook from '@/assets/index/facebook.png'
import Instagram from '@/assets/index/instagram.png'
import Pinterest from '@/assets/index/pinterest.png'
import { ReactNode } from 'react';
type GridProps = {
    items: any,
    children: ReactNode;
};
export default function Grid(props: GridProps) {
    return (
        <div className='grid grid-cols-3 '>
            {props.children}
        </div>
    )
}
