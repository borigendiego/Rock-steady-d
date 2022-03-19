import React from 'react';
//import styles from './about.module.scss';

const About = () => {
    return(
        <div className={'page-bg'}>
            <a href='/' className='float-right relative right-16 top-8 text-lg'>&#9735; GO BACK TO HOME PAGE</a>
            <div className={`flex h-screen`}>
                <div className='w-1/2 flex flex-col items-center relative justify-center pt-32'>
                    <img alt={'My photo'} src={'/assets/images/digital-dis.png'} className='w-2/3 rounded-md'/>
                    <div className={`bg-primary-purple py-6 px-8 w-3/5 rounded-md relative  bottom-28 left-10`}>
                        <p className='font-italic italic mt-2 opacity-70'>
                            “There are currently over 200 million users of Blockchain technology worldwide. 
                            Based on provable math by 2024 there will be a billion users of Blockchain and by the end of the decade 3 billion users”. 
                        </p>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-center pl-8'>
                    <h2 className='empty-font text-4xl'>Digital Disruption through</h2>
                    <h2 className='empty-font text-4xl'>Blockchain Technology</h2>
                    <p className={'pt-6 opacity-50 w-5/6'}>
                        {"Surely you would have heard by now the amount of digital disruption the Blockchain is causing in the world of Finance through DeFi, Asset Management through NFT’s, gaming & social media via the Metaverse..."}
                    </p>
                    <p className={'pt-6 opacity-50 w-5/6'}>
                        Rock Steady is ready to help you and your business thrive in this new industry and take advantage of starting in this growth industry whilst it’s in its infancy. Just imagine if you started a .com when the Internet began! Well, you have the opportunity now to start or grow your business in the Blockchain industry with us at Rock Steady Digital.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;