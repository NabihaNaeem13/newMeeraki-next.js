import { useProductContext } from 'Context/productContext';
import axios from 'axios';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';






export const MostViewed = ({ additionalClass,data}) => {
 console.log(data)

  const [relatedProduct,setRelatedProduct]=useState();
  console.log("relatedProduct",relatedProduct);
  const RelatedProduct=async()=>{
    try{
       const res=await axios.get(`https://meeraki.com/api/v2/products/related/${data}`);
       setRelatedProduct(res.data.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    RelatedProduct(relatedProduct)
  },[])
 
  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          subTitle='Related Products'
          title='You Have Viewed'
        />

        <div className='products-items'>
        <ProductsCarousel products={relatedProduct}/>
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};