import { useProductContext } from 'Context/productContext';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';



const NewArrivals = (data) => {
  const {NewArrivalProduct}=useProductContext();
  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          title='New Arrival Products'
        />

        <div className='products-items'>
          <ProductsCarousel products={NewArrivalProduct} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};

export default NewArrivals;