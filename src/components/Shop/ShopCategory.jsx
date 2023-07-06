import { Products } from 'components/Product/Products/Products';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { usePagination } from 'components/utils/Pagination/Pagination';
import Slider from 'rc-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { AsideItem } from '../shared/AsideItem/AsideItem';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import Link from "next/link";
import { useRouter } from 'next/router';

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: 'highToMin', label: 'Price high to low' },
  { value: 'minToHigh', label: 'Price low to high' },
  { value: 'Newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' }
];

const name=[
  {id:1,name:"SALE"},
  {id:2,name:"NEW ARRIVALS"},
  {id:3,name:"BASICS"},
  {id:4,name:"FORMAL EDIT"},
  {id:5,name:"FESTIVE PRET"},
  {id:6,name:"WINTER WEAR"},
  {id:7,name:"READY TO WEAR"},
  {id:8,name:"UNSTITCHED"},
]
export const ShopCategory = ({productdata}) => {
  const allProducts = [...productdata];
const router=useRouter();
  const [productOrder, setProductOrder] = useState(
    allProducts.sort((a, b) => (a.current_price < b.current_price ? 1 : -1))
  );
  const [products, setProducts] = useState(productOrder);
  const [filter, setFilter] = useState({ isNew: false, isSale: true });
  const [input,setInput]=useState();
  useEffect(() => {
    setProductOrder(productOrder);
  }, [productOrder]);



  useEffect(() => {
    if (filter.isNew && filter.isSale) {
      const newPro = productOrder.filter(
        (pd) => pd.isNew === true && pd.isSale === true
      );
      setProducts(newPro);
    } else if (filter.isNew && !filter.isSale) {
      const newPro = productOrder.filter((pd) => pd.isNew === true);
      setProducts(newPro);
    } else if (filter.isSale && !filter.isNew) {
      const newPro = productOrder.filter((pd) => pd.isSale === true);
      setProducts(newPro);
    } else {
      setProducts([...productOrder]);
    }
  }, [filter, productOrder]);

  const recentlyViewed = [...productOrder].slice(0, 3);
  const todaysTop = allProducts.sort((a,b) => new Date(a.review_date) - new Date(b.review_date)).slice(0, 5);
  const paginate = usePagination(productOrder, 9);

  const handleSort = (value) => {
    if (value === 'highToMin') {
      const newOrder = allProducts.sort((a, b) => (a.base_price < b.base_price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if (value === 'minToHigh') {
      const newOrder = allProducts.sort((a, b) => (a.base_price > b.base_price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if(value==='Newest'){
      const newOrder=allProducts.sort((a,b) => new Date(a.review_date) - new Date(b.review_date));
      setProductOrder(newOrder);
    }
    if(value==='oldest'){
      const newOrder=allProducts.sort((a,b) =>new Date(b.review_date) - new Date(a.review_date));
      setProductOrder(newOrder);
    }
  };

  return (
    <div>
      {/* <!-- BEGIN SHOP --> */}
      <div className='shop'>
      <SectionTitle
          title="Our Products"
          body="Lorem ipsum dolar sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet"
        />
        <div className='wrapper'>
          <div className='shop-content'>
            {/* <!-- Shop Aside --> */}
            <div className='shop-aside'>
              <div className='box-field box-field__search'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search'
                  name="search"
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                />
                <i className='icon-search' onClick={()=>router.push(`/search/${input}`)}></i>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Categories</span>
                <ul>
                 <li>
                  <Link href={`/shop/SALE`}>SALE</Link>
                 </li>
                 <li>
                  <Link href={`/shop/NEW ARRIVALS`}>NEW ARRIVALS</Link>
                 </li>
                 <li>
                  <Link href={`/shop/BASICS`}>BASICS</Link>
                 </li>
                 <li>
                  <Link href={`/shop/FORMAL EDIT`}>FORMAL EDIT</Link>
                 </li>
                 <li>
                  <Link href={`/shop/FESTIVE PRET`}>FESTIVE PRET</Link>
                 </li>
                 <li>
                  <Link href={`/shop/WINTER WEAR`}>WINTER WEAR</Link>
                 </li>
                 <li>
                  <Link href={`/shop/READY TO WEAR`}>READY TO WEAR</Link>
                 </li>
                 <li>
                  <Link href={`/shop/UNSTITCHED`}>UNSTITCHED</Link>
                 </li>
               </ul>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Price</span>
                <div className='range-slider'>
                  <Range
                    min={0}
                    max={20}
                    defaultValue={[0, 20]}
                    tipFormatter={(value) => `${value}$`}
                    allowCross={false}
                    tipProps={{
                      placement: 'bottom',
                      prefixCls: 'rc-slider-tooltip',
                    }}
                  />
                </div>
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>You have viewed</span>
                {recentlyViewed.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Recent Products</span>
                {todaysTop.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
            </div>
            {/* <!-- Shop Main --> */}
            <div className='shop-main'>
              <div className='shop-main__filter'>
              <div className='shop-main__checkboxes'>
                </div>
                <div className='shop-main__select'>
                  <Dropdown
                    options={options}
                    className='react-dropdown'
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div>
              </div>
              <div className='shop-main__items'>
                <Products products={paginate?.currentData()} />
              </div>

              {/* <!-- PAGINATE LIST --> */}
              <PagingList paginate={paginate} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SHOP EOF   --> */}
    </div>
  );
};
