import { createContext, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/ProductContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useRef } from 'react';

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  const [wishlist,setwishlist] = useState([]);
  const [user,setUser]=useState({value:null});
  const [user_id,setUser_id]=useState(0);
  const [name,setName]=useState(0);
  const [key,setKey]=useState(0);
 const router=useRouter();

 const getWishlist=async(url)=>{
  const user_token=localStorage.getItem('token')
 try{
   const res=await axios.get(url,{
       headers: {
         Authorization: 'Bearer ' + user_token//the token is a variable which holds the token
       }
      });
      if(res.data.success===true){
       setwishlist(res.data.data);
      } 
 }
 catch(err){
console.log(err)
 }
}

const getCardList=async(url)=>{
  const user_token=localStorage.getItem('token')
  try{
    const res=await axios.get(url,{
      headers: {
        Authorization: 'Bearer ' + user_token//the token is a variable which holds the token
      }
     });
     if(res.data.success===true){
      setCart(res.data.data);
     } 
  }catch(err){
    console.log(err);
  }
}
const Logout=()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('User')
  localStorage.removeItem('user_name')
  setUser({value:null})
  setKey(Math.random())
  router.push('/')
 }
  useEffect(()=>{
    const token=localStorage.getItem('token')
    const userId=localStorage.getItem('User');
    const user_name=localStorage.getItem('user_name');
    const timeoutId = setTimeout(() => {
      // Perform some task
      if (token) {
        setUser({ value: token });
        getWishlist(`https://meeraki.com/api/v2/wishlists/${userId}`)
        getCardList(`https://meeraki.com/api/v2/carts/list/${userId}`)
        setUser_id(userId);
        setKey(Math.random());
        setName(user_name);
    }
    }, 2000);
    return () => {
      clearTimeout(timeoutId); // Cancel the timeout on component unmount
    };
  },[router.query])
  return (
    <AppProvider>
    <CartContext.Provider value={{ cart, setCart,Logout,wishlist,setwishlist,user,name,user_id,key}}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </AppProvider>
  );
};

export default MyApp;
