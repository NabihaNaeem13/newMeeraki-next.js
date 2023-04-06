import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

export const Card = ({ blog }) => {
  const { title, id, image, shortDescription, date,authorName } = blog;
  return (
    <div className='blog-item-grif'>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__img'>
          <img src={image} className='js-img' alt='' />
          <Grid container spacing={0} style={{backgroundColor:"#e5eae6"}}>
          <Grid item xs><p style={{color:"#9999",fontSize:"14px"}}>Posted By<span style={{color:"#000",marginLeft:"4px"}}>{authorName}</span></p></Grid>
          <Grid item xs><p style={{textAlign:"right",fontSize:"14px",color:"#9999",textTransform:"capitalize"}}>{date.month} {date.date},2022</p></Grid>
          </Grid>
        </a>
      </Link>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__title'>{title}</a>
      </Link>
      <p>{shortDescription}</p>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__link'>
          Read more <i className='icon-arrow-md'></i>
        </a>
      </Link>
    </div>
  );
};
