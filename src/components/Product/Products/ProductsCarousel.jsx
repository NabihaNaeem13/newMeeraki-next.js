import {
  SlickArrowPrev,
  SlickArrowNext,
} from 'components/utils/SlickArrows/SlickArrows';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import Slider from 'react-slick';
import { SingleProduct } from './SingleProduct/SingleProduct';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductsCarousel = ({ products }) => {
  const { cart, setCart,wishlist,setwishlist } = useContext(CartContext);
  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };

  const handleAddToWishlist =async(id,token,user_id) => {
    try{
       const res=await axios.get(`https://meeraki.com/api/v2/wishlists-add-product/${id}/${user_id}`,{
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
       });
       console.log("res",res.data.message);
       if(res.data.is_in_wishlist===true){
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
       }
    }catch(err){
      if(err.response.status===401){
        toast.error('Please login your account', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
       }
      }
  };

 

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
    <ToastContainer/>
      <Slider {...settings}>
        {products.map((product) => (
          <SingleProduct
            addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
            addedInwishCard={Boolean(wishlist?.find((pd) => pd.id === product.id))}
            key={product.id}
            product={product}
            onAddToWish={handleAddToWishlist}
            onAddToCart={handleAddToCart}
          />
        ))}
      </Slider>
    </>
  );
};
