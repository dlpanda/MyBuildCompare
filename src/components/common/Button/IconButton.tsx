
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image'
type IconButtonVerticalProps = {
    className?: string,
    text: string,
    iconSrc: string | StaticImageData,
    iconWidth: number,
    iconHeight: number,
};
export default function ButtonIconVertical(props: IconButtonVerticalProps) {
    return (
        <div className={`flex gap-4 items-center px-5 border border-[#D1D1D1] rounded-[5.625rem] button-box-shadow ${props.className}`}>
            <Image className='' style={{height:props.iconHeight+'px',width:props.iconWidth+'px'}} src={props.iconSrc} alt="icon" width={props.iconWidth} height={props.iconHeight} priority />
            <div className='' style={{height:props.iconHeight+'px', lineHeight: props.iconHeight+'px'}}>
                {props.text}
            </div>
        </div>
    )
}
