import { Blogs } from './Blogs/Blogs';
import blogData from 'data/blog/blog';
import { usePagination } from 'components/utils/Pagination/Pagination';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';

export const Blog = () => {
  const blogs = [...blogData];
  const paginate = usePagination(blogs, 3);

  return (
    <>
      {/* <!-- BEGIN BLOG --> */}
      <div className='blog'>
      <SectionTitle
          title="The Latest News At Dermaesthetics"
          body="Lorem ipsum dolar sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet"
        />
        <div className='wrapper'>
          <Blogs blogs={paginate?.currentData()} />
        </div>

        {/* <!-- PAGINATE LIST --> */}
        <PagingList paginate={paginate} />
      </div>
      {/* <!-- BEGIN EOF --> */}
    </>
  );
};
