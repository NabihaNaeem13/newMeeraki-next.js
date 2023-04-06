import Link from 'next/link';
export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div id="bg_imageground">
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
          <h1 className='main-text'>Revive Your Body</h1>
            <p>
               Renew your spirit, The perfect Detox solution 12 sessions of LPG Plus 6 sessions of fat freezing
            </p>
            <Link href='/shop'>
              <a className='btn'>Book now</a>
            </Link>
          </div>
        </div>
        <img
          className='main-block__decor'
          src='/assets/img/main-block-decor.png'
          alt=''
        />
      </div>
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
