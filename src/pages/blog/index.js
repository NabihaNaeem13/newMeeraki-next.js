import { Blog } from 'components/Blog/Blog';
import GetSolution from 'components/landing/GetSolution/GetSolution';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
];
const BlogPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Blog'>
      <Blog/>
    </PublicLayout>
  );
};

export default BlogPage;
