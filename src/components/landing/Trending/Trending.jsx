import {ProductsCarousel}  from './ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import productData from 'data/product/product';
import { BrandLogo } from 'components/shared/BrandLogo/BrandLogo';
import PromoNumberData from 'data/promoNumber/promoNumberHome.json';


export const Trending = () => {
  const trendingProducts = [...productData];
  const promoNumber = [...PromoNumberData];
  const [products, setProducts] = useState(trendingProducts);
  const [filterItem, setFilterItem] = useState('makeup');

  useEffect(() => {
    const newItems = trendingProducts.filter((pd) =>
      pd.filterItems.includes(filterItem)
    );
    setProducts(newItems);
  }, [filterItem]);

  const filterList = [
    {
      name: 'Make Up',
      value: 'makeup',
    },
    {
      name: 'SPA',
      value: 'spa',
    },
    {
      name: 'Perfume',
      value: 'perfume',
    },
    {
      name: 'Nails',
      value: 'nail',
    },
    {
      name: 'Skin care',
      value: 'skin',
    },
    {
      name: 'Hair care',
      value: 'hair',
    },
  ];
  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      <section className='trending'>
        <div className='trending-content'>
          <SectionTitle
            title='Why We Are Proud'
            body='Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.'
          />
          <div className='promo-video__nums mb-5'>
            {promoNumber.map((promo, index) => (
              <div key={index} className='promo-video__num'>
                <span>{promo.number}</span>
                <h5>{promo.name}</h5>
              </div>
            ))}
          </div>
          <div className='tab-wrap trending-tabs'>
            <div className='products-items'>
              <ProductsCarousel products={products} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TRENDING EOF   --> */}
    </>
  );
};
