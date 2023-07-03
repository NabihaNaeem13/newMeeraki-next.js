import categoryData from 'data/category/category';
import { Categories } from './Categories/Categories';

export const Category = ({productdata}) => {
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='all-categories'>
        <div className='top-categories__items'>
          {productdata && <Categories categories={productdata} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF --> */}
    </>
  );
};
