import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const SubCategories = () => {
    const router = useRouter();
    const [productdata,setProductData]=useState([]);
    console.log("router.query",router.query.category_name);
    useEffect(()=>{
        if(router.query.category_name){
            setProductData(router.query.category_name)
        }
    },[router.query.category_name])
  return (
    <div>SubCategories{productdata}</div>
  )
}
