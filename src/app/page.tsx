import Image from 'next/image'
import Link from "next/link"
// 图片
import Logo from '../assets/index/logo.png'
import SearchGrey from '../assets/icon/search-grey.png'
import Search from '../assets/icon/search.png'
import SearchGreen from '../assets/icon/search-green.png'
import ContactGreen from '../assets/icon/contact-green.png'
import HammerGreen from '../assets/icon/hammer-green.png'
import Facebook from '../assets/index/facebook.png'
import Instagram from '../assets/index/instagram.png'
import Pinterest from '../assets/index/pinterest.png'
import Blogs1 from '../assets/index/blogs-1.png'
import Blogs2 from '../assets/index/blogs-2.png'
import Blogs3 from '../assets/index/blogs-3.png'
import Blogs4 from '../assets/index/blogs-4.png'
import '../style/index.css'

export default function Home() {
    let searchValue = 'Search Category 1...'
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
                        <input className='grey' type="text" defaultValue={searchValue} />
                        <Image src={SearchGrey} alt="SearchGrey" width={15} height={15} priority />
                    </div>
                </div>
            </div>
            <div className='banner'>
                <div className='title'>Search. Compare. Build.</div>
                <div className='search'>
                    <div className='option bold'>House Design</div>
                    <div className='vertical-lines'>&nbsp;</div>
                    <div className='option bold'>Filters</div>
                    <div className='vertical-lines'>&nbsp;</div>
                    <div className='option'>Search Location</div>
                    <div className='round-icon-button blue-green-gradient'>
                        <Image src={Search} alt="Search" width={16} height={16} priority />
                    </div>
                </div>
            </div>
            <div className='slider'>
                <div className='title title-4'>
                    Start Your Journey Here
                </div>
                <div className='arrow'>
                    <div className='left-arrow'></div>
                    <div className='right-arrow'></div>
                </div>
                <div className='scroll-content'>
                    <div className='content dark-grey semi-bold'>
                        <div className='slider-item'>
                            <p>Single-Storey</p>
                        </div>
                        <div className='slider-item'>
                            <p>Double-Storey</p>
                        </div>
                        <div className='slider-item'>
                            <p>Duplex</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how-it-works'>
                <div className='title title-4'>
                    How It Works</div>
                <div className='items'>
                    <div className='item'>
                        <Image src={SearchGreen} alt="SearchGreen" width={40} height={40} priority />
                        <p className='body-888888'>
                            01
                        </p>
                        <div className='content title-6-3D3D3D'>
                            Find The Ideal Home
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={ContactGreen} alt="ContactGreen" width={40} height={40} priority />
                        <p className='body-888888'>
                            03
                        </p>
                        <div className='content title-6-3D3D3D'>
                            Compare Builders
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={HammerGreen} alt="HammerGreen" width={40} height={40} priority />
                        <p className='body-888888'>
                            04
                        </p>
                        <div className='content title-6-3D3D3D'>
                            Build Your Dream Home
                        </div>
                    </div>
                </div>
                <div className='button green-gradient'>
                    Connect With Right Builder
                </div>
            </div>
            <div className='blogs-articles'>
                <div className='title-4'>
                    Blogs And Articles
                </div>
                <div className='items'>
                    <div className='item'>
                        <Image src={Blogs1} alt="Blogs1" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6-3D3D3D'>
                                4 Common Floor Plan Mistakes!
                            </p>
                            <p className='body-888888'>
                                Written By <span className='underlined-links'>Mel Davies</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={Blogs2} alt="Blogs2" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6-3D3D3D'>
                                Don Not Fall For Fke Base Prices And Avoid The Price Hike!
                            </p>
                            <p className='body-888888'>
                                Written By <span className='underlined-links'>Mel Davies</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={Blogs3} alt="Blogs3" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6-3D3D3D'>
                                When Is The Best Time To Start Building My New Home?
                            </p>
                            <p className='body-888888'>
                                Written By <span className='underlined-links'>Kathy Schoonenberg</span>
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <Image src={Blogs4} alt="Blogs4" width={323} height={233} priority />
                        <div className='content'>
                            <p className='title-6-3D3D3D'>
                                What Stamp Duty Concessions And Exemptions Are Available For New Homes In NSW?
                            </p>
                            <p className='body-888888'>
                                Written By <span className='underlined-links'>Mel Davies</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='button green-gradient'>
                    View More Articles
                </div>
            </div>
            <div className='other-builders'>
                <div className='title title-4'>
                    Some Of The Many Builders We Compare
                </div>
                <div className='items'>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
            </div>
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
