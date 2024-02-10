import {
  SlickArrowPrev,
  SlickArrowNext,
} from 'components/utils/SlickArrows/SlickArrows';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import Slider from 'react-slick';
import { SingleProduct } from './SingleProduct/SingleProduct';
import { useWishlistContext } from 'Context/wishlistContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductsCarousel = ({ products }) => {
  const { mycart,setMycart } = useContext(CartContext);
  const {myWishlist}=useWishlistContext();
  const ad=Object.keys(mycart);
  const pid=parseInt(ad)
  
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

  const handleAddToCart = async(product_id,variant,quantity,price,name,sku,image) => {
    try{
      const res=await axios.post('https://portal.meeraki.com/api/v2/carts/add',{product_id,variant,quantity})
      console.log('res of product corsul',res)
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
          sessionStorage.setItem('sessionId',res.data.session)
          const newProduct = products?.find((pd) => pd.id === product_id);
          setMycart([...mycart, { ...newProduct, variation:variant,quantity: quantity,price:price,product:{name:name,sku:sku,image:image}}]);
      }
    }catch(err){
      console.log(err);
    }
   
  };

  const BuyNowCart = async(product_id,variant,quantity,price,name,sku,image) => {
    try{
      const res=await axios.post('https://portal.meeraki.com/api/v2/carts/add',{product_id,variant,quantity})
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
          setMycart([...mycart, { ...newProduct, variation:variant,quantity: quantity,price:price,product:{name:name,sku:sku,image:image}}]);
          Router.push('/checkout')
        }
      console.log("card_res",res.data.result);
    }catch(err){
      console.log(err);
    }
   
  };

  return (
    <>
      <Slider {...settings}>
        {products?products.map((product) => (
          <SingleProduct
            addedInCart={Boolean(mycart?.find((pd) => pd.id === product.id))}
            key={product.id+product.name}
            product={product}
            addInWishList={Boolean(myWishlist.product_id=== product.id)}
            onAddToCart={handleAddToCart}
            onBuyNow={BuyNowCart}
          />
        )):""}
      </Slider>
    </>
  );
};
