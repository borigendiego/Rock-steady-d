import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
//Components
import DreamBig from '../components/dream-big';
import Banner from '../components/banner';
import OurBelief from '../components/our-belief';
const Start = dynamic(() => import('../components/start-crypto'));
//import Start from '../components/start-crypto';
//import Ready from '../components/ready';
const Ready = dynamic(() => import('../components/ready'));
//import Contact from '../components/contact';
const Contact = dynamic(() => import('../components/contact'));
import How from '../components/how';
//const How = dynamic(() => import('../components/how'));
//import Footer from '../components/footer';
const Footer = dynamic(() => import('../components/footer'));
//import Kam from '../components/kam';
const Kam = dynamic(() => import('../components/kam'));

export default function Home() {
  return (
    <div className={'main-bg'} style={{background: 'linear-gradient(113.49deg, #A60321 -30.3%, #1F0B25 58.12%)'}}>

      <Head>
        <title>Rock Steady</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'relative z-10'}>
        <Image
          layout={'fill'}
          className={'z-[-1] opacity-50'}
          src={'/assets/images/stars_bg.png'}
          objectFit={'cover'}
          alt={'Start'}
          objectPosition={'center'}
        />
        <Banner />
        <DreamBig />
        <How />
        <OurBelief />
        <Start />
        <Kam />
        <Ready />
        <Contact />
      </main>

      <footer className={'relative z-10'}>
          <Footer />
      </footer>
    </div>
  )
}
