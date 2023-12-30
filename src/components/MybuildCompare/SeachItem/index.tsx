import Gap from '@/components/common/Gap';
import Image, { StaticImageData } from 'next/image';

// reflecting changes?
type SearchItemProps = {
    icon: StaticImageData;
    iconWidth: number;
    iconHeight: number;
    text: string;
    isAcitve: boolean;
    onClick: () => void;
};

export default function SearchItem({
    icon,
    iconWidth,
    iconHeight,
    text,
    onClick,
    isAcitve = false,
}: SearchItemProps) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer font-semibold p-[1.25rem] w-[10rem] h-[7.5rem] border border-[#D1D1D1] rounded-[12px] text-[#3D3D3D] ${
                isAcitve ? 'bg-[#3D3D3D] !text-white' : ''
            }`}
        >
            <Image
                className={`${isAcitve ? 'white-filter' : ''}`}
                src={icon}
                alt="img"
                width={iconWidth}
                height={iconHeight}
                priority
            />
            <Gap size={40} mobileSize={15}></Gap>
            <div className="text-[1rem]">{text}</div>
        </div>
    );
}
