import { Shop } from 'components/Shop/Shop';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { ShopLayout } from 'layout/ShopLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
];
const ShopPage = () => {
  return (
    <ShopLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
      <Shop />
      <Subscribe/>
    </ShopLayout>
  );
};

export default ShopPage;
