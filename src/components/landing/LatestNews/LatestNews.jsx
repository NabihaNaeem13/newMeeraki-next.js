import Link from 'next/link';
import { Blogs } from 'components/Blog/Blogs/Blogs';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';


export const LatestNews = ({blog}) => {
  const blogs = [...blog].slice(0, 3);
  return (
    <>
      {/* <!-- BEGIN LATEST NEWS --> */}  
      <section className='latest-news'>
        <div className='wrapper'>
          <SectionTitle
            title='Our Latest Articles & Blogs'
          />
          <Blogs blogs={blogs} />
        </div>
        <div className='latest-news__btn'>
          <Link href='/blog'>
            <button id="viewAllbtn">View All</button>
          </Link>
        </div>
      </section>
      {/* <!-- LATEST NEWS EOF --> */}
    </>
  );
};
