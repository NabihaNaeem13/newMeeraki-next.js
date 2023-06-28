import Link from 'next/link';

export const SingleProduct = ({
  product,
  onAddToWish,
  onAddToCart,
  addedInCart,
}) => {
  const { name,thumbnail_image,hover_image,base_price,id,category_name,current_price,product_sku,current_stock,variant} = product;
  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className='products-item'>
        <div className='products-item__img' style={{border:"2px solid #dddd"}}>
        <img src={`https://meeraki.com/public/${thumbnail_image}`}  alt='' />
          <div className='products-item__hover'>
            <Link href={`/signal_product/${id}`}>
              <a>
                <i className='icon-search'></i>
              </a>
            </Link>
            <div className='products-item__hover-options'>
              <button className='addList' onClick={() => onAddToWish(id)}>
                <i className='icon-heart'></i>
              </button>
              <button
                disabled={addedInCart}
                className={`addList ${addedInCart ? 'added' : ''}`}
                onClick={() => onAddToCart(id)}
              >
                <i className='icon-cart'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='products-item__info'>
          <Link href={`/signal_product/${id}`}>
            <a>
              <span className='products-item__name' style={{color: "#999999"}}>{name}</span>
            </a>
          </Link>
          <span className='products-item__cost'>
            {base_price}
          </span>
        </div>
      </div>
      {/* <!-- SINGLE PRODUCT ITEM EOF <span>{current_price && `$${current_price}`}</span> --> */}
    </>
  );
};
