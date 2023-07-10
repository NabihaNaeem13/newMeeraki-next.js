import productData from 'data/product/product';
import { Card } from './Card/Card';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { CartContext } from 'pages/_app';
import Router from 'next/router';

export const Wishlist = () => {
  const {wishlist}=useContext(CartContext);
  console.log("wishlist",wishlist);
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      Router.push('/login')
    }
  },[])
  return (
    <>
      {/* <!-- BEGIN WISHLIST --> */}
      <div className='wishlist'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>Product</div>
                <div className='cart-table__col'>Price</div>
                <div className='cart-table__col'>status</div>
                <div className='cart-table__col'>Add to cart</div>
                <div className='cart-table__col'>Remove</div>
              </div>

              {wishlist && wishlist.map((wish) => (
                <Card key={wish.id} wish={wish} />
              ))}
            </div>
          </div>
          <div className='wishlist-buttons'>
            <Link href='/shop'>
              <a className='btn'>go shopping</a>
            </Link>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          data-src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- WISHLIST EOF   --> */}
    </>
  );
};
