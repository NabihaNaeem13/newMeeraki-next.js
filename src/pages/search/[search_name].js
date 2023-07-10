import axios from 'axios';
import { SearchProductDetails } from 'components/Product/ProductDetails/SearchProductDetails';
import { Layout } from 'layout/Layout';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Link from "next/link";

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  }
];

const Search_name = () => {
  const router = useRouter();
  return (
    <>
      <Layout>
      <div style={{marginTop:"10rem",textAlign:"left"}}>
   {breadcrumbsData && (
              <ul className='bread-crumbs' style={{justifyContent:"left",alignItems: "flex-start"}}>
                {breadcrumbsData?.map(({ path, label }, i) => {
                  return (
                    <React.Fragment key={i}>
                      {path === router.asPath ? (
                        <li className='bread-crumbs__item'>{label}</li>
                      ) : (
                        <li className='bread-crumbs__item'>
                          <Link href={path}>
                            <a className='bread-crumbs__link'>{label}</a>
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            )}
   </div>
      <SearchProductDetails/>
      </Layout>
    </>
  )
}

export default Search_name