import Image from 'next/image'
import Link from "next/link"
// 图片
import Logo from '../assets/index/logo.png'
import SearchGrey from '../assets/icon/search-grey.png'
import '../style/index.css'

export default function headerMenu() {
    return (
        <main className='index dark-grey'>
            <div className='navbar'>
                <div className='logo'>
                    <Image src={Logo} alt="Logo" width={120} height={40} priority />
                </div>
                <div className='menu'>
                    <div className='menu-item'><Link href="/HouseDesigns">House Designs</Link></div>
                    <div className='menu-item'>Your Stories</div>
                    <div className='menu-item'>Resource Centre</div>
                    <div className='menu-item'>Builders Directory</div>
                    <div className='menu-item'>Contact</div>
                    <div className='search-item'>
                        <input className='grey' type="text" defaultValue={searchValue} placeholder='Search Category 2...'/>
                        <Image src={SearchGrey} alt="SearchGrey" width={15} height={15} priority />
                    </div>
                </div>
            </div>
        </main>
    )
}
