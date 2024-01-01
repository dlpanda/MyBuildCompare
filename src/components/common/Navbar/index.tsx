import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type NavbarProps = PropsWithChildren<{
    logoUrl: string | StaticImageData;
}>;

export default function Navbar({ logoUrl, children }: NavbarProps) {
    return (
        <div className="box-border relative	h-20 px-20 mobile:px-2">
            <div className="absolute top-5">
                <Link href="/">
                    <Image
                        src={logoUrl}
                        alt="Logo"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>
            </div>
            {children}
        </div>
    );
}
