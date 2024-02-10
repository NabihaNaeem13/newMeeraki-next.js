import { Banner } from 'components/landing/Banner/Banner';
import { Info } from 'components/landing/Info/Info';
import { LatestNews } from 'components/landing/LatestNews/LatestNews';
import NewArrivals  from 'components/landing/NewArrivals/NewArrivals';
import { TopCategories } from 'components/landing/TopCategories/TopCategories';
import { Layout } from 'layout/Layout';
import { EndOFSeason } from 'components/landing/EndOFSeason/EndOFSeason';
import { FeatureProducts } from 'components/landing/FeaturedProducts/FeaturedProducts';
import { FormalEdit } from 'components/landing/FormalEdit/FormalEdit';


export default function Home() {
  return (
    <Layout>
      <Banner />
      <NewArrivals/>
      <FeatureProducts/>
      <Info />
      <FormalEdit/>
      <EndOFSeason/>
      <TopCategories />
      <LatestNews />
    </Layout>
  );
}


