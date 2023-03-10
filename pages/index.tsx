import { Fragment, useEffect } from 'react';
import MapSection from '../components/home/MapSection';
import HomeHeader from '../components/home/Header';
import { Store } from '../types/store';
import DetailSection from '../components/home/DetailSection';
import useStores from '../hooks/useStores';
import { NextPage } from 'next';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <HomeHeader />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  /** TODO: next api routes로 불러오기 */
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
