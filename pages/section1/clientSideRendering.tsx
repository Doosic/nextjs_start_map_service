import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

/**
 * 일반적으로 페이지에 포함되는 컴포넌트는 서버사이드 랜더링이 되어야 한다.
 * 그러나 서버에서는 window라는 객체를 알수가 없다. 브라우저에서만 사용이 가능한 객체이기 때문이다.
 * 이때에는 일반적인 import문이 아닌 next/dynamic을 이용해서 import후 사용하면 된다.
 */
const NoSSR = dynamic(() => import('../../components/section1/NoSSR'), {
  ssr: false,
});

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) => {
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000);
    }).then((result) => setData(result));
  }, []);

  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값: {data}</p>
      <NoSSR />
    </main>
  );
};

export default Example;
