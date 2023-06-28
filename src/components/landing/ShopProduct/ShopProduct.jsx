import React from 'react';
import { Blogs } from './Blogs/Blogs';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';


const ShopProduct = ({HomeImage4}) => {
  const imagedata=HomeImage4.slice(0,2);
  return (
    <>
    {/* <!-- BEGIN LATEST NEWS --> */}
    <section className='latest-news'>
      <div className='wrapper'>
      <SectionTitle
            title='Shop by Category'
          />
        <Blogs blogs={imagedata} />
      </div>
    </section>
    {/* <!-- LATEST NEWS EOF --> */}
  </>
  )
}

export default ShopProduct