import { header } from 'data/data.header';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Nav } from './Nav/Nav';
import { navItem } from 'data/data.header';
import { CartContext } from 'pages/_app';
import {RiStarFill,RiStarHalfFill} from "react-icons/ri"
import {FaPhoneAlt,FaInstagram} from "react-icons/fa";
import {CiFacebook} from "react-icons/ci";
import {TiSocialLinkedinCircular,TiSocialTwitterCircular} from "react-icons/ti"
import {HiMenuAlt3} from "react-icons/hi";
import { useRouter } from 'next/router';

export const Header = () => {
  const { cart,wishlist} = useContext(CartContext);
  const [fixedNav, setFixedNav] = useState(false);
  const [mobileMenu,setMobileMenu]=useState(false);
  const router = useRouter();
  // For Fixed nav
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  const trogglebtn=()=>{
    if(mobileMenu===false){
      setMobileMenu(true);
    }else{
      setMobileMenu(false);
    }
   }
  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header className='header-destop'>
          <div className='header-destop-top'>
          <div className="top-line-meer">
      <div id="shopify-section-custom-ticker" className="shopify-section">
        <div
          className="h__top bgbl pt__10 pb__10 fs__12 flex fl_center al_center"
          data="data-2"
        >
          <div className="container-fluid bounce">
            <div className="text-wrapper">
              <p className="animate-charcter">🌎 FREE Delivery Nationwide 🌎</p>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        <div className={`header-destop-content ${fixedNav ? 'fixed' : ''}`}>
        <Link href="/"><img src={header.logo} alt='' className='mb-2 logomeeraki' /></Link>
          <div className='header-destop-box'>
            {/* Nav */}
            <Nav navItem={navItem} />
            {/* header options */}
            <ul className='header-destop-options'>
              <li>
                <Link href='/profile'>
                  <a>
                    <i className='icon-user'></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/wishlist'>
                  <a>
                    <i className='icon-heart'></i>
                    {wishlist && wishlist.length===0?"":<span>{wishlist.length}</span>}                    
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                  <a>
                    <i className='icon-cart'></i>
                    {cart.length===0?"":<span>{cart.length ?? '0'}</span>}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header> 

      <header className='header-mobile'>
      <div className='header-mobile-top'>
          <div className="top-line-meer">
      <div id="shopify-section-custom-ticker" className="shopify-section">
        <div
          className="h__top bgbl pt__10 pb__10 fs__12 flex fl_center al_center"
          data="data-2"
        >
          <div className="container-fluid bounce">
            <div className="text-wrapper">
              <p className="animate-charcter">🌎 FREE Delivery Nationwide 🌎</p>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
      <div className={`header-mobile-content ${fixedNav ? 'fixed' : ''}`}>
      <Link href="/"><img src={header.logo} alt='' className='mb-2 logomeeraki' /></Link>
      <button className='header-mobile-btnmenu' onClick={trogglebtn}><HiMenuAlt3/></button>
      </div>
      {mobileMenu && <ul className='header-mobile-nav'>
        {navItem.map((nav)=>{
         return(
          <li key={nav.path+nav.name}><Link href={`/subcategory/${nav.name}`}>
          <a className={nav.path === router.pathname ? 'active' : ''}>{nav.name}</a></Link></li> 
         )
        })}
      </ul>}
      </header>
      {/* <!-- HEADER EOF   --> */}
    </>
  );
};
