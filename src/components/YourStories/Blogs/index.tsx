import Image, { StaticImageData } from 'next/image'
type BlogsProps = {
    className?:string,
    dataList: any,
};
export default function Blogs(props: BlogsProps) {
    return (
        <div className={`grid grid-cols-2 gap-10 my-10 ${props.className}`}>
            {props.dataList.map((v: any) => {
                return (
                    <div key={v.id} className='flex tablet:flex-col mobile:block'>
                        <div className='flex-1'>
                            <Image className="rounded-[0.75rem] w-full" src={v.imgSrc} alt="icon" priority />
                        </div>
                        <div className='w-2/3 pl-4 pr-20 tablet:w-full mobile:w-full mobile:pl-0 tablet:pl-0 mobile:pr-0 tablet:pr-0'>
                            <p className='title-6'>{v.title}</p>
                            <p className='body-text tablet:pt-2 mobile:pt-2'>{v.date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
