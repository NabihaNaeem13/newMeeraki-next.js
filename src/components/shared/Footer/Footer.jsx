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
                  <LogoImage src={footerLogo} alt='' id="footerlogo" />
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
              <p style={{color:"#868585"}}>With over 10 years of experience in aesthetics and beauty,Dermaesthetics Clinic is a highly professional results driven clinic. We offer a wide range of skin care treatments and facial and body aesthetics procedures,using the latest technology available and advanced products. We have invested in high quality,regulated and proven specialist equipment to deliver safe, effective results.  </p>
              </div>
            {/* Footer Nav */}
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
            <div className='footer-nav__col'>
              <span className='footer-nav__col-title'>Contact us</span>
              <ul>
                <li className='mt-2' style={{color:"#868585"}}>
                  <i style={{fontSize:"1.5rem",color:"#868585"}}><MdLocationPin/></i> First Floor, 100 Alpha House, Borough High Street,London SE11LB
                </li>
                <li className='mt-2'>
                  <div className='footer-nav__col-phones'>
                  <i style={{fontSize:"1.5rem",color:"#868585"}}><BsFillTelephoneFill/></i><a href='tel:+1207 509 6415'>0207 509 6415</a>
                  </div>
                </li>
                <li className='mt-2'>
                  <i style={{fontSize:"1.5rem",color:"#868585"}}><IoIosMail/></i>
                  <a href='mailto:info@Dermaesthetics.uk'>info@Dermaesthetics.uk</a>
                </li>
              </ul>
            </div>
            {footerNavPopular.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
          </div>
          <div className='footer-copy'>
            <span>Dermaesthetics Clinic Copyright &copy; 2023</span>
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