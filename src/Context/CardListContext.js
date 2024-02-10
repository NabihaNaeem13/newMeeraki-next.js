import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "./AuthContext";
import reducer from "../Reducer/CardListReducer";
import { useRouter } from "next/router";
import { useState } from "react";


const CardListContext = createContext();

const initialState={
    CardLoading:false,
    Card_list:[],
    isError:false
}

const CardListProvider = ({ children }) => {
  const [subtotal,setsubtotal]=useState();
    const [state,dispatch]=useReducer(reducer,initialState);
    const router=useRouter();

    const AddTOCard=async(userId,product_id,variant,quantity,user_token)=>{
      const user_id= parseInt(userId)
      console.log("k")
      try{
        const res=await axios.post("https://meeraki.com/api/v2/carts/add",{user_id,product_id,variant,quantity},
        {
          headers: {
            Authorization: 'Bearer ' + user_token//the token is a variable which holds the token
          }
        }
       );
       if(res.data.result===true){
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
       }else{
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
      }
       console.log("res",res)
      }catch(err){
        dispatch({type:"API_ERROR"})
        console.log(err);
      }
    }

    const saveCart=(card)=>{
      subtotal=0
      let key=Object.keys(card)
      for(let i=0;i<key.length;i++){
        subtotal+=card[key[i]].price * card[key[i]].quantity
      }
      setsubtotal(subtotal)
    }

    const CardList=async()=>{
      dispatch({type:"SET_Card_LOADING"})
      try{
       const token=localStorage.getItem('token');
       const User=localStorage.getItem('User');
       const user_id= parseInt(User)
       const res=await axios.get(`https://meeraki.com/api/v2/carts/list/${user_id}`,{
        headers: {
          Authorization: 'Bearer ' + token//the token is a variable which holds the token
        }
       });
       if(res.data.status===200){
        const Card_list= await res.data.data
        localStorage.setItem("owner_id",res.data.data[0].owner_id)
        localStorage.setItem("cardList",JSON.stringify(Card_list))
        dispatch({type:"SET_API_DATA",payload:Card_list})
        saveCart(res.data.data);
       } 
       
      }catch(err){
        dispatch({type:"API_ERROR"})
        console.log(err);
      }
    }
    
    const RemoveFromCard=async(id)=>{
        try{
          const res=await axios.post(`https://meeraki.com/api/v2/carts/delete/${id}`);
          if(res.data.result===true){
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
            dispatch({type:"API_ERROR"})
        }
    }

    const BuyNow=async(userId,product_id,variant,quantity,user_token)=>{
      const user_id= parseInt(userId)
      try{
        const res=await axios.post("https://meeraki.com/api/v2/carts/add",{user_id,product_id,variant,quantity},
        {
          headers: {
            Authorization: 'Bearer ' + user_token//the token is a variable which holds the token
          }
        }
       );
       if(res.data.result===true){
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
          router.push('/checkout')
       }else{
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
      }
       console.log("res",res)
      }catch(err){
        dispatch({type:"API_ERROR"})
        console.log(err);
      }
    }

    

    useEffect(()=>{
      CardList(); 
    },[])

    return <CardListContext.Provider value={{...state,AddTOCard,RemoveFromCard,BuyNow,subtotal}}>{children}</CardListContext.Provider>;
    }

//custom hooks
const useCardlistContext = () => {
    return useContext(CardListContext);
  };

export { CardListProvider,CardListContext, useCardlistContext };