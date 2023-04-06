import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { ProductDetails } from 'components/Product/ProductDetails/ProductDetails';

const { ShopLayout } = require('layout/ShopLayout');

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'Product',
    path: '/product',
  },
];
const SingleProductPage = () => {
  return (
    <ShopLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
      <ProductDetails />
      <MostViewed additionalClass='product-viewed' />
    </ShopLayout>
  );
};

export default SingleProductPage;
