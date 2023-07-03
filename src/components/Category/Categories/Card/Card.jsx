import Link from 'next/link';

export const Card = ({ category }) => {
  const { name, thumbnail_image,id} = category;
  return (
    <Link href={`/signal_product/${id}`}>
      <a className='top-categories__item'>
        <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
        <div className='top-categories__item-hover'>
          <h5>{name}</h5>
          <span>browse products -</span>
          <i className='icon-arrow-lg'></i>
        </div>
      </a>
    </Link>
  );
};
