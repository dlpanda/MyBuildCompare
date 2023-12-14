
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image'
type ButtonProps = {
    className?: string,
    text: string,
    textClassName?:string,
};
export default function Button(props: ButtonProps) {
    return (
        <div className={`px-5 border border-[#D1D1D1] rounded-[5.625rem] button-box-shadow cursor-pointer ${props.className}`}>
            <div className={`${props.textClassName}`}>
                {props.text}
            </div>
        </div>
    )
}
