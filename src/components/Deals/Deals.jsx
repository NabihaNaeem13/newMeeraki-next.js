import Link from 'next/link';
import dealData from 'data/deals/deal.json';
import { useState } from 'react';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';

export const Deals = () => {
    const deals = [...dealData];
    const [active, setActive] = useState(-1);
    const handleCollapse = (item) => {
        if (item === active) {
          setActive(-1);
        } else {
          setActive(item);
        }
      };
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-about js-img'
        style={{ backgroundImage: `url('/DermaestheticsAssests/3 Deals/deals cover.png')`}}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <h2>Gift Cards</h2>
            <p style={{color:"#000"}}>
              Do you know someone who is deserving of a reward? If you give someone a gift card, It's like you're giving th
            </p>
            <p className='discount-info__sm'>
            </p>
            <Link href='/deal'>
              <a className='btn'>Get your gift</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks mt-4'>
        <div
          className='info-blocks__item js-img'
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <img
                src='/DermaestheticsAssests/3 Deals/Asset 7.png'
                className='js-img'
                alt=''
                style={{objectFit:"contain"}}
              />
            </div>
            <div className='info-blocks__item-text'>
              <h2 className="fs-2">beauty gift cards London</h2>
              <p>
                Our E-Gift cards are a quick and easy way to treat someone special. Just complete our online form and choose the desired amount or service. You can email the E-Gift card directly to your chosen recipient or you can email it to yourself, print it out and give it to them personally. 
              </p>
              <div className='d-flex'>
              <Link href='/shop'>
                <a className='btn' style={{background:"#000",color:"#fff",border:"1px solid #000"}}>
                  Buy Now
                </a>
              </Link>
              <img className='mt-5 mx-2' src="/DermaestheticsAssests/3 Deals/gift.png" style={{width:"4rem",height:"4rem"}}/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
      <div className='wrapper mt-5 mb-5'>
      <SectionTitle
        title="About Gift Cards"
        body="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,"
      />
      <div className='faq-items mt-4 mb-4'>
            {deals.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${active === index && 'active'}`}
              >
                <div
                  onClick={() => handleCollapse(index)}
                  className='faq-item__head'
                >
                  <span className='faq-item__head-num'>{index + 1}</span>
                  {faq.title}
                  <span className='faq-item__head-btn'></span>
                </div>
                <div
                  style={{ display: active === index && 'block' }}
                  className='faq-item__content'
                >
                  <p>{faq.content}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
    </>
  );
};