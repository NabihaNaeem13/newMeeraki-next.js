import Link from 'next/link';

export const Card = ({ order }) => {
  const { product, variation ,price ,id, quantity,product_sku  } = order;
  return (
    <>
      {/* <!-- BEING ORDER ITEM CARD --> */}
      <div className='checkout-order__item'>
        <Link href={`/product/${id}`}>
          <a className='checkout-order__item-img'>
            <img src={`https://meeraki.com/public/${product.image}`} className='js-img' alt='' />
          </a>
        </Link>
        <div className='checkout-order__item-info'>
          <Link href={`/product/${id}`}>
            <a className='title6'>
              {product.name}{variation} <span>x{quantity}</span>
            </a>
          </Link>
          <span className='checkout-order__item-price'>
            {(price * quantity).toFixed(2)}
          </span>
          <span className='checkout-order__item-num'>SKU: {product.sku}</span>
        </div>
      </div>
      {/* <!-- ORDER ITEM CARD EOF --> */}
    </>
  );
};
