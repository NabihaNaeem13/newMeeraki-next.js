import { Blogs } from './Blogs/Blogs';
import { usePagination } from 'components/utils/Pagination/Pagination';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useProductContext } from 'Context/ProductContext';

export const Blog = () => {
  const {Blog}=useProductContext();
  const paginate = usePagination(Blog, 2);
  return (
    <>
      {/* <!-- BEGIN BLOG --> */}
      <div className='blog'>
      <SectionTitle
          title="The Latest News At Meeraki"
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
