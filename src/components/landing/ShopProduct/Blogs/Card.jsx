import Link from 'next/link';
import styled from 'styled-components';

export const Card = ({ blog }) => {
  const { title, id, image, subtitle,buttonValue } = blog;
  return (
    <div className='blog-item'>
        <a className='blog-item__img'>
          <img src={image} className='js-img' alt='' />
        </a>
        <p className='para_mycard' style={{fontWeight: "800"}}>{title}</p>
        <p className='para_mycard' style={{color:"black"}}>{subtitle}</p>
      <Link href={`/blog/${id}`}>
        <p  style={{textAlign:"center"}}><button style={{lineHeight: "59px",border:"2px solid #999999",color:"#999999",fontSize:"14px",padding: "0 50px",height:"60px",background:"transparent",borderRadius:"10px"}}>
          {buttonValue}
        </button></p>
      </Link>
    </div>
  );
};