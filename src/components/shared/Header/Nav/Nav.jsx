import { useRouter } from 'next/router';
import Link from 'next/link';
import { useProductContext } from 'Context/productContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Nav = () => {
  const [navbar,setNavbar]=useState("")
  const router = useRouter();
 const getNavbar=async(url)=>{
  try{
    const res = await axios.get(url);
    setNavbar(res.data.categories)
    
  }catch(error){
    console.log('error',error)
  }
}
useEffect(()=>{
  getNavbar('https://portal.meeraki.com/api/v2/categories/all')
},[navbar])
  if(!navbar){
    return<div>Loading.....</div>
}

  return (
    <ul className='header-nav'>
    {navbar && navbar.map((nav,index)=>{
      const {label,slug}=nav;
      return(
        <li key={index}>
          <Link href={`/${slug}`}>
            <a className={label === router.pathname ? 'active' : ''}>
              {label}
               {label==="New Arrivals"?<ul className='sub-menu'>{nav.dropdownCategories && nav.dropdownCategories.map((item)=>{
                return(
                  <li>{item.name}</li>
                )
               })}</ul>:""}
            </a>
          </Link>
          </li>
      )
    })}
     
    </ul>
  );
};
