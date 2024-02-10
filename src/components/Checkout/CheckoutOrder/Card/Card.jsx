import { useCardlistContext } from 'Context/CardListContext';
import { useCurrenciesContext } from 'Context/CurrenciesContext';
import Link from 'next/link';

export const Card = ({ order }) => {
  const {product,
    id,
    quantity,
    tax,
    variation,
    price} = order;
    
    const  {currency}=useCurrenciesContext();
    const product_price=price * quantity;
    const newprice = ( product_price * currency.conversionRate).toFixed(2);
  return (
      <div className='checkout-order__item' key={id+tax+price+'sab'}>
        <Link href={`/productDetail/${id}`}>
          <a className='checkout-order__item-img'>
            <img src={`https://meeraki.com/public/${product.image}`} className='js-img' alt='' />
          </a>
        </Link>
        <div className='checkout-order__item-info'>
          <Link href={`/productDetail/${id}`}>
            <a className='title6'>
              {product.name}-{variation} <span>x{quantity}</span>
            </a>
          </Link>
          <span className='checkout-order__item-price'>
            {currency.symbol}{newprice}
          </span>
          <span className='checkout-order__item-num'>SKU: {product.sku}</span>
        </div>
      </div>
     
  );
};
