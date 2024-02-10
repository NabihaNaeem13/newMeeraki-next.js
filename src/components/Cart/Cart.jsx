import { Card } from './Card/Card';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import {BsArrowLeft} from "react-icons/bs";
import router from 'next/router';
import { AddToCart } from './addToCart';
import { FiTrash2 } from 'react-icons/fi';
import { useCurrenciesContext } from 'Context/CurrenciesContext';
import axios from 'axios';
import { useCardlistContext } from 'Context/CardListContext';

export const Cart = ({onNext}) => {
  const  {currency}=useCurrenciesContext();
  const {Card_list,RemoveFromCard,subtotal}=useCardlistContext();
  const newprice = (subtotal * currency.conversionRate).toFixed(2);

  const getCardList=async()=>{
      try{
        const res=await axios.get('https://meeraki.com/api/v2/carts/list');
        console.log('cardlist',res);
      }catch(err){
        console.log(err);
      }
  }

  useEffect(()=>{
    getCardList()
  },[])
  return (
    <>
      {/* <!-- BEGIN CART --> */}
      <div className='cart'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>Product</div>
                <div className='cart-table__col'>Price</div>
                <div className='cart-table__col text-center'>Tax</div>
                <div className='cart-table__col'>Size</div>
                <div className='cart-table__col'>Quantity</div>
                <div className='cart-table__col text-center'>Total</div>
                <div className='cart-table__col text-center'>Remove</div>
              </div>
              {Card_list.length===0?
              <div className='cart-table__row' style={{justifyContent:"center"}}>
              <div className='cart-table__col h2' style={{justifyContent:"center"}}>Your cart is empty!</div>
              </div> :<div>
              {Card_list && Card_list.map((item)=>{
              const {id,price,product_id,quantity,tax,variation,product}=item;
              console.log(item)
              const addprice=(price *currency.conversionRate).toFixed(2)
              switch (quantity) {
  case 2:
    addprice=((price*2)*currency.conversionRate).toFixed(2)
    console.log("addprice 61",addprice)
    break;

  case 3:
    addprice=((price*3)*currency.conversionRate).toFixed(2)
    console.log("addprice 66",addprice)
    break;
  case 4:
    addprice=((price*4) *currency.conversionRate).toFixed(2)
    console.log("addprice 70",addprice)
    break;
  case 5:
    addprice=((price*5)*currency.conversionRate).toFixed(2)
    break;
  case 6:
    addprice=((price*6)*currency.conversionRate).toFixed(2)
    break;
  case 7:
    addprice=((price*7)*currency.conversionRate).toFixed(2)
    break;
  case 8:
    addprice=((price*8)*currency.conversionRate).toFixed(2)
    break;
  case 9:
    addprice=((price*9)*currency.conversionRate).toFixed(2)
    break;
  case 10:
    addprice=((price*10)*currency.conversionRate).toFixed(2)
    break;
    case 11:
    addprice=((price*11)*currency.conversionRate).toFixed(2)
    break;
  case 12:
    addprice=((price*12)*currency.conversionRate).toFixed(2)
    break;
  default:
    addprice=(price*currency.conversionRate).toFixed(2)
}
              return(
                <div className='cart-table__row' key={product_id+variation}>
        <div className='cart-table__col'>
          <Link href={`/productDetail/${product_id}`}>
            <a className='cart-table__img'>
              <img src={`https://meeraki.com/public/${product.image}`} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/productDetail/${product_id}`}>
              <a className='title5'>{product.name}</a>
            </Link>
            <span className='cart-table__info-stock'>in stock</span>
            <span className='cart-table__info-num'>SKU:{product.sku}</span>
          </div>
        </div>
        <div className='cart-table__col'>
        <span className='cart-table__price'>{currency.symbol}{price}</span>
        </div>
        <div className='cart-table__col text-center'>
        <span className='cart-table__price'>{currency.symbol}{tax}</span>
        </div>
        <div className='cart-table__col'>
        <span className='cart-table__price'>{variation}</span>
        </div>
        <div className='cart-table__col'>
          <div className='cart-table__quantity'>
            <div className='counter-box'>
              <span
                className='counter-link counter-link__prev'>
                <i className='icon-arrow'></i>
              </span>
               <p className='counter-input' style={{width: "36px",height: "27px",color: "#222222",textAlign: "center"}}>{quantity}</p>
              <span
                className='counter-link counter-link__next'
                
              >
                <i className='icon-arrow'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='cart-table__col text-center'>
        <span className='cart-table__total mx-2' style={{fontSize:"1rem"}}>  
        {currency.symbol}{addprice}
          </span>
        </div>
        <div className='cart-table__col text-center'>
         <button className='btnTrash' onClick={()=>RemoveFromCard(id)}><FiTrash2/></button>
        </div>
      </div>
              )
             })}
              </div>
              }
            </div>
          </div>
          <div className="px-3 py-2 mb-4 d-flex justify-content-between">
                            <span className="opacity-60 fs-15">Subtotal</span>
                            <span className="fw-600 fs-17">{currency.symbol}{newprice}</span>
                        </div>
          <div className='cart-bottom'>
            <div className='cart-bottom__promo'>
            <button className='btn btn-grey' onClick={() => router.push('/')}>
            <BsArrowLeft style={{fontSize:"1rem",marginRight:"10px"}}/>
            Return to shop
                  </button>
            </div>
           
                <button className='btn' onClick={onNext} style={{lineHeight:"60px"}}>Continue to Delivery Information</button>
           
          </div>
        </div>
      </div>
      {/* <!-- CART EOF   --> */}
    </>
  );
};
