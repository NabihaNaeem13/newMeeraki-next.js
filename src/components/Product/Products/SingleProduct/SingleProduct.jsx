import Link from 'next/link';
import { CartContext } from 'pages/_app';
import { useContext, useState } from 'react';
import { SingleModel } from './singleModel';

export const SingleProduct = ({
  product,
  onAddToWish,
  onAddToCart,
  onBuyNow,
  addedInCart,
  addedInwishCard
}) => {
  const { name,thumbnail_image,hover_image,discount,unit_price,discount_price,base_price,id,category_name,current_price,product_sku,current_stock,variant} = product;
  const {user,user_id}=useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className='products-item' onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <div className='products-item__img' style={{border:"2px solid #dddd"}}>
        {isHovered?<img src={`https://meeraki.com/public/${hover_image}`}  alt={name} className="products-item__img__hoverimage"/>:<img src={`https://meeraki.com/public/${thumbnail_image}`}  alt={name} />}
          <div className='products-item__hover'>
            <Link href={`/signal_product/${id}`}>
              <a>
                <i className='icon-search'></i>
              </a>
            </Link>
            <div className='products-item__hover-options'>
              <button  className={`addList ${addedInwishCard ? 'added' : ''}`} onClick={() => onAddToWish(id,user.value,user_id,base_price,current_stock,thumbnail_image,name)}>
                <i className='icon-heart'></i>
              </button>
              <SingleModel addedInCart={addedInCart} onAddToCart={onAddToCart} product={product} onBuyNow={onBuyNow}/>
            </div>

          </div>
        </div>
        <div className='products-item__info'>
          <Link href={`/signal_product/${id}`}>
            <a>
              <span className='products-item__name' style={{color: "#999999"}}>{name}</span>
            </a>
          </Link>
          {category_name?<>{discount_price!=base_price? (
                <span className='product-price-singleproduct'>
                  <span>{base_price}</span> {discount_price}
                </span>
              ) : (
                <span className='product-price-singleproduct'>{base_price}</span>
              )}</>:<>
              {discount? (
                <span className='product-price-singleproduct'>
                  <span>PKR{unit_price}</span> PKR{unit_price-discount}
                </span>
              ) : (
                <span className='product-price-singleproduct'>PKR{unit_price}</span>
              )}
              </>}
        </div>
      </div>
      {/* <!-- SINGLE PRODUCT ITEM EOF <span>{current_price && `$${current_price}`}</span> --> */}
    </>
  );
};
