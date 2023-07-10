import React,{ useState } from 'react'
import Slider from 'react-slick';


const ImageSlider = ({productimage}) => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
  return (
    <div className='product-slider'>
              <div className='product-slider__main'>
                <Slider
                  fade={true}
                  asNavFor={nav2}
                  arrows={false}
                  lazyLoad={true}
                  ref={(slider1) => setNav1(slider1)}
                >
               {productimage && productimage.map((img,index)=>{
                return(
                    <div key={index} className='product-slider__main-item'>
                      <img src={`https://meeraki.com/public/${img}`} alt='product' />
                    </div>
                )
               })}
                </Slider>
              </div>

              {/* <!-- Product Slide Nav --> */}
              <div className='product-slider__nav'>
                <Slider
                  arrows={false}
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {productimage && productimage.map((img, index) => (
                    <div key={index} className='product-slider__nav-item'>
                      <img src={`https://meeraki.com/public/${img}`} alt='product' />
                    </div>
                  ))}
                </Slider>
              </div>

    </div>
  )
}

export default ImageSlider

/*   <div className='products-item__type'>
                          <span className='products-item__sale'><FaRegHeart style={{fontSize:"2rem"}}/></span>
                      </div> */