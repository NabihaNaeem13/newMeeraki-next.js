import { Cart } from 'components/Cart/Cart';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Cart',
    path: '/cart'
  },
];
const CartPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Cart'  description="Renew your spirit, The perfect Detox solution 12 sessions of LPG Plus 6 sessions of fat freezing">
      <Cart />
    </PublicLayout>
  );
};

export default CartPage;
