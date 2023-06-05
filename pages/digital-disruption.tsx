import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DigitalDisruptionComponent from '../components/digital-disruption';
import Talks from '../components/talks';


const DigitalDisruption: NextPage = () => {
    return(
        <div>
            <Head>
                <meta></meta>
                <title>ROCK STEADY | Digital disruption</title>
            </Head>
            <main className='page-bg'>
                <DigitalDisruptionComponent />
                <Talks />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default DigitalDisruption;