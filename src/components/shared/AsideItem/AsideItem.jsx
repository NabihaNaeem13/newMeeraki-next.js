import Link from 'next/link';

export const AsideItem = ({ aside }) => {
  const { id, name,base_price,thumbnail_image,rating } = aside;
  return (
    <>
      {/* <!-- BEING SHOP ASIDE CARD  --> */}
      <Link href={`/signal_product/${id}`}>
        <a className='shop-aside__item-product'>
          <div className='shop-aside__item-product-img'>
            <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
          </div>
          <div className='shop-aside__item-product-info'>
            <span className='shop-aside__item-product-title'>{name}</span>
            <span className='shop-aside__item-product-price'>{base_price}</span>
            <ul className='star-rating'>
              {[...Array(rating)].map((star, index) => {
                <li key={index}>
                  <i className='icon-star'></i>
                </li>;
              })}
            </ul>
          </div>
        </a>
      </Link>
      {/* <!-- SHOP ASIDE CARD EOF  --> */}
    </>
  );
};
