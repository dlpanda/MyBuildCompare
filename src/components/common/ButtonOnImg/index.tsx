
import Image, { StaticImageData } from 'next/image'
import type { ReactNode } from 'react';
type ButtonOnImgProps = {
    className?: string,
    imgSrc: string | StaticImageData,
    children: ReactNode;
};
export default function ButtonimgVertical(props: ButtonOnImgProps) {
    return (
        <div className={`relative ${props.className}`}>
            <Image className='w-full' src={props.imgSrc} alt="img" width={1352} height={560} priority />
            {props.children}
        </div>
    )
}
