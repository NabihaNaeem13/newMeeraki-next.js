import Link from 'next/link';
import { Blogs } from 'components/Blog/Blogs/Blogs';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import blogData from 'data/blog/blog';
import { useProductContext } from 'Context/productContext';

export const LatestNews = () => {
  const {Blog}=useProductContext();
  return (
    <>
      {/* <!-- BEGIN LATEST NEWS --> */}
      <section className='latest-news'>
        <div className='wrapper'>
          <SectionTitle
            subTitle='Our Blog'
            title='The Latest News At Meeraki'
           
          />
          <Blogs blogs={Blog} />
        </div>
      </section>
      {/* <!-- LATEST NEWS EOF --> */}
    </>
  );
};
