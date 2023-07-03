import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export const Card = ({ wish}) => {
  const { id, product} = wish;
 const [addedInCart,setaddedInCart]=useState(false);
 const RemoveFromCart=()=>{
  return(
    setaddedInCart(true)
  )
 }
  return (
    <>
      {/* <!-- BEGIN WISHLIST CARD --> */}
      <div className='cart-table__row'>
        <div className='cart-table__col'>
          <Link href={`/signal_product/${id}`}>
            <a className='cart-table__img'>
              <img src={`https://meeraki.com/public/${product.thumbnail_image}`} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/signal_product/${id}`}>
              <a className='title5'>{product.name}</a>
            </Link>
          </div>
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__price'>{product.base_price}</span>
        </div>
        <div className='cart-table__col'>
          {product.current_stock ? (
            <span className='wishlist-stock'>in stock</span>
          ) : (
            <span className='wishlist-available'>not available</span>
          )}
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__total'>
            <Link href={`/signal_product/${id}`}header-content>
              <a className='blog-item__link'>
                buy now <i className='icon-arrow-md'></i>
              </a>
            </Link>
          </span>
        </div>
        <div className='cart-table__col'>
          <button className={`${addedInCart?'cart-table__buttonRemove':'cart-table__button'}`} disabled={addedInCart} onClick={RemoveFromCart}><FaHeart /></button>
        </div>
      </div>
      {/* <!-- WISHLIST CARD EOF--> */}
    </>
  );
};
