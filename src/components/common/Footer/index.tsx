import Image from 'next/image'
import Facebook from '@/assets/index/facebook.png'
import Instagram from '@/assets/index/instagram.png'
import Pinterest from '@/assets/index/pinterest.png'
type FooterProps = {
    contentTemplate: any,
    messageData:any,
};
export default function Footer(props: FooterProps) {
    return (
        <footer className='px-20 bg-[#F9FCFC]'>
            {props.contentTemplate}
            <div className='h-[4.375rem] leading-[4.375rem] body-text'>
                {props.messageData.map((v:any)=>{
                    return (
                        <span className='mr-5' key={v.text}>{v.text}</span>
                    )
                })}
                <div className='flex mt-[1.25rem] float-right gap-[0.625rem]'>
                    <Image src={Instagram} alt="Blogs3" width={30} height={30} priority />
                    <Image src={Facebook} alt="Blogs3" width={30} height={30} priority />
                    <Image src={Pinterest} alt="Blogs3" width={30} height={30} priority />
                </div>
            </div>
        </footer>
    )
}
