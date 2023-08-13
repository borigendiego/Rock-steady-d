import Head from 'next/head';
import dynamic from 'next/dynamic';
//Components
import DreamBig from '../components/dream-big';
import Banner from '../components/banner';
import OurBelief from '../components/our-belief';
const Start = dynamic(() => import('../components/start-crypto'));
const Ready = dynamic(() => import('../components/ready'));
const Contact = dynamic(() => import('../components/contact'));
import How from '../components/how';
const Footer = dynamic(() => import('../components/footer'));
const Kam = dynamic(() => import('../components/kam'));
//framer
import {motion} from "framer-motion";

export default function Home() {
  return (
    <div className={'main-bg'} style={{background: 'linear-gradient(113.49deg, #A60321 -30.3%, #1F0B25 58.12%)'}}>

      <Head>
        <title>Rock Steady</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'relative z-10'}>
        <div className={'relative z-20'}>
          <Banner />
          <DreamBig />
          <How />
          <OurBelief />
          <Start />
          <motion.div 
            className={`rounded-2xl bg-[#88888899] p-4 md:max-w-[900px] mx-7 lg:mx-auto md:my-0`}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.5, delay: 0.5}}
          >
            <div className='flex'>
                <h1 className={` md:text-4xl sm:text-left text-center`}>
                  OUR
                </h1>
                <h1 className={`md:pl-3 md:text-4xl empty-font sm:text-left text-center`}>
                  MISSION
                </h1>
            </div>
            <p className='pt-3'>
                Rock Steady Digital's mission is a journey of digital transformation through a journey of creativity and innovation.
                We create a fun and energetic environment and work with our clients and partner organisations to deliver outstanding results.
                We are passionate about helping people and companies succeed through continuous improvement.
            </p>
          </motion.div>
          <Kam />
          <Ready />
          <Contact />
        </div>
       
      </main>

      <footer className={'relative z-10'}>
          <Footer />
      </footer>
    </div>
  )
}
