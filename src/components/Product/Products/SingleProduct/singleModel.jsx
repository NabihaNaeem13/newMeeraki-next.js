import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from 'pages/_app';
import Link from 'next/dist/client/link';
import { FaRegHeart } from 'react-icons/fa';
import { SizeModel } from 'components/Product/ProductDetails/SizeModel';

const style = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 760,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

export const SingleModel = ({addedInCart,onAddToCart,product,onBuyNow}) => {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isHovered1, setIsHovered1] = useState(false);
    const [productSize,setProductSize]=useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { cart, setCart,wishlist } = useContext(CartContext);
    const {id,name,hover_image,thumbnail_image,discount_price,product_sku,current_price,current_stock,base_price,category_name,variant_prices}=product;
    
    const updatePrice=()=>{
        if(productSize==="Small"){
          return variant_prices[0].prices[0].price*quantity
        }
        else if(productSize==="Medium"){
          return variant_prices[0].prices[1].price*quantity
        }
        else if(productSize==="Large"){
          return variant_prices[0].prices[2].price*quantity
        }
        else if(productSize==="X-Large"){
          return variant_prices[0].prices[3].price*quantity
        }
        else{
           return current_price*quantity
        }
      }
  return (
    <div key={id+name+11}>
      <button
                disabled={addedInCart}
                className={`addList ${addedInCart ? 'added' : ''}`}
                onClick={handleOpen}
              >
                <i className='icon-cart'></i>
      </button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{overflowY:"scroll"}}
        
      >
      <Box sx={style}>
        <div className="container mt-3">
            <div className='bg-white'>
              <div className='row'>
                <div className='col-xl-5 col-lg-5 mb-4'>
                <div className='products-item'>
        <div className='products-item__img' onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}>
      <Link href={`/signal_product/${id}`}>
      {isHovered1?<img src={`https://meeraki.com/public/${hover_image}`} className='js-img' alt='' />:<img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />}
      </Link>
         
          </div>
          </div>
                </div>
                <div className='col-xl-7 col-lg-7 tutwee'>
                 <div className='text-left'>
                 <Link href={`/signal_product/${id}`}><h1 className="mb-1 fs-20 fw-600">
                 {name}{wishlist&& wishlist.map((item)=>{
  return(
    <>
    {item.product.id===id?<span className='products-item__sale'><FaRegHeart style={{fontSize:"2rem",color:"red"}}/></span>:""}
    </>
  )
})}</h1></Link>
                            <p style={{margin: "0", padding: "0"}}><b>{product_sku}</b> </p>
                            <div className="row align-items-center">
                                <div className="col-6">
                                </div>
                                <div className="col-6 text-right">
                                {current_stock > 0 ? <span className="badge badge-md badge-inline badge-pill badge-success">In Stock</span>:<span className="badge badge-md badge-inline badge-pill badge-danger">Out of Stock</span>}
                                  </div>
                                  <div className="row align-items-center">
                                    <div className="row no-gutters mt-1 mb-2">
                                    <div className="col-sm-5">
                                       <div className="opacity-50 my-2">Price:</div>
                                    </div>
                                    <div className="col-sm-7">
                                    <del className="fs-20 opacity-60"> 
                                        {base_price}
                                    </del>   
                                    </div>
                                </div></div>
                                <div className="row no-gutters my-2">
                                    <div className="col-sm-5">
                                        <div className="opacity-50">Discount Price:</div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="">
                                            <strong className="fs-20 fw-600">
                                            {discount_price}
                                            </strong>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                            <div className='mt-1 mb-1'>
                            <SizeModel category={category_name}/> 
                            </div> 
                            <div id="option-choice-form">
                            <div className="opacity-50 my-2">Size:</div>
                            {variant_prices?<>{Object.keys(variant_prices).map((item)=>{
                                return(
                                    <div className='col-sm-12'>
                                       <div className='d-md-flex align-items-center py-md-2 mb-md-2 smalls'>
                                 {variant_prices[item].prices.map((curemlem)=>{
                                   return(
                                    <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={curemlem.variant} onChange={(e)=>setProductSize(e.target.value)} onClick={(e)=>setProductSize(e.target.value)} defaultChecked/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{curemlem.variant}</label>
                    </div></div>
                                   )
                                })}
                                 </div></div>
                                )
                            })}</>:""}
                         </div>       
                                <div className="row no-gutters">
                                    <div className="col-sm-5">
                                        <div className="opacity-50 my-1">Quantity:</div>
                                    </div>
                                    <div className="col-sm-7">
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
                      disabled
                      value={quantity}
                    />
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
                                    <div className="col-sm-5 mt-2">
                                        <div className="opacity-50 my-2">Total Price:</div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="product-price mt-0">
                                            <strong id="chosen_price" className="fs-20 fw-600">{updatePrice()}</strong>  
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="mt-0" style={{display: "flex", alignItems: "center"}}>
                                <div className='product-buttons mt-0'>
                                <button
                  disabled={addedInCart}
                  className={`btn btn-icon ${addedInCart ? 'btn-add' : ''}`}
                  onClick={()=>onAddToCart(id,productSize,quantity,updatePrice(),name,product_sku,thumbnail_image)}
                >
                  <i className='icon-cart'></i> cart
                </button>
                <button disabled={addedInCart} style={{padding: "8px 27px"}} className={`btn btn-icon ${addedInCart ? 'btn-add' : ''}`} onClick={()=>onBuyNow(id,productSize,quantity,updatePrice(),name,product_sku,thumbnail_image)}>  
                 <i className='icon-cart' style={{fontSize:"16px",fontWeight:"400"}}></i> Buy Now
        </button>
              </div>
                            </div>
                            <div className="d-table width-100 mt-3">
                        </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
      </Box>      
      </Modal>
    </div>
  )
}

/*
   <div className='col-sm-12'>
                                       <div className='d-md-flex align-items-center py-md-2 mb-md-2 smalls'>
                           {variant_prices[item].prices[0] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant_prices[item].prices[0]} onChange={(e)=>setProductSize(e.target.value)} defaultChecked/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant_prices[item].prices[0]}</label>
                    </div></div> }
                    {variant_prices[item].prices[1] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant_prices[item].prices[1]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant_prices[item].prices[1]}</label>
                    </div></div> }
                    {variant_prices[item].prices[2] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant_prices[item].prices[2]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant_prices[item].prices[2]}</label>
                    </div></div> }
                    {variant_prices[item].prices[3] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant_prices[item].prices[3]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant_prices[item].prices[3]}</label>
                    </div></div> }
                  {variant_prices[item].prices[4] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant_prices[item].prices[4]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant_prices[item].prices[4]}</label>
                    </div></div> }
                                       </div>
                             </div>

                             {wishlist&& wishlist.map((item)=>{
  return(
    <>
    {item.product.id===id?<span className='products-item__sale'><FaRegHeart style={{fontSize:"2rem",color:"red"}}/></span>:""}
    </>
  )
})}
*/

