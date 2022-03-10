import Tile from '.';

const DIALOG_DATA = [
    {
        id: 1,
        content: <Tile 
                    key={1}
                    image={'/assets/images/modal/marketingModal.png'}
                    title={'Marketing Campaing'}
                    text={`In today's digital marketplace, small companies have
                     the ability to win mindshare and influence their market through their websites,
                    apps and social media. We´ll provide you with the framework and
                     tools, in a long-term strategy that will fuel your growth for 5 to 10 years.`}
                />,

    },
    {
        id: 2,
        content: 
                <Tile 
                    key={2}
                    image={'/assets/images/modal/socialModal.png'}
                    title={'Social Media'}
                    text={`We help to promote businesses through a variety of
                     social media channels and SEO/SEM and Analytics attract target
                      markets and segments through websites. We generate valuable content
                       based on a solid market strategy.`}
                />,
    },
    {
        id: 3,
        content: 
                <Tile 
                    key={3}
                    image={'/assets/images/modal/blockchainModal.png'}
                    title={'Blockchain'}
                    text={`We Provide customers with innovative solutions to
                     their business challenges and goals through Blockchain technology.`}
                />,
    },
    {
        id: 4,
        content: 
                <Tile 
                    key={3}
                    image={'/assets/images/modal/dataModal.png'}
                    title={'Big Data'}
                    text={`We help organizations improve performance and OKRs.
                    Through the identification of key metrics, and data analysis,
                     we obtain insights that allow our clients to make better
                      decisions and strategic business actions.`}
                />,

    },
    {
        id: 5,
        content: <div className='flex mx-auto my-10 justify-center'>
                    <img alt={``} src={'/assets/images/modal/uxuiModal.png'} className={'w-1/4 mr-8'}/>
                    <div className='w-1/3 ml-8'>
                        <p className='mb-2'>Media & User Experience</p>
                        <p className='opacity-50 mb-6'>We want to ensure that contact with your brand,
                            or with your product, through the interface on any device is clear, attractive
                            and suggestive. 
                            We leave nothing to chance. We unite emotional design methodologies, focused on the user, with the understanding of human behavior to create experiences that enhance your brand.
                        </p>
                        <p>Intuitive design is all about giving the user new superpowers.</p>
                        <button className='py-3 px-4 float-right'>Find out more</button>
                    </div>
                </div>,

    },
    {
        id: 6,
        content: 
                <Tile 
                    key={6}
                    image={'/assets/images/modal/programmingModal.png'}
                    title={'Programming'}
                    text={`We create digital solutions according to the needs of each business.
                    We take care of the development of custom websites and applications.
                    Each of our projects is unique, as are our clients.`}
                />,
    },
    {
        id: 7,
        content: 
        <div className='flex mx-auto my-10 justify-center'>
            <img alt={``} src={'/assets/images/modal/digitalModal.png'} className={'w-1/4 mr-8'}/>
            <div className='w-1/3 ml-8'>
                <p className='mb-2'>Digital Transformation</p>
                <p className='opacity-50 mb-6'>We lead digital projects from strategy to implementation
                 through the transformation of people, processes and technology
                </p>
                <p>We have the ability to adapt and flexibility to deal with exponential changes in technology.</p>
                <button className='py-3 px-4 float-right mt-6'>Find out more</button>
            </div>
        </div>,
    }
]

export { DIALOG_DATA }