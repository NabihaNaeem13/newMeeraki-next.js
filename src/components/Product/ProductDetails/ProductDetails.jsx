import { useContext, useEffect, useState } from 'react';
import socialData from 'data/social';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import { useProductContext } from 'Context/ProductContext';
import ImageSlider from './ImageSlider';
import { FaRegHeart } from 'react-icons/fa';

export const ProductDetails = () => {
  const router = useRouter();
  const { cart, setCart,wishlist } = useContext(CartContext);
  const {getSingleProduct,singleProduct}=useProductContext();
  const socialLinks = [...socialData];
  const [product, setProduct] = useState(null);
  const choice=singleProduct.choice_options && singleProduct.choice_options[0].values[0]
  const [productSize,setProductSize]=useState(choice);
  const [addedInCart, setAddedInCart] = useState(false);
  console.log("singleProduct",singleProduct,"wishlist",wishlist,"productSize",productSize);
  useEffect(() => {
    if (router.query.product_id) {
      getSingleProduct(`https://meeraki.com/api/v2/products/${router.query.product_id}`)
    }
  }, [router.query.product_id]);

  useEffect(() => {
    if (singleProduct) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === singleProduct.id)));
    }
  }, [singleProduct, cart]);

  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);

  const handleAddToCart = () => {
    const newProduct = { ...singleProduct, quantity: quantity };
    setCart([...cart, newProduct]);
  };

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
              })}</h3>
              {singleProduct.current_stock? (
                <span className='product-stock'>in stock</span>
              ) : (
                ''
              )}
        
              <span className='product-num'>SKU: {singleProduct.product_sku}</span>
              {singleProduct.oldPrice ? (
                <span className='product-price'>
                  <span>${singleProduct.oldPrice}</span>{singleProduct.base_price}
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
                       {singleProduct.choice_options?<> {Object.keys(singleProduct.choice_options).map((item)=>{
                          return(
                            <div className='product-info__color' key={singleProduct.choice_options[item].title}>
                             <span>Size:</span>
                             <div className='col-sm-12'>
                            <div className='d-md-flex align-items-center py-md-2 mb-md-2 smalls'>
                           {singleProduct.choice_options[item].values[0] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={singleProduct.choice_options[item].values[0]} onChange={(e)=>setProductSize(e.target.value)} defaultChecked/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{singleProduct.choice_options[item].values[0]}</label>
                    </div></div> }
                    {singleProduct.choice_options[item].values[1] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={singleProduct.choice_options[item].values[1]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{singleProduct.choice_options[item].values[1]}</label>
                    </div></div> }
                    {singleProduct.choice_options[item].values[2] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={singleProduct.choice_options[item].values[2]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{singleProduct.choice_options[item].values[2]}</label>
                    </div></div> }
                    {singleProduct.choice_options[item].values[3] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={singleProduct.choice_options[item].values[3]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{singleProduct.choice_options[item].values[3]}</label>
                    </div></div> }
                  {singleProduct.choice_options[item].values[4] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={singleProduct.choice_options[item].values[4]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{singleProduct.choice_options[item].values[4]}</label>
                    </div></div> }
                             </div></div>
                            </div>
                          )
                         })}
                         </>:""
                        }
                        </form>

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
                      onClick={() => setQuantity(quantity + 1)}
                      className='counter-link counter-link__next'
                    >
                      <i className='icon-arrow'></i>
                    </span>
                  </div>
                </div>
              </div>

              
              <div className='product-buttons'>
                <button
                  disabled={addedInCart}
                  onClick={() => handleAddToCart()}
                  className='btn btn-icon'
                >
                  <i className='icon-cart'></i> cart
                </button>
                <button className='btn btn-grey btn-icon' style={{backgroundColor:"#ffff",color:"#999999",border:"1px solid #99999"}}>
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
                <li
                  className={tab === 2 ? 'active' : ''}
                  onClick={() => setTab(2)}
                >
                  Size Chart
                </li>
              </ul>
              <div className='box-tab-cont'>
                {/* <!-- Product description --> */}
                {tab === 1 && (
                  <div className='tab-cont'>
                   <div className='mt-2' dangerouslySetInnerHTML={{__html: singleProduct.description}}></div>
                  </div>
                )}
                {tab === 2 && (
                  <div className='tab-cont'>
                   {singleProduct.category==="New Arrivals"||singleProduct.category==="Unstitched"?<img src="/assets/img/meerakisizechart.jpg" alt="sizeChart"/>:""}
                   {singleProduct.category==="Formal Edit"||singleProduct.category==="Festive Pret"?<img src="/assets/img/newarrival-sizechart1.jpg" alt="sizeChart"/>:""}
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