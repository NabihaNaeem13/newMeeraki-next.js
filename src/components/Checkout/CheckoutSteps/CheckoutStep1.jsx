import { ShippingUserSchema } from 'Schemas';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/dist/client/link';
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import { BsArrowLeft } from 'react-icons/bs';
import {router,useRouter} from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const countries = [
  { label: 'Country 1', value: '1' },
  { label: 'Country 2', value: '2' },
];
const cities = [
  { label: 'city 1', value: '1' },
  { label: 'city 2', value: '2' },
];

const initialValues={
  name:"",
  email:"",
  password:"",
  phone:"",
  address:"",
  country:"country 1",
  city:"city 1",
  postal_code:""
  }

export const CheckoutStep1 = ({ onNext }) => {
  const [country,setCountry]=useState('');
  const [city,setCity]=useState('');
  const [payment_type,setPaymentType]=useState("jazzcash");
  const router = useRouter()

  const onSubmit=async(values)=>{
    const {name,email,phone,password,address,country,city,postal_code}=values;
     try{
      const token=localStorage.getItem('token')
       const User=localStorage.getItem('User')
       const user_id=parseInt(User); 
       const owner_id=localStorage.getItem('owner_id');
       const paymentUser=await axios.post('https://meeraki.com/api/v2/order/store',{user_id,owner_id,payment_type},{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
          }
       });
       console.log("paymentUser",paymentUser.data);
       const shippingUser=await axios.post('https://meeraki.com/api/v2/user/shipping/create',{user_id,address,country,city,postal_code,phone},{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
          }
        });
      const registerUser=await axios.post('https://meeraki.com/api/v2/auth/signup',{name,email,phone,password});
    
      console.log("shippingUser",shippingUser.data.message);
      if(registerUser.data.result===true){
        localStorage.setItem("User",registerUser.data.user_id)
      }
      if(paymentUser.data.result===true){
        toast.success(paymentUser.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        localStorage.setItem('order_id',paymentUser.data.order_id)
        router.push('/OrderConfirm')
        
      }else{
        toast.error(paymentUser.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

     }catch(err){
      console.log(err);
     } 
  }
  
  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema:ShippingUserSchema,
    onSubmit
  });

  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form  onSubmit={formik.handleSubmit}>
          <div className='checkout-form__item'>
            <h4>Info about you</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control box-field__input_checkout'
                placeholder='Enter your name'
                name='name'
                autoComplete='off' 
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
               {formik.errors.name && formik.touched.name ? (
                      <p className="form-error">{formik.errors.name}</p>
                    ) : null}
            </div>
            <div className='box-field'>
              <input
                type='email'
                className='form-control box-field__input_checkout'
                placeholder='Enter your email'
                name='email'
                autoComplete='off' 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                      <p className="form-error">{formik.errors.email}</p>
                    ) : null}
            </div>
            <div className='box-field'>
            <input
                   type="password"
                   id="password"
                  className='form-control box-field__input_checkout'
                  placeholder='Enter your password'
                  name="password"
                          autoComplete='off' 
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                 {formik.errors.password && formik.touched.password ? (
                      <p className="form-error">{formik.errors.password}</p>
                    ) : null}
            </div>
            <div className='box-field'>
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter your phone'
                  name='phone'
                  autoComplete='off' 
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                 {formik.errors.phone && formik.touched.phone ? (
                      <p className="form-error">{formik.errors.phone}</p>
                    ) : null}
              </div>
            </div>
            <div className='box-field'>
            <input
                  type='text'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter the address'
                  name='address'
                  autoComplete='off' 
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                      {formik.errors.address && formik.touched.address ? (
                      <p className="form-error">{formik.errors.address}</p>
                    ) : null}
              </div>
              <Dropdown
              options={countries}
              className='react-dropdown'
              name="country"
              onChange={(option) => setCountry(option.value)}
              placeholder='Select a country'
            />
             <Dropdown
              options={cities}
              className='react-dropdown'
              onChange={(option) => setCity(option.value)}
              placeholder='Select a city'
            />
              <div className='box-field'>
              <input
                  type='text'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter the Postal code'
                  name='postal_code'
                  autoComplete='off' 
                  value={formik.values.postal_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                      {formik.errors.postal_code && formik.touched.postal_code ? (
                      <p className="form-error">{formik.errors.postal_code}</p>
                    ) : null}
              </div>
          </div>
          <div className=''>
            <h4>Select a payment option</h4>
            <div className='align-items-center py-2 mb-2 smalls jazzCashgrid d-flex'>
                    <div className="payment-option-box">
                    <input value="jazzcash" className="online_payment" type="radio" name="payment_option" onChange={(e)=>setPaymentType(e.target.value)} defaultChecked/>
                    <div className="d-block p-3 payment-option-title">
                         <img src="/assets/img/jazzchash.png" className="img-fluid mb-2" alt=""/>
                         <span className="d-block text-center">
                         <span className="d-block fw-600 fs-15">Jazz Cash</span>
                         </span>
                    </div>
                    </div>
                    <div className="payment-option-box">
                    <input value="Bank_Transfar" className="online_payment" type="radio" name="payment_option" onChange={(e)=>setPaymentType(e.target.value)}/>
                    <div className="d-block p-3 payment-option-title">
                    <img src="/assets/img/banktransfar.png" className="img-fluid mb-2" alt=""/>
                                                        <span className="d-block text-center">
                                                            <span className="d-block fw-600 fs-15">Bank Transfar</span>
                                                        </span>
            </div>
           </div>        
           <div className="payment-option-box">
                    <input value="barclaycard" className="online_payment" type="radio" name="payment_option" onChange={(e)=>setPaymentType(e.target.value)}/>
                    <div className="d-block p-3 payment-option-title">
                    <img src="/assets/img/cards.png" className="img-fluid mb-2" id="ma-img" alt=""/>
                                                        <span className="d-block text-center">
                                                            <span className="d-block fw-600 fs-15">Credit/Debit Card</span>
                                                        </span>
            </div>
           </div> 
           <div className="payment-option-box">
                    <input value="cash_on_delivery" className="online_payment" type="radio" name="payment_option" onChange={(e)=>setPaymentType(e.target.value)}/>
                    <div className="d-block p-3 payment-option-title">
                    <img src="/assets/img/cod.png" className="img-fluid mb-2" alt=""/>
                                                            <span className="d-block text-center">
                                                                <span className="d-block fw-600 fs-15">Cash on Delivery</span>
                                                            </span>
            </div>
           </div> 
                    </div>
                    <div className="pt-3">
                    <label className='checkbox-box checkbox-box__sm'>
                     <input type='checkbox' />
                     <span className='checkmark' style={{marginRight:"8px"}}></span>
                     <span>By completing this order, I agree to the <Link href="/terms">Terms and Conditions</Link>,<Link href="/returnpolicy">Return Policy</Link> &amp;
                         <Link href="/privacypolicy">Privacy Policy</Link></span>
                   
                   </label>
                    </div>
          </div>

          <div className='checkout-buttons'>
            {/* <button className='btn btn-grey btn-icon'>
              {' '}
              <i className='icon-arrow'></i> back
            </button> */}
            <div className="col-6">
            <button onClick={() => router.push('/')} className="btn-link" style={{border:"none",background:"#fff",color:"#1b1b28"}}>
                                   <BsArrowLeft/>
                                    Return to shop
            </button>
            </div>
            <button type='submit' disabled={!formik.isValid} className='btn btn-icon btn-next'>
            Complete Order <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};




