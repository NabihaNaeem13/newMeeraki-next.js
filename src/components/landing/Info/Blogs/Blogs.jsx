
export const Blogs = ({ImageTwo}) => {
    return (
      <>
        {/* <!-- BEGIN  BLOG --> */}
  
        <div className='blog-items'>
          {ImageTwo.map((blog,index) =>{
            const {image_url}=blog;
            return(
                <div className='blog-item' key={index+1101}>
        <a className='blog-item__img'>
          <img src={`https://meeraki.com/public/${image_url}`} className='js-img' alt='' />
        </a>
    </div>
            )
            
          })}
        </div>
  
        {/* <!--  BLOG EOF   --> */}
      </>
    );
  };