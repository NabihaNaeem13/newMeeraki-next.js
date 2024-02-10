import Link from 'next/link';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useProductContext } from 'Context/productContext';

export const Banner = () => {
  const {isBanners,Banners}=useProductContext();

  if(isBanners){
    return<div>Loading...</div>
  }
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
      <div
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <div className="col-12 bg-black">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
            {Banners.map((curElem)=>{
          const {photo,url,id}=curElem;
          return(
            <SwiperSlide  key={id+photo}>
            <img
              src={`https://meeraki.com/public/${photo}`}
              alt={url}
              style={{ width: "100%",height: "100vh" }}
            /> 
            </SwiperSlide>
          ) 
        })}
        </Swiper>
      </div>
      </div>
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
