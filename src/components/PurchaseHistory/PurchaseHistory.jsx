import React, { useState } from 'react';
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart, FaTruck} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText} from "react-icons/ai";
import {HiOutlineUser,HiDownload} from "react-icons/hi";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import axios from 'axios';
import { PurchaseHistoryModel } from './PurchaseHistoryModel';
import { useProductContext } from 'Context/ProductContext';



export const PurchaseHistory = () => {
  const {Logout,name}=useContext(CartContext);
  const {PurchaseHistory,isPurchaseHistoryLoading}=useProductContext();
  const router = useRouter();


  if(isPurchaseHistoryLoading){
    return(
      <div>Loading...</div>
    )
    }

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/login')
    }
  },[])


  return (
    <>
        <section className='py-5 container'>
        <div className="row">
        <div className="col-3 remove-col">
         <div className='card'>
            <div className='d-flex'>
            <a className='col-sm-10 h5 px-2' onClick={Logout}><FaSignOutAlt id='logout1'/></a>
                <div className='col-sm-2 text-center'><FaTimes/></div>
            </div>
            <div className='text-center'>
             <FaUserCircle className='fs-1' style={{color:"#dee2e6"}}/>
             <h1 className='h5'>{name?name:'My Account'}</h1>
            </div>
            <ul className="list-group">
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/dashboard')}><SlHome className='aiz-side-nav-icon'/>
Dashboard</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/purchase_history')}><AiOutlineFileText className='aiz-side-nav-icon'/>
Purchase History</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/trackOrder')}>
<FaTruck className='aiz-side-nav-icon'/>Track Order</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/wishlist')}>
<FaRegHeart className='aiz-side-nav-icon'/>Wishlist</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/support_ticket')}>
<FaBattleNet className='aiz-side-nav-icon'/>
Support Ticket</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/manage_profile')}>
<HiOutlineUser className='aiz-side-nav-icon'/>Manage Profile</a>
</ul>
         </div>
        </div>
        <div className="col-md-8">
        <div class="aiz-user-panel">
				    <div class="card">
        <div class="card-header">
            <h5 class="mb-0 h6">Purchase History</h5>
        </div>

        <div className='cart'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col' style={{width: "21%"}}>Code</div>
                <div className='cart-table__col'>Date</div>
                <div className='cart-table__col'>Amount</div>
                <div className='cart-table__col'>Delivery Status</div>
                <div className='cart-table__col'>Payment Status</div>
                <div className='cart-table__col'>Options</div>
              </div>
              {PurchaseHistory.map((purchase)=>{
                 return(
                  <div className='cart-table__row' key={purchase.id}>
              <div className='cart-table__col' style={{width: "23%"}}>
              {purchase.code}
              </div>
              <div className='cart-table__col'>
              {purchase.date}
              </div>
              <div className='cart-table__col'>
              {purchase.grand_total}
              </div>
              <div className='cart-table__col'>
              {purchase.delivery_status_string}
              </div>
              <div className='cart-table__col'>
              {purchase.payment_status_string}
              </div>
              <div className='cart-table__col d-flex' style={{gap:"1rem"}}>
              <PurchaseHistoryModel purchase_Id={purchase.id}/>
              <a class="btn btn-soft-warning btn-icon btn-circle btn-sm" href={`https://meeraki.com/invoice/${purchase.id}`} title="Download Invoice">
                         <HiDownload/>
              </a>
              </div>
              </div>
                 )
              })}
          
              </div>
              </div>
              </div>
              </div>
            </div>
            </div>
            </div>
           </div>
        </section>
    </>
  )
}
