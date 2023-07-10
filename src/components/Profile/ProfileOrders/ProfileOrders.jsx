import orderData from 'data/orders/orders';
import { useState } from 'react';
import { Card } from './Card/Card';
import { useProductContext } from 'Context/ProductContext';

export const ProfileOrders = ({Orders}) => {
  const {PurchaseHistory,isPurchaseHistoryLoading}=useProductContext();
  console.log("PurchaseHistory",PurchaseHistory);
  const [active, setActive] = useState(-1);
  const orders = [...orderData];
  const handleCollapse = (indx) => {
    if (active === indx) {
      setActive(-1);
    } else {
      setActive(indx);
    }
  };

  if(isPurchaseHistoryLoading){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <>
      <div className='profile-orders'>
        <div className='profile-orders__row profile-orders__row-head'>
          <div className='profile-orders__col'>Code</div>
          <div className='profile-orders__col'>Date</div>
          <div className='profile-orders__col'>Amount</div>
          <div className='profile-orders__col'>Payment method</div>
          <div className='profile-orders__col'>Delivery status</div>
          <div className='profile-orders__col'>Options</div>
        </div>
        {PurchaseHistory.map((order, index) => (
          <Card
            key={index}
            index={index}
            onCollapse={handleCollapse}
            order={order}
            active={active}
          />
        ))}
      </div>
    </>
  );
};
