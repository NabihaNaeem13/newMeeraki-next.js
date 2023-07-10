import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

export const Card = ({ blog }) => {
  const { title, id, banner, short_description} = blog;
  return (
    <div className='blog-item-grif' key={blog.id+title+11}>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__img'>
          <img src={`https://meeraki.com/public/${banner}`} className='js-img' alt='' />
        </a>
      </Link>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__title'>{title}</a>
      </Link>
      <p>{short_description}</p>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__link'>
          Read more <i className='icon-arrow-md'></i>
        </a>
      </Link>
    </div>
  );
};
