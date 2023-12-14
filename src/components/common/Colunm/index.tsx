import Image, { StaticImageData } from 'next/image'
import Title6 from '@/components/common/Title/Title6';
import BodyText from '@/components/common/Text/BodyText';
type ColunmProps = {
    dataList: any,
};
export default function Colunm(props: ColunmProps) {
    return (
        <div className="mx-auto mt-[2.5rem] w-[45rem] flex gap-[2.5rem] text-left">
            {props.dataList.map((v:any) => {
                return (
                    <div key={v.id} className="h-[15.75rem] flex basis-1/3 flex-col border border-[#D9D9D9] rounded-[0.375rem] p-[1.25rem]">
                        <div className='flex-1'>
                            <Image src={v.iconSrc} alt="img" className="icon"></Image>
                        </div>
                        <BodyText text={v.id}></BodyText>
                        <Title6 text={v.text}></Title6><div></div>
                    </div>
                )
            })}
        </div>
    )
}
