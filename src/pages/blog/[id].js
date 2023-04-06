import { Post } from 'components/Blog/Post/Post';
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
  {
    label: 'Post',
    path: '/post',
  },
];
const PostPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Blog'>
      <Post />
    </PublicLayout>
  );
};

export default PostPage;
