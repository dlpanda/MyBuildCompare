// TODO value change?
import house from '@/assets/icon/select-icon.png';
import Image from 'next/image';

type SelectProps = {
    label: string;
};

export default function Select({ label }: SelectProps) {
    return (
        <div className="flex text-center border text-[#3D3D3D] h-12 leading-[3rem] rounded-md font-[500]">
            <div className="w-[calc(100%-30px)]">{label}</div>
            <div className="w-[30px]">
                <Image
                    className="relative top-[50%] mt-[-4px]"
                    src={house}
                    alt="icon"
                    width={14}
                    height={8}
                    priority
                />
            </div>
        </div>
    );
}
