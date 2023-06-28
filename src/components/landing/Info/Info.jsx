import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import {Blogs} from "./Blogs/Blogs";

export const Info = ({ImageTwo}) => {
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks mt-4'>
      <div className='wrapper'>
      <SectionTitle
            title='Special Offer'
          />
          <Blogs ImageTwo={ImageTwo}/>
      </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};

{/*<div
          className='info-blocks__item info-blocks__item-reverse js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <PromoVideo
                videoUrl={url}
                play={play}
                onVideoPlay={() => setPlay(true)}
                image='/assets/img/info-item-img2.jpg'
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>About Us</span>
              <h2>Who we are</h2>
              <span className='info-blocks__item-descr'>
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can’t refuse.
              </span>
              <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p>
              <Link href='/about'>
                <a className='info-blocks__item-link'>
                  <i className='icon-video'></i>
                  Watch video about us
                  <i className='icon-arrow-lg'></i>
                </a>
              </Link>
            </div>
          </div> */}