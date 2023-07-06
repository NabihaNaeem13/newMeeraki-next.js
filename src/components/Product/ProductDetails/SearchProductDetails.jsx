import { useContext, useEffect, useState } from 'react';
import socialData from 'data/social';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import ImageSlider from './ImageSlider';
import axios from 'axios';
import { FaRegHeart } from 'react-icons/fa';

export const SearchProductDetails = () => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const socialLinks = [...socialData];
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);

  const searchDataget=async(url)=>{
    const name=router.query.search_name;
     try{
      const res=await axios.post(url,{name})
     console.log("res",res);
     setProduct(res.data.data.data[0])
    }catch(err){
      console.log(err);
     }
  }

  useEffect(() => {
    if (router.query.search_name) {
        searchDataget(`https://meeraki.com/api/v2/filter/product`)
    }
  }, [router.query.search_name]);

  useEffect(() => {
    if (product) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === product.id)));
    }
  }, [product, cart]);

  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);

  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: quantity };
    setCart([...cart, newProduct]);
  };

  if (!product) return <></>;
  return (
    <>
      {/* <!-- BEGIN PRODUCT --> */}
      <div className='product'>
        <div className='wrapper'>
          <div className='product-content'>
            {/* <!-- Product Main Slider --> */}
            <ImageSlider productimage={product.photos}/>
            <div className='product-info'>
              <h3>{product.name}<span className='products-item__sale'><FaRegHeart style={{fontSize:"2.5rem"}}/></span></h3>
              {product.current_stock? (
                <span className='product-stock'>in stock</span>
              ) : (
                ''
              )}
        
              <span className='product-num'>SKU: {product.product_sku}</span>
              {product.oldPrice ? (
                <span className='product-price'>
                  <span>${product.oldPrice}</span>{product.base_price}
                </span>
              ) : (
                <span className='product-price'>{product.base_price}</span>
              )}
              <p>{product.content}</p>

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
              </ul>
              <div className='box-tab-cont'>
                {/* <!-- Product description --> */}
                {tab === 1 && (
                  <div className='tab-cont'>
                   <div className='mt-2' dangerouslySetInnerHTML={{__html: product.description}}></div>
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
