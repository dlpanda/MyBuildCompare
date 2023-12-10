import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
type NavbarProps = {
    logoUrl: string | StaticImageData,
    menuTemplate: any,
};
export default function Navbar(props: NavbarProps) {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link href="/"><Image src={props.logoUrl} alt="Logo" width={120} height={40} priority /></Link>
            </div>
            {props.menuTemplate}
        </div>
    )
}
