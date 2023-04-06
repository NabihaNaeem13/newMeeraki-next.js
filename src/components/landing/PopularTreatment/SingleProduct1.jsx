import Link from 'next/link';
import styled from 'styled-components';

export const SingleProduct1 = ({
  product
}) => {
  const { name, image, id } = product;
  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className="card" style={{width:"14rem"}}>
  <img src={image} className="card-img-top" alt="..." style={{border:"1px solid #dddd"}}/>
  <div className="card-body">
  <div className='products-item__info'>
            <a>
              <span className='products-item__name' style={{color: "#999999"}}>{name}</span>
            </a>
        </div>
  </div>
</div>
      {/*<div className='products-item'>
        <div className='products-item__img'>
        <img src={image} alt='' />
          <div className='products-item__hover'>
            <Link href={`/product/${id}`}>
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
          <Link href={`/product/${id}`}>
            <a>
              <span className='products-item__name' style={{color: "#999999"}}>{name}</span>
            </a>
          </Link>
          <span className='products-item__cost'>
            <span>{oldPrice && `$${oldPrice}`}</span> ${price}
          </span>
        </div>
      </div>/*}
      {/* <!-- SINGLE PRODUCT ITEM EOF --> */}
    </>
  );
};