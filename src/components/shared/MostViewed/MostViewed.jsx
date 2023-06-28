import { useProductContext } from 'Context/ProductContext';
import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const MostViewed = ({ additionalClass }) => {
  const router = useRouter();
  const mostViewed = [...productData].slice(0, 6);
  const {getRelateProduct,RelatedProucts}=useProductContext();

  useEffect(() => {
    if (router.query.product_id) {
      getRelateProduct(`https://meeraki.com/api/v2/products/related/${router.query.product_id}`)
    }
  }, [router.query.product_id]);

  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          title='Related Products'
        />

        <div className='products-items'>
          <ProductsCarousel products={RelatedProucts} />
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};
