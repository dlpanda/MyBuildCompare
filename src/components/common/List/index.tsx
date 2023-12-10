import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
import Facebook from '@/assets/index/facebook.png'
import Instagram from '@/assets/index/instagram.png'
import Pinterest from '@/assets/index/pinterest.png'
type ListProps = {
    items: any,
};
export default function List(props: ListProps) {
    return (
        <div className='text-base body-888888 '>
            {props.items.map((v: any) => {
                return (<div key={v.title}>{v.title}</div>)
            })}
        </div>
    )
}
