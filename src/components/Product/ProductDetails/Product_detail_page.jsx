import React from 'react'
import { Product_Image } from './Product_Image';
import { useContext, useEffect, useState } from 'react';
import socialData from 'data/social';
import { ReviewFrom } from '../ReviewForm/ReviewFrom';
import { CartContext } from 'pages/_app';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useWishlistContext } from 'Context/wishlistContext';
import {BasicModal} from './BasicModal';
import { useCurrenciesContext } from 'Context/CurrenciesContext';
import { useAuthContext } from 'Context/AuthContext';
import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { useCardlistContext } from 'Context/CardListContext';

export const Product_detail_page = ({data}) => {
    console.log("data",data);
    const {id,name,base_price,choice_options,current_price,current_stock,description,photos,product_sku,size_variant_price,thumbnail_image}=data;
    const {mycart,user,user_id} = useContext(CartContext);
    const {AddToWishlist,myWishlist}=useWishlistContext();
    const {authuser}=useAuthContext();
    const socialLinks = [...socialData];
    const [addedInCart, setAddedInCart] = useState(false);
  const [addInWishList, setAddInWishList] = useState(false);
  const {AddTOCard,BuyNow}=useCardlistContext();
  const  {currency}=useCurrenciesContext();
  const ad=Object.keys(mycart);
  const pid=parseInt(ad);
console.log("user",user_id)

  useEffect(() => {
    if (data) {
      setAddedInCart(Boolean(pid===data.id));
    }
  }, []);

  useEffect(() => {
    if (data) {
      setAddInWishList(Boolean(myWishlist.product_id === data.id));
    }
  }, [myWishlist.product_id]);

  const [quantity, setQuantity] = useState(1);
   const total=current_price*quantity;
   const variantPrice=size_variant_price && size_variant_price[0]*quantity;
   const choice=choice_options && choice_options[0].values[0]
  const [productSize,setProductSize]=useState(choice);
  console.log(productSize);
  const updatePrice=()=>{
    if(productSize==="Unstitched"){
      return (total * currency.conversionRate).toFixed(2)
    }
    else if(productSize==="Small" || productSize==="Medium" || productSize==="Large" || productSize==="X-Large"){
      return (variantPrice * currency.conversionRate).toFixed(2)
    }
    else{
       return (total * currency.conversionRate).toFixed(2)
    }
  }
    return (
    <div key={id+name+111}>
  <div className="container mt-3">
    <div className='bg-white'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6 mb-4'>
          <div className='CUSTOM-ZOOM'>
            <div className='row'>
            <Product_Image photos={photos}/>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 tutwee'>
         <div className='text-left'>
         <h1 className="fs-20 fw-600" style={{lineHeight:"0.7rem"}}>
          {name}
                    </h1>
                    <p style={{margin: "0", padding: "0"}}> <b>{product_sku}</b> </p>
                    <div className="row align-items-center">
                        <div className="col-6">
                        </div>
                        <div className="col-6 text-right">
                           {current_stock > 0 ? <span className="badge badge-md badge-inline badge-pill badge-success">In Stock</span>:<span className="badge badge-md badge-inline badge-pill badge-danger">Out of Stock</span>}
                          </div>
                          <form id="option-choice-form">
                       {choice_options?<> {Object.keys(choice_options).map((item)=>{
                          return(
                            <div className='product-info__color d-flex' key={choice_options[item].title}>
                             <div className='col-sm-1'>
                             <span className='mt-3'>Size:</span>
                             </div>
                             <div className='col-sm-11'>
                            <div className='d-md-flex align-items-center py-md-2 mb-md-2 smalls'>
                           {choice_options[item].values[0] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={choice_options[item].values[0]} onChange={(e)=>setProductSize(e.target.value)} defaultChecked/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{choice_options[item].values[0]}</label>
                    </div></div> }
                    {choice_options[item].values[1] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={choice_options[item].values[1]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{choice_options[item].values[1]}</label>
                    </div></div> }
                    {choice_options[item].values[2] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={choice_options[item].values[2]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{choice_options[item].values[2]}</label>
                    </div></div> }
                    {choice_options[item].values[3] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={choice_options[item].values[3]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{choice_options[item].values[3]}</label>
                    </div></div> }
                  {choice_options[item].values[4] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={choice_options[item].values[4]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{choice_options[item].values[4]}</label>
                    </div></div> }
                             </div></div>
                            </div>
                          )
                         })}
                         </>:""
                        }
                        <BasicModal/>
                        <div className="row no-gutters">
                            <div className="col-sm-2">
                                <div className="opacity-50 my-2">Quantity:</div>
                            </div>
                            <div className="col-sm-10">
                            <div className='counter-box'>
            <span
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className='counter-link counter-link__prev'
            >
              <i className='icon-arrow'></i>
            </span>
            <input
              type='text'
              className='counter-input'
              value={quantity}/>
            <span
              onClick={() => setQuantity(quantity + 1)}
              className='counter-link counter-link__next'
            >
              <i className='icon-arrow'></i>
            </span>
          </div>
                            </div>
                        </div>
                        <div className="row no-gutters pb-3 mt-3" id="chosen_price_div">
                            <div className="col-sm-3 mt-2">
                                <div className="opacity-50 my-2">Total Price:</div>
                            </div>
                            <div className="col-sm-9">
                                <div className="product-price mt-0">
                                    <strong id="chosen_price" className="h4 fw-600 text-primary">{currency.symbol}{updatePrice()}</strong>  
                                </div>
                            </div>
                        </div>
                        </form>
                        <div className="mt-0" style={{display: "flex", alignItems: "center"}}>
                        <div className='product-buttons mt-0'>
        <button
          disabled={addedInCart}
          onClick={()=>AddTOCard(user_id,id,productSize,quantity,user.value)}
          className='btn-cartProductDetail'
        >
          <i className='icon-cart'></i> cart
        </button>
        <button className='btn btn-icon' onClick={()=>BuyNow(user_id,id,productSize,quantity,user.value)}>
        <AiOutlineShoppingCart className='mx-1' style={{fontSize:"16px",fontWeight:"400"}}/> Buy Now
        </button>
        <button className='btn-grey'  disabled={addInWishList} onClick={() => AddToWishlist(id,authuser.id,user.value)}  style={{backgroundColor:"#ffff",color:"#999999",border:"none"}}>
          <AiFillHeart className='btn-heart'/>
        </button>
      </div>
                    </div>
                    <div className="d-table width-100 mt-3">
                </div>
                        <div className='contacts-info__social mt-2'>
        <ul>
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a href={social.path}>
                <i className={social.icon ? social.icon : ''}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
                          <div className='mt-2' dangerouslySetInnerHTML={{__html: description}}></div>

                         
                        
                    </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  <MostViewed additionalClass='product-viewed' data={id} />
    </div>
  )
}
