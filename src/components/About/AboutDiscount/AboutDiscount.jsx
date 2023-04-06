import Link from 'next/link';

export const AboutDiscount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-about js-img'
        style={{ backgroundImage: `url('/DermaestheticsAssests/3 Deals/deals cover.png')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <h2>Send a gift of beauty</h2>
            <p>
              Do you know someone who is deserving of a reward? If you give someone a gift card, It's like you're giving th
            </p>
            <p className='discount-info__sm'>
              
            </p>
            <Link href='/deal'>
              <a className='btn'>Get your gift</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
