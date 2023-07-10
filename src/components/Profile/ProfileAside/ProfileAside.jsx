import Link from 'next/link';
import productData from 'data/product/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SubcriptionSchema } from 'Schemas';
import { useFormik } from 'formik';
import { useProductContext } from 'Context/ProductContext';

const initialValues={
  email:""
  }
export const ProfileAside = () => {
  const {readyToWear}=useProductContext();
  const recentlyViewed = [...readyToWear].slice(0, 3);
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
      <div className='profile-aside'>
        <form className='profile-aside__subscribe' onSubmit={formik.handleSubmit}>
          <h3>Stay in touch</h3>
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
          <img
            src='/assets/img/subscribe-img-decor-sm.png'
            className='js-img'
            alt=''
          />
        </form>
        <div className='profile-aside__viewed'>
          <h5>You have viewed</h5>
          {recentlyViewed.map((product) => (
            <div key={product.id} className='profile-aside__viewed-item'>
              <Link href={`/signal_product/${product.id}`}>
                <a className='profile-aside__viewed-item-img'>
                  <img src={`https://meeraki.com/public/${product.thumbnail_image}`} className='js-img' alt='' />
                </a>
              </Link>
              <div className='profile-aside__viewed-item-info'>
                <Link href={`/signal_product/${product.id}`}>
                  <a className='profile-aside__viewed-item-title'>
                    {product.name}
                  </a>
                </Link>
                <span className='profile-aside__viewed-item-price'>
                  {product.base_price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
