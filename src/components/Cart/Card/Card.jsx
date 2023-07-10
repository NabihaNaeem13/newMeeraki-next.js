import Link from 'next/link';

export const Card = ({ cart, onChangeQuantity }) => {
  const {
    id,
    isStocked,
    price,
    quantity,
    owner_id,
    variation,
    product
  } = cart;
  const ownerId=localStorage.setItem('owner_id',owner_id);
  return (
    <>
      <div className='cart-table__row' key={id}>
        <div className='cart-table__col'>
        <Link href={`/product/${id}`}>
            <a className='cart-table__img'>
              <img src={`https://meeraki.com/public/${product.image}`} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
          <Link href={`/product/${id}`}>
              <a className='title5'>{product.name}</a>
            </Link>
            {isStocked && (
              <span className='cart-table__info-stock'>in stock</span>
            )}
            <span className='cart-table__info-num'>SKU: {product.sku}</span>
          </div>
        </div>
        <div className='cart-table__col'>
        <span className='cart-table__total'>{variation}</span>
        </div>
        <div className='cart-table__col'>
        <span className='cart-table__price'>PKR{price}</span>
        </div>
        <div className='cart-table__col'>
          <div className='cart-table__quantity'>
            <div className='counter-box'>
              <span
                onClick={() => onChangeQuantity('decrement', quantity)}
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
                onClick={() => onChangeQuantity('increment', quantity)}
                className='counter-link counter-link__next'
              >
                <i className='icon-arrow'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='cart-table__col'>
        <span className='cart-table__total'>
          PKR{(price * quantity).toFixed(2)}
          </span>        
        </div>
      </div>
    </>
  );
};
