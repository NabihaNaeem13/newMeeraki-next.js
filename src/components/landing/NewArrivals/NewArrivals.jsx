import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';

export const NewArrivals = (props) => {
  const newArrival = [...productData].filter(
    (arrival) => arrival.isNew === true
  );

  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          title={props.title}
        />

        <div className='products-items'>
          <ProductsCarousel products={newArrival} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};
