
import { Inter } from 'next/font/google'
import SimpleSlider from '@/components/SimpleSlider'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'

export default function Home() {
  return (
  <>
      <Head>
        <title>Eliza-k</title>
        <meta name="description" content="Eliza-k home page" />
        <meta name="keywords" content="eliza, eliza-k, home" />
        <meta property="og:title" content="Eliza-k premium furniture" key="title" />
      </Head>
    <SimpleSlider />
  </>
  );
}
