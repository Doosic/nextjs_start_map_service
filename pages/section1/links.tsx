import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);

  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps Button
      </button>

      {/* <div style={{ height: '200vh' }} />

      <Link href="/section1/getStaticProps">/getStaticProps</Link> */}
    </main>
  );
}