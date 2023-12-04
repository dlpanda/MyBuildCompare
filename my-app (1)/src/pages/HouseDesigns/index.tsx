import Image from 'next/image'
import Link from "next/link"
// 图片
import Logo from '../../assets/index/logo.png'
import SearchBlack from '../../assets/icon/search-black.png'
import SearchGrey from '../../assets/icon/search-grey.png'
import CofingPNG from '../../assets/icon/cofing.png'
import HeartPNG from '../../assets/icon/heart.png'
import House from '../../assets/houseDesigns/house.png'
import HouseNext from '../../assets/houseDesigns/house-next.png'
import HouseAbove from '../../assets/houseDesigns/house-above.png'
import Facebook from '../../assets/index/facebook.png'
import Instagram from '../../assets/index/instagram.png'
import Pinterest from '../../assets/index/pinterest.png'
import ItemLogo from '../../assets/houseDesigns/item-logo.png'
import ItemImg from '../../assets/houseDesigns/item-img.png'
import Blogs3 from '../../assets/index/houseDesigns/blogs-3.png'
import Blogs4 from '../../assets/index/houseDesigns/blogs-4.png'
import '../../style/houseDesigns.css'
import '../../style/common.css'
import '../../style/color.css'

export default function Home() {
    let searchValue = 'Search Category 1...'
    let search = 'Search'
    return (
        <main className='index dark-grey'>
            <div className='navbar'>
                <div className='logo'>
                    <Link href="/"><Image src={Logo} alt="Logo" width={120} height={40} priority /></Link>
                </div>
                <div className='menu'>
                    <div className='menu-item'><Link href="/home">House Designs</Link></div>
                    <div className='menu-item'>Your stories</div>
                    <div className='menu-item'>Resource Centre</div>
                    <div className='menu-item'>Builders Directory</div>
                    <div className='menu-item'>Contact</div>
                    <div className='search-item'>
                        <input className='grey' type="text" defaultValue={searchValue} />
                        <Image src={SearchGrey} alt="SearchGrey" width={15} height={15} priority />
                    </div>
                </div>
            </div>
            <div className='search-items dark-grey'>
                <div className='item'>
                    <Image src={House} alt="House" width={29} height={24} priority />
                    <p>Single-Storey</p>
                </div>
                <div className='item'>
                    <Image src={HouseNext} alt="HouseNext" width={27} height={24} priority />
                    <p>Double-Storey</p>
                </div>
                <div className='item'>
                    <Image src={HouseAbove} alt="HouseAbove" width={27} height={24} priority />
                    <p>Duplex</p>
                </div>
                <div className='search-item'>
                    <Image src={SearchBlack} alt="SearchBlack" width={20} height={20} priority />
                    <input className='grey' type="text" defaultValue={search} />
                </div>
                <div className='filters'>
                    <Image src={CofingPNG} alt="CofingPNG" width={20} height={17.5} priority />
                    <p>Filters</p>
                </div>
            </div>
            <div className='house-list'>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
                <div className='house-item'>
                    <Image className='house-img' src={ItemImg} alt="ItemImg" width={323} height={285} priority />
                    <Image className='logo' src={ItemLogo} alt="ItemLogo" width={100} height={30} priority />
                    <div className='heart'>
                        <Image src={HeartPNG} alt="HeartPNG" width={24} height={20} priority />
                    </div>
                    <div className='info'>
                        <p className='body-3D3D3D-bold'>Name</p>
                        <p className='body-6E6E6E'>Bed, bath, Garage, Squares</p>
                    </div>
                    <div className='user underlined-links'>
                        More Details
                    </div>
                </div>
            </div>
            <div className='continuing title-6-3D3D3D'>Continuing Exploring</div>
            <div className='show-more button blue-green-gradient'>Show More</div>
            <footer>
                <div className='content'>
                    <div className='items'>
                        <p className='title dark-grey'>Quick Links</p>
                        <p className='body-888888'>Quick Links1</p>
                        <p className='body-888888'>Quick Links1</p>
                        <p className='body-888888'>Quick Links1</p>
                        <p className='title dark-grey'>Resources</p>
                        <p className='body-888888'>Category 1</p>
                        <p className='body-888888'>Category 2</p>
                        <p className='body-888888'>Category 3</p>
                    </div>
                    <div className='items'>
                        <p className='title dark-grey'>Designs By room</p>
                        <p className='body-888888'>3 Bedroom Home Designs</p>
                        <p className='body-888888'>4 Bedroom Home Designs</p>
                        <p className='body-888888'>5 Bedroom Home Designs</p>
                        <p className='title dark-grey'>Level Sites</p>
                        <p className='body-888888'>All Level Site Home Designs</p>
                        <p className='body-888888'>Single Storey Home Designs</p>
                        <p className='body-888888'>Two Storey Home Designs</p>
                    </div>
                    <div className='items'>
                        <p className='title dark-grey'>Designs By Must-Haves</p>
                        <p className='body-888888'>Alfresco</p>
                        <p className='body-888888'>Must-Have 2</p>
                        <p className='body-888888'>Must-Have 3</p>
                        <p className='title dark-grey'>Designs By Features</p>
                        <p className='body-888888'>Popular feature 1</p>
                        <p className='body-888888'>Popular feature 2</p>
                        <p className='body-888888'>Popular feature 3</p>
                    </div>
                </div>
                <div className='message body-888888'>
                    <span>© 2023 My Build Compare</span>
                    <span>All rights reserveds</span>
                    <span>privacy policy</span>
                    <span>terms & conditions</span>
                    <div>
                        <Image src={Instagram} alt="Blogs3" width={30} height={30} priority />
                        <Image src={Facebook} alt="Blogs3" width={30} height={30} priority />
                        <Image src={Pinterest} alt="Blogs3" width={30} height={30} priority />
                    </div>
                </div>
            </footer>
        </main>
    )
}
