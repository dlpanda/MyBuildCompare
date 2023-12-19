import Image from 'next/image'
import house from '@/assets/icon/select-icon.png'
type SelectProps = {
    text: string,
};
export default function Select(props: SelectProps) {
    return (
        <div className='flex text-center border text-[#3D3D3D] h-12 leading-[3rem] rounded-md font-[500]'>
            <div className='w-[calc(100%-30px)]'>{props.text}</div>
            <div className='w-[30px]'>
                <Image
                    className='relative top-[50%] mt-[-4px]'
                    src={house} alt="icon"
                    width={14}
                    height={8}
                    priority />
            </div>
        </div>
    )
}
