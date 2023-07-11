import React from 'react'
import {OrderConfirmCheckout} from "../components/OrderConfirm/OrderConfirmCheckout";
import { PublicLayout } from 'layout/PublicLayout';

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
    label: 'Checkout',
    path: '/checkout',
  },
];
const OrderConfirm = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Checkout'>
     <OrderConfirmCheckout/>
    </PublicLayout>    
  )
}

export default OrderConfirm