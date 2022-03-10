import Head from 'next/head';
import Header from '../components/header';
import DreamBig from '../components/dream-big';
import Banner from '../components/banner';
import OurBelief from '../components/our-belief';
import Start from "../components/start-crypto";
import Ready from "../components/ready";
import Contact from "../components/contact";
import How from "../components/how";
import Footer from "../components/footer";
import Kam from '../components/kam';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rock Steady</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <DreamBig />
        <How />
        <OurBelief />
        <Start />
        <Kam />
        <Ready />
        <Contact />
      </main>

      <footer>
          <Footer />
      </footer>
    </div>
  )
}
