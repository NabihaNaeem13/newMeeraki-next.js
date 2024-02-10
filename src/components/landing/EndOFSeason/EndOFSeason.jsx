import { useProductContext } from 'Context/productContext';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';


export const EndOFSeason = () => {
  const {endSeasonProduct}=useProductContext();
  console.log('endSeasonProduct',endSeasonProduct);
  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          title='End of Season'
        />

        <div className='products-items'>
          <ProductsCarousel products={endSeasonProduct} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};

