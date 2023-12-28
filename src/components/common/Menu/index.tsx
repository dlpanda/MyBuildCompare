import MenuIcon from '@/assets/icon/menu-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type MenuItem = { name: string; href: string };

// extends item types
type MenuProps = {
  menuList: Array<MenuItem>;
  children: ReactNode;
};

export default function Menu(props: MenuProps) {
  return (
    <div>
      <div className="h-full leading-[5rem] absolute right-[5rem] tablet:hidden mobile:hidden">
        {props.menuList.map((v) => {
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
                            '
            >
              <Link href={v.href}>{v.name}</Link>
            </div>
          );
        })}
        {props.children}
        {/* <Menu clickSearch={getSearchValue}></Menu> */}
      </div>
      <div className="menu-btn absolute right-2 top-8 hidden tablet:block tablet:right-20 mobile:block">
        <Image src={MenuIcon} alt="MenuIcon" width={30} height={20} priority />
      </div>
    </div>
  );
}
