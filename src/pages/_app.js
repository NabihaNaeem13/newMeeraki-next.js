import { createContext, useEffect, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/productContext';
import { WishProvider } from 'Context/wishlistContext';
import { CurrenciesProvider } from 'Context/CurrenciesContext';
import { AuthProvider } from 'Context/AuthContext';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { CardListProvider } from 'Context/CardListContext';


export const CartContext = createContext();
const MyApp = ({ Component, pageProps}) => {
  const [mycart,setMycart]=useState([]);
  const [subtotal,setsubtotal]=useState(0);
  const [progress, setProgress] = useState(0);
  const [user,setUser]=useState({value:null});
  const [user_id,setUser_id]=useState(0);
  const [key,setKey]=useState(0);
 const router=useRouter();

 
 





   useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
      console.log("load")
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(400)
      console.log("load")
    })
    console.log("hey me me!");
    try{
      if(localStorage.getItem('mycart')){
        setMycart(JSON.parse(localStorage.getItem("mycart")))
        saveCart(JSON.parse(localStorage.getItem("mycart")))
       }
    }catch(error){
       console.error(error);
       localStorage.clear()
    }
    const token=localStorage.getItem('token')
    const userId=localStorage.getItem('User');
    if(token){
      setUser({value:token})
      setUser_id(userId);
      setKey(Math.random())
    }
   },[router.query])

   const Logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('User')
    localStorage.removeItem('user_name')
    setUser({value:null})
    setKey(Math.random())
    router.push('/')
   }

  

  return (
    <>
     <LoadingBar
        color='#000 !important'
        progress={progress}
        waitingTime={100}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
    <AuthProvider>
    <CurrenciesProvider>
    <AppProvider>
    <CardListProvider>
    <WishProvider>
    <CartContext.Provider value={{Logout,user_id,mycart,setMycart,subtotal,user,key}}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </WishProvider>
    </CardListProvider>
    </AppProvider>
    </CurrenciesProvider>
    </AuthProvider>
    </>
  );
};

export default MyApp;
