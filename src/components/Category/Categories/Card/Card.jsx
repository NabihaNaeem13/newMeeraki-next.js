import Link from 'next/link';

export const Card = ({ category }) => {
  const { name,thumbnail_image,id,base_price,discount_price} = category;
  return (
    <Link href={`/signal_product/${id}`} key={name+base_price}>
       <div className='top-categories__item'>
        <div className='products-item__img' style={{border:"2px solid #dddd",height:"500px"}}>
        <img src={`https://meeraki.com/public/${thumbnail_image}`}  alt={name} />
        <div className='top-categories__item-hover'>
          <h5>{name}</h5>
          <span>browse product -</span>
          <i className='icon-arrow-lg'></i>
        </div>
        </div>
        <div className='products-item__info'>
          <Link href={`/signal_product/${id}`}>
            <a>
              <span className='products-item__name' style={{color: "#999999"}}>{name}</span>
            </a>
          </Link>
          {discount_price!=base_price ? (
                <span className='product-price-singleproduct'>
                  <span>{base_price}</span> {discount_price}
                </span>
              ) : (
                <span className='product-price-singleproduct'>{base_price}</span>
              )}
        </div>
      </div>
    </Link>
  );
};
