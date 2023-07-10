import { useProductContext } from 'Context/ProductContext'
import { ShopCategory } from 'components/Shop/ShopCategory'
import { Subscribe } from 'components/shared/Subscribe/Subscribe'
import { ShopLayout } from 'layout/ShopLayout'
import { useRouter } from 'next/router'
import React,{ useState,useEffect }  from 'react'

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

const Shopcategoryname = () => {
    const router=useRouter();
    const [productdata,setProductData]=useState();
    const {readyToWear,NewArrivalProduct,formalEdit,basics,festivePret,winterWear,pieceSuit1,pieceSuit2,pieceSuit3}=useProductContext();
    useEffect(()=>{
        if(router.query.shopcategoryname==='BASICS'){
            setProductData(basics);
        }
        else if(router.query.shopcategoryname==='SALE'){
            setProductData(basics);
        }
        else if(router.query.shopcategoryname==='NEW ARRIVALS'){
            setProductData(NewArrivalProduct);
        }
        else if(router.query.shopcategoryname==='FORMAL EDIT'){
            setProductData(formalEdit);
        }
        else if(router.query.shopcategoryname==='FESTIVE PRE'){
            setProductData(festivePret);
        }
        else if(router.query.shopcategoryname==='WINTER WEAR'){
            setProductData(winterWear);
        }
        else if(router.query.shopcategoryname==='READY TO WEAR'){
            setProductData(readyToWear);
        }
        else if(router.query.shopcategoryname==='UNSTITCHED'){
            setProductData(basics);
        }
        else if(router.query.shopcategoryname==='1 Piece Suit'){
          setProductData(pieceSuit1);
      }
      else if(router.query.shopcategoryname==='2 Piece Suit'){
        setProductData(pieceSuit2);
    }
    else if(router.query.shopcategoryname==='3 Piece Suit'){
      setProductData(pieceSuit3);
  }
      },[router.query.shopcategoryname])

  return (
    <ShopLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
    {productdata && <ShopCategory productdata={productdata}/>}
    <Subscribe/>
  </ShopLayout>
  )
}

export default Shopcategoryname