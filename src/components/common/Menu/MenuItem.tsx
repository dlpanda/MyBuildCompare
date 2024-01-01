import Link from 'next/link';
import { PropsWithChildren } from 'react';

export type MenuItemType = { name: string; href: string };

type MenuItemProps = PropsWithChildren<{
    data: MenuItemType;
}>;

export default function MenuItem({ data }: MenuItemProps) {
    return (
        <Link href={data.href}>
            <div
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
                {data.name}
            </div>
        </Link>
    );
}
