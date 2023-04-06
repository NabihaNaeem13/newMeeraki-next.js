import React from 'react';
import { Blogs } from './Blogs/Blogs';

const blogs=[{
    id:1,
    image:"/DermaestheticsAssests/1 Homepage/images/img2.png",
    title:"lorem ipsum",
    subtitle:"lorem ipsum lorem ipsum",
    buttonValue:"Shop Now"
},
{
    id:2,
    image:"/DermaestheticsAssests/1 Homepage/images/img1.png",
    title:"lorem ipsum",
    subtitle:"lorem ipsum lorem ipsum",
    buttonValue:"Shop Gift"
}]

const ShopProduct = () => {
  return (
    <>
    {/* <!-- BEGIN LATEST NEWS --> */}
    <section className='latest-news'>
      <div className='wrapper'>
        <Blogs blogs={blogs} />
      </div>
    </section>
    {/* <!-- LATEST NEWS EOF --> */}
  </>
  )
}

export default ShopProduct