import React from 'react';
import { Blogs } from '../ShopProduct/Blogs/Blogs';

const blogs=[{
    id:1,
    image:"/DermaestheticsAssests/1 Homepage/images/specialoffer2.png",
    title:"lorem ipsum",
    subtitle:"lorem ipsum lorem ipsum",
    buttonValue:"Book Now"
},
{
    id:2,
    image:"/DermaestheticsAssests/1 Homepage/images/specialoffer.png",
    title:"lorem ipsum",
    subtitle:"lorem ipsum lorem ipsum",
    buttonValue:"Book Now"
}]

const BookNow = () => {
  return (
    <>
    {/* <!-- BEGIN LATEST NEWS --> */}
    <section className='latest-news'>
      <div className='wrapper'>
        <h1 style={{textAlign:"center",fontSize:"1.8rem",color:"#9a9291",marginBottom:"0.5rem"}}>Special Offer</h1>
        <Blogs blogs={blogs} />
      </div>
    </section>
    {/* <!-- LATEST NEWS EOF --> */}
  </>
  )
}

export default BookNow