
import Image, { StaticImageData } from 'next/image'
import Gap from '@/components/common/Gap';
type SearchItemProps = {
    icon: any,
    iconWidth: number,
    iconHeight: number,
    text: string,
    isAcitve: boolean,
    onClick: any,
};
export default function SearchItem(props: SearchItemProps) {
    const { isAcitve = false } = props
    return (
        <div onClick={props.onClick} className={`cursor-pointer font-semibold p-[1.25rem] w-[10rem] h-[7.5rem] border border-[#D1D1D1] rounded-[12px] text-[#3D3D3D] ${isAcitve ? 'bg-[#3D3D3D] !text-white' : ''}`}>
            <Image className={`${isAcitve ? 'white-filter' : ''}`} src={props.icon} alt="img" width={props.iconWidth} height={props.iconHeight} priority />
            <Gap size={40}></Gap>
            <div className='text-[1rem]'>
                {props.text}
            </div>
        </div>
    )
}
