import { useState } from "react";
import SelectedOption from "./SelectedOption";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { InputLabel } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from "next/link";
import { useFormik } from "formik";
import { ContactSchema } from "Schemas";

const initialValues={
  name:"",
  email:"",
  phonenumber:"",
  message:""
  }

export const ContactFrom = () => {

  const {errors,values,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues,
    validationSchema:ContactSchema,
    onSubmit:(values,action)=>{
       console.log(values);
       action.resetForm();
    }
  })

  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-contacts js-img'
      >
      <div className='wrapper'>
      <div className="discount-info">
             <span className='main-text'>contact us</span>
             <p>
             - For order status inquiry, please <Link href="/trackOrder">click here</Link>
            </p>
            <p>
            - To cancel and return ordered items, please log-in with your account <Link href="https://meeraki.com/staging/users/login" style={{color: "#1b1b28"}}>here</Link> and open a ticket.
            </p>
            <p>
            - For other concerns, feel free to send us a message or contact us on below details:
            </p>
            <p>
            EMAIL:
            support@meeraki.com
            </p>
            <p>
            Store Hours:
            Monday-Saturday 9am - 10pm
            Sunday 11am - 08pm


            </p>
            <ul>
              <li className="mt-2 mb-2"><img src="/DermaestheticsAssests/1 Homepage/Footer/phone.svg" style={{width:"2rem",height:"2rem"}}/><a className="mx-4" style={{color:"#999999",fontSize:"1rem"}}>+92 308 786 9696</a></li>
              <li className="mt-2 mb-2"><img src="/DermaestheticsAssests/1 Homepage/Footer/email.svg" style={{width:"2rem",height:"2rem"}}/><a className="mx-4" style={{color:"#999999",fontSize:"1rem"}}>support@meeraki.com</a></li>
            </ul>
           </div>
      </div>
        <div className='wrapper' style={{backgroundColor:"#efcccc"}}>
          <div className='discount-info'>
            <span className='main-text mt-4' style={{textAlign:"center"}}>leave a message</span>
            <p style={{textAlign:"center"}}>
              Your email address will not be published.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First Name'
                  name="name" autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur}
                />
              </div>
              {errors.name && touched.name ?(<p className='form-error'>{errors.name}</p>):null}
              <div className='box-field'>
              <div>
              <input
                  type='text'
                  className='form-control'
                  placeholder='Phone'
                  name="phonenumber" autoComplete='off'
    value={values.phonenumber} onChange={handleChange} onBlur={handleBlur}
                />
                
   {errors.phonenumber && touched.phonenumber ?(<p className='form-error'>{errors.phonenumber}</p>):null} 
              </div>
                <div>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  autoComplete='off' name="email"
    value={values.email} onChange={handleChange} onBlur={handleBlur}
                />
                {errors.email && touched.email ?(<p className='form-error'>{errors.email}</p>):null}
                </div>
              </div>
              <div className='box-field box-field__textarea'>
                <textarea
                  className='form-control'
                  placeholder='Enter your message'
                  autoComplete='off'
                  name="message"
  value={values.message} onChange={handleChange} onBlur={handleBlur}
                ></textarea>
                 {errors.message && touched.message ?(<p className='form-error'>{errors.message}</p>):null}
              </div>
              <div className='box-field'>
              <FormControlLabel control={<Checkbox  />} label="I agree terms & condition" />
              </div>
              <button type='submit' className='btn mb-5'>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
