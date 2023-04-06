import brandData from 'data/brand/brandlogo';

export const BrandLogo = () => {
  const brandLoges = [...brandData];
  return (
    <>  
      {/* <!-- BEGIN LOGOS --> */}
      <div className='main-logos'>
         <div className='row-logo'>
          <div className='column-logo'>
              <h1 className='column-logo-h1'>2000+</h1>
              <p className='column-logo-p'>Happy Customers</p>
          </div>
          <div className='column-logo'>
              <h1 className='column-logo-h1_1'>75</h1>
              <p className='column-logo-p1'>workers</p>
          </div>
          <div className='column-logo'>
          <h1 className='column-logo-h1_1'>85</h1>
              <p className='column-logo-p'>Award Received</p>
          </div>
          <div className='column-logo'>
          <h1 className='column-logo-h1'>500+</h1>
              <p className='column-logo-p'>Customers Reviews</p>
          </div>
         </div>
      </div>
      {/* <!-- LOGOS EOF   --></img> */}
    </>
  );
};
