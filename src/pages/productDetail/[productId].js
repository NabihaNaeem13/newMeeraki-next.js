import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'layout/Layout';
import axios from 'axios';
import { Singal_Product } from 'components/Product/ProductDetails/Singal_Product';
import { useState } from 'react';
import { Product_detail_page } from 'components/Product/ProductDetails/Product_detail_page';

const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Shop',
      path: '/shop',
    },
    {
      label: 'Singal Product',
      path: '/SingalProduct',
    },
  ];

const productId = () => {
  const [data,setData]=useState([]); 
  const router =useRouter();
  const id=router.query.productId;
  
  const getProductDetail=async()=>{
    try{
        const res=await axios.get(`https://meeraki.com/api/v2/products/${id}`);
        setData(res.data.data[0])
    }
    catch(err){
        console.log(err);
    }
  }
useEffect(()=>{
    let unmounted=false;
    setTimeout(()=>{
        getProductDetail() 
       if(!unmounted){
        return <div>Loading.....</div>
       }
    },2000)
    return()=>{
        unmounted=true;
    }
},[data])

  return (
   <Layout>
      <div style={{margin:"16rem 0rem 4rem"}}>
      <Product_detail_page data={data}/>
      </div>
   </Layout>
    
  )
}

export default productId