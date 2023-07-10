import { useContext, useEffect, useState } from 'react';
import socialData from 'data/social';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import { useProductContext } from 'Context/ProductContext';
import ImageSlider from './ImageSlider';
import { FaRegHeart } from 'react-icons/fa';
import { SizeModel } from './SizeModel';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const ProductDetails = () => {
  const router = useRouter();
  const { cart, setCart,wishlist,setwishlist } = useContext(CartContext);
  const {getSingleProduct,singleProduct}=useProductContext();
  const socialLinks = [...socialData];
  const [product, setProduct] = useState(null);
  const choice=singleProduct.variants && singleProduct.variants[0].value
  const [productSize,setProductSize]=useState(choice);
  const [addedInCart, setAddedInCart] = useState(false);
  const [addedInWishlist, setAddedInWishlist] = useState(false);
  useEffect(() => {
    if (router.query.product_id) {
      getSingleProduct(`https://meeraki.com/api/v2/products/${router.query.product_id}`)
    }
  }, [router.query.product_id]);

  useEffect(() => {
    if (singleProduct) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === singleProduct.id)));
      setAddedInWishlist(Boolean(wishlist?.find((pd) => pd.id === singleProduct.id)));
    }
  }, [singleProduct, cart]);

  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);

  const handleAddToCart = async(product_id,variant,quantity) => {
    try{
      const token=localStorage.getItem('token');
      const User=localStorage.getItem('User');
      const user_id=parseInt(User);
      const res=await axios.post('https://meeraki.com/api/v2/carts/add',{user_id,product_id,variant,quantity},{
        headers: {
          Authorization: 'Bearer ' + token//the token is a variable which holds the token
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
          const newProduct = { ...singleProduct,productSize:productSize,quantity: quantity };
          setCart([...cart, newProduct]);
      }
      console.log("card_res",res.data.result);
    }catch(err){
      if(err.response.status===401){
        toast.error(err.response.data.message, {
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
      console.log(err);
    }
  };

  const handleAddToWishlist =async(product_id,base_price,current_stock,thumbnail_image,name) => {
    const token=localStorage.getItem('token');
      const User=localStorage.getItem('User');
      const user_id=parseInt(User);
    try{
       const res=await axios.get(`https://meeraki.com/api/v2/wishlists-add-product/${product_id}/${user_id}`,{
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
       });
       console.log("res",res.data.message);
       if(res.data.is_in_wishlist===true){
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
          const newProduct = singleProduct?.find((pd) => pd.id === product_id);
          setwishlist([...wishlist, { ...newProduct,product:{base_price:base_price,name:name,thumbnail_image:thumbnail_image,id:product_id,current_stock:current_stock}}]);
       }
    }catch(err){
      if(err.response.status===401){
        toast.error('Please login your account', {
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
      }
  };

  const updatePrice=()=>{
    if(productSize==="Small"){
      return singleProduct.variants[0].price*quantity
    }
    else if(productSize==="Medium"){
      return singleProduct.variants[1].price*quantity
    }
    else if(productSize==="Large" || productSize==="X-Large"){
      return singleProduct.variants[2].price*quantity
    }
    else if(productSize==="X-Large"){
      return singleProduct.variants[3].price*quantity
    }
    else{
       return singleProduct.current_price*quantity
    }
  }


  if (!singleProduct) return <></>;
  return (
    <>
      {/* <!-- BEGIN PRODUCT --> */}
      <div className='product'>
        <div className='wrapper'>
          <div className='product-content'>
            {/* <!-- Product Main Slider --> */}
            <ImageSlider productimage={singleProduct.photos}/>
            <div className='product-info'>
              <h3>{singleProduct.name}{wishlist&& wishlist.map((item)=>{
                return(
                  <>
                  {item.product.id===singleProduct.id?<span className='products-item__sale'><FaRegHeart style={{fontSize:"2.5rem",color:"red"}}/></span>:""}
                  </>
                )
              })}</h3>/{singleProduct.unit}
              {singleProduct.current_stock? (
                <span className='product-stock'>in stock</span>
              ) : (
                <span className='product-stock' style={{color:"red"}}>out of stock</span>
              )}
              <span className='product-num'>SKU: {singleProduct.product_sku}</span>
              {singleProduct.oldPrice ? (
                <span className='product-price'>
                  <span>{singleProduct.oldPrice}</span>{singleProduct.base_price}
                </span>
              ) : (
                <span className='product-price'>{singleProduct.base_price}</span>
              )}
              <p>{singleProduct.content}</p>

              {/* <!-- Social Share Link --> */}
              <div className='contacts-info__social'>
                <span>Find us here:</span>
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

              <form id="option-choice-form">
              <div className='product-info__color'>
                             <span>Size:</span>
                             <div className='col-sm-12'>
                            <div className='d-md-flex align-items-center py-md-2 mb-md-2 smalls'>
                            {singleProduct.variants?<>{Object.keys(singleProduct.variants).map((item)=>{
                              console.log("setProductSize",singleProduct.variants[item].value)
                             return(
                                 <div className='radio-input-container' key={singleProduct.variants[item].value}>
                                    <input type="radio" name="ratio" className="input-radio" value={singleProduct.variants[item].value} onChange={(e)=>setProductSize(singleProduct.variants[item].value)} onClick={(e)=>setProductSize(e.target.value)} defaultChecked/>
                                    <div className='ratio-title'>
                                       <label htmlFor="walk-radio">{singleProduct.variants[item].value}</label>
                                    </div>
                                 </div>       
                 )
              })}</>:""}
                           </div>
                           </div>
              </div>
                        </form>
               <SizeModel category={singleProduct.category}/>
            
              {/* <!-- Product Color info--> */}
              <div className='product-options'>
                {/*<div className='product-info__color'>
                  <span>Color:</span>
                  <ul>
                    {product?.colors.map((color, index) => (
                      <li
                        onClick={() => setActiveColor(index)}
                        className={activeColor === index ? 'active' : ''}
                        key={index}
                        style={{ backgroundColor: color }}
                      ></li>
                    ))}
                  </ul>
                </div>/*}


                {/* <!-- Order Item counter --> */}
                <div className='product-info__quantity'>
                  <span className='product-info__quantity-title'>
                    Quantity:
                  </span>
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
                      onClick={() => {
                        setQuantity(quantity + 1)
                      }}
                      className='counter-link counter-link__next'
                    >
                      <i className='icon-arrow'></i>
                    </span>
                  </div>
                </div>
              </div>

              <span className='product-info__quantity-title'>
                    Total:
              </span>
              <span className='product-price'>{updatePrice()}</span>
              <div className='product-buttons'>
                <button
                  disabled={addedInCart}
                  onClick={() => handleAddToCart(singleProduct.id,productSize,quantity)}
                  className='btn btn-icon'
                >
                  <i className='icon-cart'></i> cart
                </button>
                <button disabled={addedInWishlist} className='btn btn-grey btn-icon' style={{backgroundColor:"#ffff",color:"#999999",border:"1px solid #99999"}} onClick={() => handleAddToWishlist(singleProduct.id,singleProduct.base_price,singleProduct.current_stock,singleProduct.thumbnail_image,singleProduct.name)}>
                  <i className='icon-heart'></i> wish
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product Details Tab --> */}
          <div className='product-detail'>
            <div className='tab-wrap product-detail-tabs'>
              <ul className='nav-tab-list tabs pd-tab'>
                <li
                  className={tab === 1 ? 'active' : ''}
                  onClick={() => setTab(1)}
                >
                  Description
                </li>
              </ul>
              <div className='box-tab-cont'>
                {/* <!-- Product description --> */}
                {tab === 1 && (
                  <div className='tab-cont'>
                   <div className='mt-2' dangerouslySetInnerHTML={{__html: singleProduct.description}}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- PRODUCT EOF   --> */}
    </>
  );
};

/*
  <div className='product-slider'>
              <div className='product-slider__main'>
                <Slider
                  fade={true}
                  asNavFor={nav2}
                  arrows={false}
                  lazyLoad={true}
                  ref={(slider1) => setNav1(slider1)}
                >
                  {product.photos.map((img, index) => (
                    <div key={index} className='product-slider__main-item'>
                      <div className='singleProduct-item__type'>
                          <span className='singleProduct-item__sale'><FaRegHeart style={{fontSize:"2rem"}}/></span>
                      </div>
                      <img src={img} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* <!-- Product Slide Nav --> */
      /*        <div className='product-slider__nav'>
                <Slider
                  arrows={false}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {product.imageGallery.map((img, index) => (
                    <div key={index} className='product-slider__nav-item'>
                      <img src={img} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
*/