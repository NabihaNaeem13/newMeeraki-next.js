import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PostComment } from './PostComment/PostComment';
import { PostContent } from './PostContent/PostContent';
import { useProductContext } from 'Context/ProductContext';

export const Post = () => {
  const {getBlogDetail,BlogDetail}=useProductContext();
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      getBlogDetail(`https://meeraki.com/api/v2/blogs/${router.query.id}`)
    }
  }, [router.query.id]);

  if (!BlogDetail) return <></>;

  return (
    <>
      {/* <!-- BEGIN POST --> */}
      <div className='post'>
        <div className='wrapper'>
          <PostContent blog={BlogDetail} />
        </div>
      </div>
      {/* <!-- POST EOF   --> */}
    </>
  );
};
