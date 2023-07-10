import Link from 'next/link';
import styled from 'styled-components';

export const Card = ({ blog }) => {
  const { image_title,id,image_url, subtitle,buttonValue } = blog;
  console.log("image_url",image_url);
  return (
    <div className='blog-item' key={id+subtitle}>
        <a className='blog-item__img'>
          <img src={`https://meeraki.com/${image_url}`} className='js-img' alt='' />
        </a>
        <p className='para_mycard' style={{fontWeight: "800"}}>{image_title}</p>
        <p className='para_mycard' style={{color:"black"}}>{subtitle}</p>
      <Link href={`/subcategory/${image_title}`}>
        <p  style={{textAlign:"center"}}><button style={{lineHeight: "59px",border:"2px solid #999999",color:"#999999",fontSize:"14px",padding: "0 50px",height:"60px",background:"transparent",borderRadius:"10px"}}>
          Shop by category
        </button></p>
      </Link>
    </div>
  );
};