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

export const Header = () => {
  const { cart } = useContext(CartContext);
  const [fixedNav, setFixedNav] = useState(false);

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
  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header className='header'>
          <div className='header-top'>
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
        <div className={`header-content ${fixedNav ? 'fixed' : ''}`}>
        <Link href="/"><img src={header.logo} alt='' className='mb-2 logomeeraki' /></Link>
          <div className='header-box'>
            {/* Nav */}
            <Nav navItem={navItem} />
            {/* header options */}
            <ul className='header-options'>
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
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                  <a>
                    <i className='icon-cart'></i>
                    <span>{cart.length ?? '0'}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='btn-menu js-btn-menu'>
            {[1, 2, 3].map((i) => (
              <span key={i}>&nbsp;</span>
            ))}
          </div>
        </div>
      </header>

      {/* <!-- HEADER EOF   --> */}
    </>
  );
};
