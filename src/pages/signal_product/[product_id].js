import {ProductDetails} from 'components/Product/ProductDetails/ProductDetails';
import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { ShopLayout } from 'layout/ShopLayout';
import React from 'react'
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
  return (
    <ShopLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Product'>
      <ProductDetails />
      <MostViewed />
    </ShopLayout>
  )
}

export default product_id