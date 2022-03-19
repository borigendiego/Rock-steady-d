import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DigitalDisruptionComponent from '../components/digital-disruption';

const DigitalDisruption: NextPage = () => {
    return(
        <div>
            <Head>
                <meta></meta>
                <title>ROCK STEADY | Digital disruption</title>
            </Head>
            <main>
               <DigitalDisruptionComponent /> 
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default DigitalDisruption;