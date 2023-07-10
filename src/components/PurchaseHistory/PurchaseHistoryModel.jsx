import React,{ useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {FiFileText} from 'react-icons/fi';
import {HiEye,HiOutlineNewspaper} from "react-icons/hi";
import {BsClipboard2Check} from 'react-icons/bs';
import {FaTruck} from "react-icons/fa";
import { useEffect } from 'react';
import axios from 'axios';
import { getURL } from 'next/dist/shared/lib/utils';

const style = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


export const PurchaseHistoryModel = ({purchase_Id}) => {
    const handleClose = () => setOpenPurchaseDetail(false);
    const [openPurchaseDetail, setOpenPurchaseDetail] = useState(false);
    const [purchaseDetail,setPurchaseDetail]=useState({});
    const [shipping_address,setShipping_address]=useState({});
    const [products,setProducts]=useState({});
    console.log("abcd",products.product_name);

    const getPurchaseDetailData=async()=>{
        try{
          const res=await axios.get(`https://meeraki.com/api/v2/purchase-history-details/${purchase_Id}`)
          const response=await axios.get(`https://meeraki.com/api/v2/purchase-history-items/${purchase_Id}`)
          console.log("response",response.data.data);
          setPurchaseDetail(res.data.data[0])
          setShipping_address(res.data.data[0].shipping_address)
          setProducts(response.data.data[0])
        }catch(err){
           console.log(err);
        } 
      }
    
      const handleOpen = () =>{
        setOpenPurchaseDetail(true)
        if(setOpenPurchaseDetail===false){
            setPurchaseDetail({})
            setShipping_address({})
            setProducts({})
        }else{ 
            getPurchaseDetailData(purchaseDetail)
        }
        
    };

  return (
    <div>
    <button className="btn btn-soft-info btn-icon btn-circle btn-sm" onClick={handleOpen}><HiEye/></button>
    <Modal
      open={openPurchaseDetail}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{zIndex:"2000",overflow:'scroll'}}
    >
      <Box sx={style}>
      <div className="container mt-3">
          <div className='bg-white'>
          <div id="order-details-modal-body">
               <div className="modal-header">
                  <h5 className="modal-title">Order Id:{purchaseDetail.code}</h5>
               </div>


<div className="modal-body gry-bg px-1 pt-1">
  <div className="py-4">
      <div className="row gutters-5 text-center aiz-steps">
          <div className="col  done ">
              <div className="icon">
                  <FiFileText/>
              </div>
              <div className="title fs-12">Order placed</div>
          </div>
          <div className="col ">
              <div className="icon">
                 <HiOutlineNewspaper/>
              </div>
            <div className="title fs-12">Confirmed</div>
          </div>
          <div className="col ">
              <div className="icon">
                 <FaTruck/>
              </div>
              <div className="title fs-12">On delivery</div>
          </div>
          <div className="col ">
              <div className="icon">
                  <BsClipboard2Check/>
              </div>
              <div className="title fs-12">Delivered</div>
          </div>
      </div>
  </div>
  <div className="card mt-4">
      <div className="card-header">
        <b className="fs-15">Order Summary</b>
      </div>
      <div className="card-body">
          <div className="row">
              <div className="col-lg-6">
                  <table className="table table-borderless">
                      <tbody><tr>
                          <td className="w-50 fw-600">Order Code:</td>
                          <td>{purchaseDetail.code}</td>
                      </tr>
                      <tr>
                          <td className="w-50 fw-600">Customer:</td>
                          <td>{shipping_address.name}</td>
                      </tr>
                      <tr>
                          <td className="w-50 fw-600">Email:</td>
                                                          <td>mahwish11ali@gmail.com</td>
                                                  </tr>
                      <tr>
                          <td className="w-50 fw-600">Shipping Address:</td>
                          <td>{shipping_address.address},{shipping_address.city},{shipping_address.postal_code},{shipping_address.country}</td>
                      </tr>
                  </tbody></table>
              </div>
              <div className="col-lg-6">
                  <table className="table table-borderless">
                      <tbody><tr>
                          <td className="w-50 fw-600">Order Date:</td>
                          <td>{purchaseDetail.date} 22:58 PM</td>
                      </tr>
                      <tr>
                          <td className="w-50 fw-600">Order Status:</td>
                          <td>{purchaseDetail.delivery_status_string}</td>
                      </tr>
                      <tr>
                          <td className="w-50 fw-600">Total order amount:</td>
                          <td>{purchaseDetail.subtotal}</td>
                      </tr>
                      <tr>
                          <td className="w-50 fw-600">Shipping method:</td>
                          <td>{purchaseDetail.shipping_type_string}</td>
                      </tr>
                      <tr>
                          <td className="w-50 fw-600">Payment method:</td>
                          <td>{purchaseDetail.payment_type}</td>
                      </tr>
                  </tbody></table>
              </div>
          </div>
      </div>
  </div>
  <div className="row">
      <div className="col-lg-9">
          <div className="card mt-4">
              <div className="card-header">
                <b className="fs-15">Order Details</b>
              </div>
              <div className="card-body pb-0">
                  <table className="table table-borderless table-responsive">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th width="30%">Product</th>
                              <th>Variation</th>
                              <th>Quantity</th>
                              <th>Delivery Type</th>
                              <th>Price</th>
                                                          </tr>
                      </thead>
                      <tbody>
                                                          <tr>
                                  <td>1</td>
                                  <td>
                                                                                  <a href="https://meeraki.com/product/maroon-f0p8j" target="_blank">{products.product_name}</a>
                                                                          </td>
                                  <td>
                                  {products.variation}
                                  </td>
                                  <td>
                                  {products.quantity}
                                  </td>
                                  <td>
                                                                                  Home Delivery
                                                                          </td>
                                  <td>{products.price}</td>
                                                                  </tr>
                                                  </tbody>
                  </table>
              </div>
          </div>
      </div>
      <div className="col-lg-3">
          <div className="card mt-4">
              <div className="card-header">
                <b className="fs-15">Order Ammount</b>
              </div>
              <div className="card-body pb-0">
                  <table className="table table-borderless">
                      <tbody>
                          <tr>
                              <td className="w-50 fw-600">Subtotal</td>
                              <td className="text-right">
                                  <span className="strong-600">{purchaseDetail.subtotal}</span>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-50 fw-600">Shipping</td>
                              <td className="text-right">
                                  <span className="text-italic">{purchaseDetail.shipping_cost}</span>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-50 fw-600">tax</td>
                              <td className="text-right">
                                  <span className="text-italic">{purchaseDetail.tax}</span>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-50 fw-600">Coupon</td>
                              <td className="text-right">
                                  <span className="text-italic">{purchaseDetail.coupon_discount}</span>
                              </td>
                          </tr>
                          <tr>
                              <td className="w-50 fw-600">TOTAL</td>
                              <td className="text-right">
                                  <strong><span>{purchaseDetail.grand_total}</span></strong>
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
      </Box>
    </Modal>
  </div>
  )
}
