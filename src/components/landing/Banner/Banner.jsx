import Link from 'next/link';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export const Banner = ({banners}) => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block'>
      <div
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <div className="col-12">
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
            {banners.map((curElem)=>{
          const {photo,url,id}=curElem;
          return(
            <SwiperSlide  key={id+photo}>
            <img
              src={`https://meeraki.com/public/${photo}`}
              alt={url}
              style={{ width: "100%" }}
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
