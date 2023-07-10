import { useProductContext } from 'Context/ProductContext';
import { Category } from 'components/Category/Category';
import { SubCategories } from 'components/SubCategories/SubCategories'
import { PublicLayout } from 'layout/PublicLayout'
import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Category_name = () => {
    const router = useRouter();
    const [productdata,setProductData]=useState();
    const {basics,NewArrivalProduct,formalEdit,readyToWear,winterWear,festivePret,Sales,Unstitched}=useProductContext();
    console.log("productdata",productdata);
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
          label: `${router.query.category_name}`,
          path: `/subcategory/${router.query.category_name}`,
        },
      ];

      useEffect(()=>{
        if(router.query.category_name==='Basics'){
            setProductData(basics);
        }
        else if(router.query.category_name==='SALE'){
            setProductData(Sales);
        }
        else if(router.query.category_name==='New Arrivals'){
            setProductData(NewArrivalProduct);
        }
        else if(router.query.category_name==='Formal Edit'){
            setProductData(formalEdit);
        }
        else if(router.query.category_name==='Festive Pret'){
            setProductData(festivePret);
        }
        else if(router.query.category_name==='Winter Wear'){
            setProductData(winterWear);
        }
        else if(router.query.category_name==='Ready to Wear'){
            setProductData(readyToWear);
        }
        else if(router.query.category_name==='Unstitched'){
            setProductData(Unstitched);
        }
      },[router.query.category_name])
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle={router.query.category_name}>
    <Category productdata={productdata}/>
  </PublicLayout>
  )
}

export default Category_name