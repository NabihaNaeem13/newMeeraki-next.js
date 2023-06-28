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
import ShopProduct from 'components/landing/ShopProduct/ShopProduct';
import BookNow from 'components/landing/BookNow/BookNow';
import { useProductContext } from 'Context/ProductContext';
import { VideoPromo } from 'components/landing/VideoPromo/VideoPromo';

export default function Home() {
  const {NewArrivalProduct,formalEdit,featureProduct,Banners,Blog,HomeImage4,ImageTwo}=useProductContext();
  return (
    <Layout>
      <Banner banners={Banners}/>
      <Advantage/>
      <NewArrivals title="New Arrival Products" products={NewArrivalProduct}/>
      <ShopProduct HomeImage4={HomeImage4}/>
      <VideoPromo/>
      <NewArrivals title="Featured Products" products={featureProduct}/>
      <BookNow HomeImage4={HomeImage4}/>
      <NewArrivals title="Formal Edit Products" products={formalEdit}/>
      <LatestNews blog={Blog} />
      <Info ImageTwo={ImageTwo}/>
    </Layout>
  );
}
