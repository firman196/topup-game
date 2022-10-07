import Head from 'next/head'
import { useEffect } from 'react';
import AOS from 'aos';
import MainBanner from '../components/MainBanner';
import Navbar from '../components/Navbar';
import TransactionStep from '../components/TransactionStep';
import FeaturedGame from '../components/FeaturedGame';
import Reached from '../components/Reached';
import Story from '../components/Story';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
       <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:title" content="StoreGG - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:image" content="https://imageurlkalian" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}
