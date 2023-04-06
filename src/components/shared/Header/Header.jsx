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
            <span><a><CiFacebook className='social-head-icon'/></a><a><FaInstagram className='social-head-icon'/></a><a><TiSocialTwitterCircular className='social-head-icon' style={{fontSize:"1.5rem"}}/></a><a><TiSocialLinkedinCircular className='social-head-icon' style={{fontSize:"1.5rem"}}/></a></span>
            <span><RiStarFill className='headerstars mx-1' style={{fontSize:"1rem"}}/>Trustpilot<span><RiStarFill className='headerstars'/><RiStarFill className='headerstars'/><RiStarFill className='headerstars'/><RiStarFill className='headerstars'/><RiStarHalfFill className='headerstars'/></span></span>
            <i
              className='header-top-close js-header-top-close'
            >
              <button id="requestbtnheader1"><FaPhoneAlt className='mx-3'/>Book Now</button>
              <button id="requestbtnheader"><FaPhoneAlt/>Request a call</button>
            </i>
          </div>
        <div className={`header-content ${fixedNav ? 'fixed' : ''}`}>
          <div className='header-logo'>
            <Link href='/'>
              <a>
                <img src={header.logo} alt='' className='mb-2' />
              </a>
            </Link>
          </div>
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
