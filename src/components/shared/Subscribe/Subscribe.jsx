import { SubcriptionSchema } from "Schemas";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
  email:""
  }

export const Subscribe = () => {


  const onSubmit = async (values,action) =>{
    const{...data}=values;
    try{
     const response = await axios.post("https://meeraki.com/api/v2/subscribers/store",data);
     if (response.data.status === true) {
       toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       formik.resetForm();
     }else {
       toast.error(response.data.message, {
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
    }catch (err) {
     console.log(err);
   }
   };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema:SubcriptionSchema
  });

  return (
    <>
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <ToastContainer/>
      <div className='subscribe'>
        <div className='wrapper'>
          <div className='subscribe-form' id="post-leave-formbg">
            <form className="text-center mt-5 mb-5" onSubmit={formik.handleSubmit}>
              <h3>Stay in touch</h3>
              <p>Meeraki is a fashion brand created especially for young and lively youth.</p>
              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email'
                    name="email"
                    autoComplete='off' 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                     {formik.errors.email && formik.touched.email ? (
                        <p style={{color:"red",fontSize:"1rem"}}>{formik.errors.email}</p>
                    ) : null}
                </div>
                <button type='submit' className='btn'>
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
    </>
  );
};
