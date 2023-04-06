import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';

export const MostViewed = ({ additionalClass }) => {
  const mostViewed = [...productData].slice(0, 6);

  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          title='New arrival Products'
        />

        <div className='products-items'>
          <ProductsCarousel products={mostViewed} />
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};
