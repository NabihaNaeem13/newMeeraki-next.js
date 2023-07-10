import { Advantage } from 'components/shared/Advantage/Advantage';
import { Banner } from 'components/landing/Banner/Banner';
import { Discount } from 'components/landing/Discount/Discount';
import { Info } from 'components/landing/Info/Info';
import { LatestNews } from 'components/landing/LatestNews/LatestNews';
import { NewArrivals } from 'components/landing/NewArrivals/NewArrivals';
import { TopCategories } from 'components/landing/TopCategories/TopCategories';
import { Trending } from 'components/landing/Trending/Trending';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Layout } from 'layout/Layout';
import {PopularTreatments} from "components/landing/PopularTreatment/PopularTreatments.jsx";
import { useProductContext } from 'Context/ProductContext';
import { VideoPromo } from 'components/landing/VideoPromo/VideoPromo';
import { Insta } from 'components/shared/Insta/Insta';

export default function Home() {
  const {NewArrivalProduct,formalEdit,Unstitched,isUnstitchedLoading,FiftyPercentSale,Banners,Blog,Sales,InstaPhoto}=useProductContext();

  return (
    <Layout>
      <Banner banners={Banners}/>
      <Advantage/>
      <NewArrivals title="New Arrival Products" products={NewArrivalProduct}/>
      <NewArrivals title="FORMAL EDIT" products={formalEdit}/>
      <NewArrivals title="Upto 50% Off" products={FiftyPercentSale}/>
      <VideoPromo/>
      {!isUnstitchedLoading && <NewArrivals title="Unstitched" products={Unstitched}/>}
      <NewArrivals title="Sale" products={Sales}/>
      <LatestNews blog={Blog} />
      <Insta/>
    </Layout>
  );
}
