import MenuIcon from '@/assets/icon/menu-icon.png';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import MenuItem, { MenuItemType } from './MenuItem';

type MenuProps = PropsWithChildren<{
    menuList: Array<MenuItemType>;
}>;

export default function Menu({ children, menuList }: MenuProps) {
    return (
        <div>
            <div className="h-full leading-[5rem] absolute right-[5rem] tablet:hidden mobile:hidden">
                {menuList.map((v, i) => {
                    return <MenuItem key={i} data={v}></MenuItem>;
                })}
                {children}
            </div>
            {/* 小屏菜单 */}
            <div className="menu-btn absolute right-2 top-8 hidden tablet:block tablet:right-20 mobile:block">
                <Image
                    src={MenuIcon}
                    alt="MenuIcon"
                    width={30}
                    height={20}
                    priority
                />
            </div>
        </div>
    );
}
