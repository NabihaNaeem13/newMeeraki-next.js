import Link from 'next/link';
import { useState } from 'react';

export const Card = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { category_name, thumbnail_image,name,id,hover_image} = category;
  console.log("category",category);
  return (
    <Link href={`/productDetail/${id}`}>
      <a className='top-categories__item' onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
      {isHovered && <img src={`https://meeraki.com/public/${hover_image}`} className='top-categories__item-hover-image' alt='' />}
        <div className='top-categories__item-hover'>
          <h5>{category_name}</h5>
          <span>{name}</span>
          <i className='icon-arrow-lg'></i>
        </div>
      </a>
    </Link>
  );
};
