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
import {ContactGrid} from "components/landing/contactGrid/ContactGrid";
import GetSolution from 'components/landing/GetSolution/GetSolution';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Advantage />
      <ShopProduct/>
      <NewArrivals title="New Arrival Products"/>
      <PopularTreatments title="Our Popular Treatments"/>
      <Info />
      <BookNow/>
      <Trending />
      <LatestNews />
      <ContactGrid/>
      <GetSolution/>
    </Layout>
  );
}
