import axios from 'axios';
import OrderConfirm from 'pages/OrderConfirm';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {FiCheckCircle} from "react-icons/fi";
const detailBlocks = [
  {
    step: 'Step 1',
    title: 'My Cart',
    icon: 'icon-step1',
  },
  {
    step: 'Step 2',
    title: 'Information',
    icon: 'icon-step2',
  },
  {
    step: 'Step 3',
    title: 'Confirmation!',
    icon: 'icon-step3',
  },
];



export const OrderConfirmCheckout = () => {
  const [activeStep, setActiveStep] = useState(3);
  const [ordermsg,setOrdermsg]=useState("");
  const getMessage=async()=>{
    try{
       const id=localStorage.getItem('order_id');
       const res=await axios.get(`https://meeraki.com/api/v2/order-confirmed/${id}`);
       if(res.status===200){
        setOrdermsg(res.data);
       }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getMessage();
  },[])
  return (
    <>
 <div className='wrapper'>
        {/* <!-- BEGIN DETAIL MAIN BLOCK --> */}
        <div className='detail-block__items'>
          {detailBlocks.map((block, index) => (
            <div
              key={index}
              className={`detail-block__item ${
                activeStep <= index && 'detail-block__item-inactive'
              }`}
            >
              <div className='detail-block__item-icon'>
                <img
                  src={
                    activeStep <= index
                      ? '/assets/img/main-text-decor2.svg'
                      : '/assets/img/main-text-decor.svg'
                  }
                  className='js-img'
                  alt=''
                />
                <i className={block.icon}></i>
              </div>
              <div className='detail-block__item-info'>
                <h6>{block.step}</h6>
                {block.title}
              </div>
            </div>
          ))}
        </div>
        {/* <!-- DETAIL MAIN BLOCK EOF --> */}
      </div>
   

    {/* <!-- BEGIN CHECKOUT --> */}
    <div classNameName='wrapper mt-5'>
    <section className="py-4 mt-5">
        <div className="container text-left">
            <div className="row">
                <div className="col-xl-8 mx-auto">
                    <div className="card shadow-sm border-0 rounded">
                        <div className="card-body">
                            <div className="text-center py-4 mb-4">
                                <FiCheckCircle className="text-success mb-3" style={{fontSize:"2.5rem"}}/>
                                <h1 className="h3 mb-3 fw-600">Thank You for Your Order!</h1>
                                <h2 className="h5">Order Code: <span className="fw-700 text-primary">{ordermsg.code && ordermsg.code}</span></h2>
                                <p className="opacity-70 font-italic">{ordermsg.message && ordermsg.message}</p>
                                   
                                
                            </div>
                            <div className="mb-4">
                                <h5 className="fw-600 mb-3 fs-17 pb-2">Order Summary</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <table className="table">
                                            <tbody><tr>
                                                <td className="w-50 fw-600">Order Code:</td>
                                                <td>20230622-17061393</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50 fw-600">Name:</td>
                                                <td>MRK-220406</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50 fw-600">Email:</td>
                                                <td>mahwish11ali@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50 fw-600">Shipping Address:</td>
                                                <td>zhxbgfkfjdaksdxbcfdb, city 1, country 1</td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    <div className="col-md-6">
                                        <table className="table">
                                            <tbody><tr>
                                                <td className="w-50 fw-600">Order Date:</td>
                                                <td>22-06-2023 17:06 PM</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50 fw-600">Order Status:</td>
                                                <td>Pending</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50 fw-600">Total order amount:</td>
                                                <td>PKR3,850.00</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50 fw-600">Shipping:</td>
                                                <td>Flat shipping rate</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50 fw-600">Payment method:</td>
                                                <td>Cash on delivery</td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5 className="fw-600 mb-3 fs-17 pb-2">Order Details</h5>
                                <div className='table-responsive-md'>
                                <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th width="30%">Product</th>
                                                <th>Variation</th>
                                                <th>Quantity</th>
                                                <th>Delivery Type</th>
                                                <th className="text-right">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                                                            <tr>
                                                    <td>1</td>
                                                    <td>
                                                                                                                    <a href="https://meeraki.com/product/mrk-220406-zva1x" target="_blank" className="text-reset">
                                                                MRK-220406
                                                            </a>
                                                                                                            </td>
                                                    <td>
                                                        Small
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                                                                                    Home Delivery
                                                                                                            </td>
                                                    <td className="text-right">PKR3,850.00</td>
                                                </tr>
                                                                                    </tbody>
                                    </table>
                                </div>
                                
                                <div className="row">
                                    <div className="col-xl-5 col-md-6 ml-auto mr-0">
                                        <table className="table ">
                                            <tbody>
                                                <tr>
                                                    <th>Subtotal</th>
                                                    <td className="text-right">
                                                        <span className="fw-600">PKR3,850.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping</th>
                                                    <td className="text-right">
                                                        <span className="font-italic">PKR0.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>tax</th>
                                                    <td className="text-right">
                                                        <span className="font-italic">PKR0.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Coupon Discount</th>
                                                    <td className="text-right">
                                                        <span className="font-italic">PKR0.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th><span className="fw-600">TOTAL</span></th>
                                                    <td className="text-right">
                                                        <strong><span>PKR3,850.00</span></strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                  </div>
    {/* <!-- CHECKOUT EOF   --> */}
  </>
  )
}
