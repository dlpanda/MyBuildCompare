import Image, { StaticImageData } from 'next/image'
type ColunmProps = {
    dataList: any,
};
export default function Colunm(props: ColunmProps) {
    return (
        <div className="grid grid-cols-2 gap-10 my-10">
            {props.dataList.map((v: any) => {
                return (
                    <div key={v.id} className='flex'>
                        <div className='flex-1'>
                            <Image className="rounded-[0.75rem] w-full" src={v.imgSrc} alt="icon" priority />
                        </div>
                        <div  className='content w-1/2 pl-4'>
                            <p className='title-6'>{v.title}</p>
                            <p className='body-text'>Written By <span className='underlined-links'>{v.author}</span></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
