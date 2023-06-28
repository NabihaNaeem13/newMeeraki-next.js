import Link from 'next/link';

export const PostContent = ({blog}) => {
  const {banner,long_description,created_at,meta_title}=blog;
  return (
    <>
      <div className='post-top'>
        <h2>{blog.title}</h2>
        <p>{blog.subTitle}</p>
        <img src={`https://meeraki.com/public/${banner}`} className='js-img' alt='' />
        <ul className='post-top__info'>
          <li className='post-top__date'>
            <i className='icon-date'></i>
           {created_at}
          </li>
        </ul>
      </div>
      <div className='post-content'>
        <p><div
      dangerouslySetInnerHTML={{__html: long_description}}/></p>

      </div>
      <div className='post-bottom'>
        <div className='post-bottom__info'>
          <div className='post-bottom__tags'>
            <span>Tags:</span>
            <ul>
            {meta_title}
            </ul>
          </div>
          <div className='contacts-info__social'>
            <span>Share:</span>
            <ul>
              <li>
                <a href='#/'>
                  <i className='icon-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-insta'></i>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-in'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

/*
   {blog.postList.map((list, index) => (
            <li key={index}>
              <span>{list.title}</span>
              {list.content}
            </li>
          ))}

           {blog.tags.map((tag, index) => (
                <li key={index}>
                  <Link href='#/'>
                    <a>{tag.title}</a>
                  </Link>
                </li>
              ))}

                <div className='post-bottom__nav'>
          <a href='#/'>
            <i className='icon-arrow'></i>previous post
          </a>
          <a href='#/'>
            next post<i className='icon-arrow'></i>
          </a>
        </div>
*/