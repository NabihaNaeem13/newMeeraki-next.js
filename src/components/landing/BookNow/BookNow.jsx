import React from 'react';
import { Blogs } from '../ShopProduct/Blogs/Blogs';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';

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

const BookNow = ({HomeImage4}) => {
  const imagedata=HomeImage4.slice(2,4);
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

export default BookNow