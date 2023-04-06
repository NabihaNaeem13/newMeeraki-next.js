import { ProductsCarousel1 } from './ProductsCarousel1';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/popular.json';

export const PopularTreatments = (props) => {
  const newArrival = [...productData]
  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals mt-4'>
        <SectionTitle
          title={props.title}
        />

        <div className='products-items'>
          <ProductsCarousel1 products={newArrival} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};
