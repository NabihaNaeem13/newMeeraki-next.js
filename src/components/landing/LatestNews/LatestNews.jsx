import Link from 'next/link';
import { Blogs } from 'components/Blog/Blogs/Blogs';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import blogData from 'data/blog/blog';
import styled from 'styled-components';

export const LatestNews = () => {
  const blogs = [...blogData].slice(0, 3);
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
            <Viewallbtn>View All</Viewallbtn>
          </Link>
        </div>
      </section>
      {/* <!-- LATEST NEWS EOF --> */}
    </>
  );
};

const Viewallbtn=styled.button({
  border:"1px solid #999999",
  height: "60px",
  lineHeight: "59px",
  outline: "none",
  background:"transparent",
  padding: "0 50px",
  fontWeight: "bold",
  fontSize: "14px",
  color: "#999999",
  textTransform: "uppercase",
  display: "inlineBlock",
  transition: "all 0.3s linear",
  fontFamily: "Lato",
  borderRadius:"10px"
})