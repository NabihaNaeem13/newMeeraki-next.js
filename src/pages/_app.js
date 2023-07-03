import { createContext, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/ProductContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  const [wishlist,setwishlist] = useState([]);
  const [user,setUser]=useState({value:null});
  const [user_id,setUser_id]=useState(0);
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



  useEffect(()=>{
    const token=localStorage.getItem('token')
    const userId=localStorage.getItem('User');
    getWishlist(`https://meeraki.com/api/v2/wishlists/${userId}`)
    if(token){
      setUser({value:token})
      setUser_id(userId);
      setKey(Math.random())
    }
  },[router.query])
  return (
    <AppProvider>
    <CartContext.Provider value={{ cart, setCart,wishlist,setwishlist,user,user_id,key}}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </AppProvider>
  );
};

export default MyApp;
