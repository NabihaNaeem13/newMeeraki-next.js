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
import Router from "next/router";

export const ProductsCarousel = ({ products }) => {
  const { cart, setCart,wishlist,setwishlist } = useContext(CartContext);
  console.log("wishlist",wishlist);
  const handleAddToCart = async(product_id,variant,quantity,price,name,sku,image) => {
    try{
      const token=localStorage.getItem('token');
      const User=localStorage.getItem('User');
      const user_id=parseInt(User);
      const res=await axios.post('https://meeraki.com/api/v2/carts/add',{user_id,product_id,variant,quantity},{
        headers: {
          Authorization: 'Bearer ' + token//the token is a variable which holds the token
        }
      })
      if(res.data.result===false){
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
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
          const newProduct = products?.find((pd) => pd.id === product_id);
          setCart([...cart, { ...newProduct, variation:variant,quantity: quantity,price:price,product:{name:name,sku:sku,image:image}}]);
      }
      console.log("card_res",res.data.result);
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
      console.log(err);
    }
   
  };

  const BuyNowCart = async(product_id,variant,quantity,price,name,sku,image) => {
    try{
      const token=localStorage.getItem('token');
      const User=localStorage.getItem('User');
      const user_id=parseInt(User);
      const res=await axios.post('https://meeraki.com/api/v2/carts/add',{user_id,product_id,variant,quantity},{
        headers: {
          Authorization: 'Bearer ' + token//the token is a variable which holds the token
        }
      })
      if(res.data.result===false){
        toast.error(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else{
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
          const newProduct = products?.find((pd) => pd.id === product_id);
          setCart([...cart, { ...newProduct, variation:variant,quantity: quantity,price:price,product:{name:name,sku:sku,image:image}}]);
          Router.push('/checkout')
        }
      console.log("card_res",res.data.result);
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
      console.log(err);
    }
   
  };
  const handleAddToWishlist =async(product_id,token,user_id,base_price,current_stock,thumbnail_image,name) => {
    console.log("id",product_id,"token",token,"user_id",user_id);
    try{
       const res=await axios.get(`https://meeraki.com/api/v2/wishlists-add-product/${product_id}/${user_id}`,{
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
          const newProduct = products?.find((pd) => pd.id === product_id);
          setwishlist([...wishlist, { ...newProduct,product:{base_price:base_price,name:name,thumbnail_image:thumbnail_image,id:product_id,current_stock:current_stock}}]);
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
            onBuyNow={BuyNowCart}
          />
        ))}
      </Slider>
    </>
  );
};
