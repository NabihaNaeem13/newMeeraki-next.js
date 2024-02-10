import productData from 'data/product/product';
import { CartContext } from 'pages/_app';
import { useContext, useEffect } from 'react';
import { Card } from './Card/Card';
import { useCurrenciesContext } from 'Context/CurrenciesContext';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCardlistContext } from 'Context/CardListContext';

export const CheckoutOrders = () => {
  const { cart,mycart} = useContext(CartContext);
  const  {currency}=useCurrenciesContext();
  const {Card_list,subtotal}=useCardlistContext();
  console.log("Card_list",subtotal);
  const [coupon_code,set_coupon_code]=useState();
  const newprice = (subtotal * currency.conversionRate).toFixed(2);


  console.log("subtotal",subtotal);

  const CouponCode=async(e)=>{
    e.preventDefault();
    try{
      const userId=localStorage.getItem('User');
      const token=localStorage.getItem('token')
      const owner_id=localStorage.getItem('owner_id');
      const res=await axios.post('https://meeraki.com/api/v2/coupon-apply',{userId,owner_id,coupon_code},{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
          }
      })
      if(res.data.result===false){
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }catch(err){
       console.log(err)
    }
  }


  return (
    <>
      <div className='checkout-order'>
        <h5>Summary<span style={{marginLeft:"23rem",fontSize:"14px"}} className="badge badge-inline summary_checkitem-primary">{Object.keys(mycart).length ?? '0'} Items</span></h5>
        {Card_list && Card_list.map((order) => (
          <Card order={order} />
        ))}                        
      </div>
      <div className='cart-bottom__total border-0 shadow-sm p-4' style={{background:"#FFF"}}>
        <div className='cart-bottom__total-goods'>
          Subtotal
          <span>{currency.symbol}{newprice}</span>
        </div>
        <div className='cart-bottom__total-promo'>
        tax
          <span>PKR0.00</span>
        </div>
        <div className='cart-bottom__total-delivery'>
        Total Shipping
          <span>{currency.symbol}200.00</span>
        </div>
        <div className='cart-bottom__total-num'>
          total:
          {!subtotal==0? <span>{currency.symbol}{((subtotal + 200.00)* currency.conversionRate).toFixed(2)}</span>:<span>{currency.symbol}{((subtotal + 0)* currency.conversionRate).toFixed(2)}</span>}      
        </div>
        <div className="mt-3">
                    <form onSubmit={CouponCode}>
                           <div className="input-group">
                            <input type="text" id="coupon" className="form-control" name="coupon_code" value={coupon_code} placeholder="Have coupon code? Enter here" required="" onChange={(e)=>set_coupon_code(e.target.value)}/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-primary">Apply</button>
                            </div>
                        </div>
                    </form>
                </div>
      </div>
     
                
    </>
  );
};
