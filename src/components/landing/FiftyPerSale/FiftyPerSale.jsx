import { useProductContext } from 'Context/productContext';
import axios from 'axios';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useState } from 'react';
import { useEffect } from 'react';


export const FiftyPerSale = () => {
  const {featureProduct,winterWear}=useProductContext();
  const[fiftyper,setFiftyper]=useState();

  const  getF50sale = async (url) => {
  try {
    const res = await axios.get(url);
    setFiftyper(res.data);
  } catch (error) {
     console.log(error);
  }
  };

  useEffect(()=>{
    getF50sale('https://meeraki.com/api/v2/fifty_percent_off_deal')
  },[])

  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          title='Winter Wear'
        />

        <div className='products-items'>
          <ProductsCarousel products={winterWear} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};