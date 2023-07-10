import {ProductDetails} from 'components/Product/ProductDetails/ProductDetails';
import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { useRouter } from 'next/router';
import React from 'react';
import Link from "next/link";
import { Layout } from 'layout/Layout';

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

const product_id = () => {
  const router = useRouter();
  return (
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
      <ProductDetails />
      <MostViewed />
      </Layout>
  )
}

export default product_id