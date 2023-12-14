import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react';
import MenuIcon from '@/assets/icon/menu-icon.png'
type MenuProps = {
    menuList: Array<any>,
    children: ReactNode;
};
export default function Menu(props: MenuProps) {
    return (
        <div>
            <div className='h-full leading-[5rem] absolute right-0'>
                {props.menuList.map(v => {
                    return (
                        <div
                            key={v.name}
                            className='
                                menu-item
                                cursor-pointer 
                                inline-block 
                                mr-8
                                // hover:after:content-[""]
                                // hover:after:mt-[-1.5rem]
                                // hover:after:block
                                // hover:after:bg-#3D3D3D
                                // hover:after:h-0.5
                                // hover:after:w-full
                            '>
                            <Link href={v.href}>{v.name}</Link>
                        </div>
                    )
                })}
                {props.children}
                {/* <Menu clickSearch={getSearchValue}></Menu> */}
            </div>
            <div className='menu-btn'>
                <Image src={MenuIcon} alt="MenuIcon" width={30} height={20} priority />
            </div>
        </div>
    )
}
