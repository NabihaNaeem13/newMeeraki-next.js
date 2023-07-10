import { PurchaseHistoryModel } from "components/PurchaseHistory/PurchaseHistoryModel";
import { HiDownload } from "react-icons/hi";

export const Card = ({ order, index, onCollapse, active }) => {
  const {code,date, delivery_status_string, grand_total,payment_type,id } = order;

  return (
    <>
      <div className={`profile-orders__item ${active === index && 'active'}`}>
        <div className='profile-orders__row'>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>code</span>
            <span className='profile-orders__item-date'>{code}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>date</span>
            <span className='profile-orders__item-addr'>{date}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>amount</span>
            <span className='profile-orders__item-price'>{grand_total}</span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>payment method</span>
            <span
              className={`profile-orders__col`}
            >
             {payment_type}
            </span>
          </div>
          <div className='profile-orders__col'>
            <span className='profile-orders__col-mob'>Delivery status</span>
            {delivery_status_string==='Cancelled'?<span className='profile-orders__item-addr' style={{color:"red"}}>{delivery_status_string}</span>:""}
            {delivery_status_string==='Order Placed'?<span className='profile-orders__item-addr'>{delivery_status_string}</span>:""}
          </div>
          <div className='profile-orders__col'>
          <PurchaseHistoryModel purchase_Id={id}/>
              <a class="btn btn-soft-warning btn-icon btn-circle btn-sm" href={`https://meeraki.com/invoice/${id}`} title="Download Invoice">
                         <HiDownload/>
              </a>
          </div>
        </div>
      </div>
    </>
  );
};
