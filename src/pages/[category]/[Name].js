import axios from 'axios';
import { Product_detail_page } from 'components/Product/ProductDetails/Product_detail_page';
import { Layout } from 'layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ProductPage() {
    const [data,setData]=useState([]); 
  const router = useRouter();
  const { category, Name } = router.query;

  console.log('data',data)

  const getProductDetail=async()=>{
    try{
        const res=await axios.get(`https://portal.meeraki.com/api/v2/products/${Name}`);
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
    },1000)
    return()=>{
        unmounted=true;
    }
},[data])

  return (
    <Layout>
    <div style={{margin:"16rem 0rem 4rem"}}>
    <Product_detail_page data={data}/>
      <h1>Category: {category}</h1>
      <h2>Product Name: {Name}</h2>
    </div>
    </Layout>
  );
}

export default ProductPage;