import footerNavData from 'data/footer/footerNav';
import footerNavData1 from 'data/footer/footerNav1';
import paymentMethodData from 'data/footer/payment';
import socialData from 'data/social';
import Link from 'next/link';
import { NavCol } from './NavCol/NavCol';
import styled from 'styled-components';
import {MdLocationPin} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {IoIosMail} from "react-icons/io";

export const Footer = () => {
  const footerLogo = '/DermaestheticsAssests/1 Homepage/Footer/Logo.png';

  const footerNav = [...footerNavData];
  const footerNavPopular = [...footerNavData1];
  const footerSocial = [...socialData];
  const paymentMethods = [...paymentMethodData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className='footer'>
        <div className='wrapper'>
          <div className='footer-top'>
            <div className='footer-top__social'>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-top__logo'>
              <Link href='/'>
                <a>
                  <LogoImage src={'http://meeraki.com/public/uploads/all/tu5tXvefF7hjJzjpsLCmBgTh3UbUoCTFuRREpF5U.png'} alt='' id="footerlogo" />
                </a>
              </Link>
            </div>

            {/* Payment method */}
            <div className='footer-top__payments'>
              <ul>
                {paymentMethods.map((payment, index) => (
                  <li key={index}>
                    <img src={payment.icon} className='js-img' alt='' />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='footer-nav'>
          <div className='footer-nav__col'>
              <span className='footer-nav__col-title'>About</span>
              <p style={{color:"#868585"}}>Meeraki is a fashion brand created especially for young and
                  lively youth. It consists of a hardworking and enthusiastic
                  group of people.</p>
              </div>
            {/* Footer Nav */}
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
            {footerNavPopular.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
          </div>
          <div className='footer-copy'>
            <span>Copyright &copy; 2023 Meeraki. Developed by</span>
            &nbsp;<a href="https://thedatech.com" target="_blank" style={{ color: "#ED7014" }}>
                  <b>DA Tech</b>
            </a>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};

const LogoImage=styled.img({
  width:"100%",
  height:"4rem"
})