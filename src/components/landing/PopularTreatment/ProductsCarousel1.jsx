import {
    SlickArrowPrev,
    SlickArrowNext,
  } from 'components/utils/SlickArrows/SlickArrows';
  import { CartContext } from 'pages/_app';
  import { useContext } from 'react';
  import Slider from 'react-slick';
  import { SingleProduct1 } from './SingleProduct1';
  
  export const ProductsCarousel1 = ({ products }) => {
    const { cart, setCart } = useContext(CartContext);
  
  
    const settings = {
      dots: false,
      infinite: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <SlickArrowPrev />,
      nextArrow: <SlickArrowNext />,
      lazyLoad: 'progressive',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <>
        <Slider {...settings}>
          {products.map((product) => (
            <SingleProduct1
              key={product.id}
              product={product}
            />
          ))}
        </Slider>
      </>
    );
  };
  