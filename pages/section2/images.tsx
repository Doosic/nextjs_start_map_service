/** https://nextjs.org/docs/api-reference/next/image#lazyboundary */
import type { NextPage } from 'next';
import Image from 'next/image';
// import LegacyImage from 'next/legacy/image';
import example from '/public/example.jpg';

const Images: NextPage = () => {
  return (
    <main>
      {/* <section style={{ height: '500vh' }}>long long content</section> */}

      <hr style={{ margin: '32px 0' }} />

      <h1>img tag</h1>

      <figure>
        <img
          src="/example.jpg"
          alt="example"
          width={500}
          height={100}
          loading="lazy"
        />
        <figcaption>example img</figcaption>
      </figure>

      <h1>next/image</h1>

      <figure>
        <Image
          src={example}
          alt="v13 image"
          width={500}
          height={100}
          placeholder="blur"
        />
        <figcaption>v13 image</figcaption>
      </figure>

      <figure>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 image"
          width={500}
          height={100}
        />
        <figcaption>v13 image</figcaption>
      </figure>

      <figure style={{ position: 'relative', width: '500px', height: '100px' }}>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 image"
          fill
          style={{ objectFit: 'cover' }}
        />
        <figcaption>v13 image</figcaption>
      </figure>
    </main>
  );
};

export default Images;
