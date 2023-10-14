import Tile from '.';
import Image from 'next/image';

const DIALOG_DATA = [
    {
        id: 1,
        section: 'Marketing Campaign',
        content:
                <div className='flex mx-auto my-10 justify-center'>
                    <img alt={``} src={'/assets/images/modal/marketingModal.png'} className={'w-1/4 mr-8 object-contain rounded-xl'}/>
                    <div className='w-[40%] ml-8'>
                        <p className='mb-2'>Digital Marketing</p>
                        <p className='opacity-50'>
                        In today's digital marketplace, small companies have the ability to win
                        mindshare and influence their market through their websites and apps.
                        We provide SEO/SEM and Analytics to attract target markets and segments. 
                        We generate valueable content based on a solid market strategy to
                        provide you with the framework and tools that will fuel your growth for 5 yo 10 years.
                        </p>
                    </div>
                </div>,

    },
    {
        id: 2,
        section: 'People, Culture & Change offering',
        content: 
                <div className='flex mx-auto my-10 justify-center'>
                    <img alt={``} src={'/assets/images/dream-big/people.jpeg'} className={'w-1/4 mr-8 rounded-xl'}/>
                    <div className='w-1/3 ml-8 pb-14'>
                        <p className='mb-2'>People, Culture & Change offering</p>
                        <p className='opacity-50 mb-6'>With any Digital Transformation, there is a huge impact to the organization on People and Culture. Rock Steady Digital can help you through this process and build strategies and action plans to deliver change more smoothly.</p>
                    </div>
                </div>,
    },
    {
        id: 3,
        section: 'Brand Scientist',
        content: 
                <div className='flex mx-auto my-10 pb-14 justify-center'>
                    <img alt={``} src={'/assets/images/modal/brandscientist-modal.jpeg'} className={'w-1/4 mr-8 object-contain rounded-xl'}/>
                    <div className='w-[40%] ml-8'>
                        <p className='mb-2'>{`We'll help you build a BIGGER brand`}</p>
                        <p className='opacity-50'>
                            Your brand extends well beyond your logo, colours, and promises. It encapsulates all of the emotions your products evoke, the impressions created through social engagement, and the feelings your customers get when they engage with you directly. We'll help you to dominate your industry with a brand that's unforgettable and instantly recognisable using our Brand Scientist AI tools.
                        </p>
                        <p>Use this code and get a $100 discount: RSD100</p>
                    </div>
                </div>,
        customLink: 'https://brand-scientist.com/advantage',
    },
    {
        id: 4,
        section: 'Big Data',
        content: 
                <Tile 
                    key={3}
                    image={'/assets/images/modal/dataModal.png'}
                    title={'Data Analytics'}
                    text={`We help organizations improve performance and OKRs.
                    Through the identification of key metrics, and data analysis,
                     we obtain insights that allow our clients to make better
                      decisions and strategic business actions.`}
                />,

    },
    {
        id: 5,
        section: 'Media & User experience',
        content: <div className='flex mx-auto my-10 justify-center'>
                    <img alt={``} src={'/assets/images/modal/uxuiModal.png'} className={'w-1/4 mr-8'}/>
                    <div className='w-1/3 ml-8'>
                        <p className='mb-2'>{'Media & User Experience'}</p>
                        <p className='opacity-50 mb-6'>
                            We want to ensure that contact with your brand, or with your product, through the interface on any device is clear,
                            attractive and suggestive. We leave nothing to chance.
                            We unite emotional design methodologies, focused on the user,
                            with the understanding of human behavior to create experiences that enhance your brand.
                        </p>
                        <p>Intuitive design is all about giving the user new superpowers.</p>
                    </div>
                </div>,

    },
    {
        id: 6,
        section: 'Programming',
        content: 
                <Tile 
                    key={6}
                    image={'/assets/images/modal/programmingModal.png'}
                    title={'E-Commerce'}
                    text={`We create digital solutions according to the needs of each business.
                    We take care of the development of custom websites and applications.
                    Each of our projects is unique, as are our clients.`}
                />,
    },
    {
        id: 7,
        section: 'Digital disruption',
        content: 
        <div className='flex mx-auto my-10 justify-center'>
            <img alt={``} src={'/assets/images/modal/digitalModal.png'} className={'w-1/4 mr-8'}/>
            <div className='w-1/3 ml-8'>
                <p className='mb-2'>Digital transformation</p>
                <p className='opacity-50 mb-6'>We lead digital projects from strategy to implementation
                 through the transformation of people, processes and technology
                </p>
                <p>We have the ability to adapt and flexibility to deal with exponential changes in technology.</p>
            </div>
        </div>,
    }
];

const CAROUSEL_SLIDES = [
    <div className={'bg-cover px-1 relative rounded-xl h-full flex flex-col justify-center'}>
         <Image
            layout={"fill"}
            className={'z-[-1] opacity-50'}
            src={'/assets/images/modal/marketingModal.png'}
            alt={'Marketing'}
        />
        <h3 className={'text-center mt-2'}>Digital Marketing</h3>
        <p className='py-2 px-2'>
            In today's digital marketplace, small companies have the ability to win mindshare and influence their market through their websites,
            apps and social media. We´ll provide you with the framework and tools, in a long-term strategy that will fuel your growth for 5 to 10 years.
        </p>
    </div>
    ,
    <div className={'bg-cover px-1 relative rounded-md h-full flex flex-col justify-center'}>
         <Image
            layout={"fill"}
            className={'z-[-1] opacity-50'}
            src={'/assets/images/dream-big/people-2.jpeg'}
            alt={'Social'}
        />
        <h3 className={'text-center my-4'}>People, Culture & Change offering</h3>
        <p className='py-2 px-2'>
        With any Digital Transformation, there is a huge impact to the organization on People and Culture. Rock Steady Digital can help you through this process and build strategies and action plans to deliver change more smoothly.
        </p>
    </div>
    ,
    <div className={'bg-cover px-1 relative rounded-md h-full bg-[#1d161b] flex flex-col justify-center'}>
        <h3 className={'text-center mt-4'}>Brand Scinentist</h3>
        <p className='pt-1 px-2 text-sm'>
            Your brand extends well beyond your logo, colours, and promises. It encapsulates all of the emotions your products evoke, the impressions created through social engagement, and the feelings your customers get when they engage with you directly. We'll help you to dominate your industry with a brand that's unforgettable and instantly recognisable using our Brand Scientist AI tools.
        </p>
        <a 
            href='https://brand-scientist.com/advantage' 
            className='p-1 px-2 text-sm underline'
            target='_blank'
            rel='noreferrer'
        >Use this code and get a $100 discount: RSD100</a>

    </div>
    ,   
    <div className={'bg-cover px-1 relative rounded-md h-full flex flex-col justify-center'}>
         <Image
            layout={"fill"}
            className={'z-[-1] opacity-50'}
            src={'/assets/images/modal/dataModal.png'}
            alt={'Big Data'}
        />
        <h3 className={'text-center my-4'}>Data Analytics</h3>
        <p className='py-2 px-2'>
            We help organizations improve performance and OKRs.
            Through the identification of key metrics, and data analysis,
            we obtain insights that allow our clients to make better
            decisions and strategic business actions.
        </p>
    </div>
    ,
    <div className={'bg-cover px-1 relative rounded-md h-full flex flex-col justify-center'}>
        <Image
            layout={"fill"}
            className={'z-[-1] opacity-50'}
            src={'/assets/images/modal/uxuiModal.png'}
            alt={'Media'}
        />
        <h3 className={'text-center mt-4'}>{'Media & User experience'}</h3>
        <p className='p-2 px-2'>
            We want to ensure that contact with your brand, or with your product, through the interface on any device is clear,
            attractive and suggestive.
            We unite emotional design methodologies, focused on the user,
            with the understanding of human behavior to create experiences that enhance your brand.
        </p>
    </div>
    ,
    <div className={'bg-cover px-1 relative rounded-md h-full flex flex-col justify-center'}>
        <Image
            layout={"fill"}
            className={'z-[-1] opacity-50'}
            src={'/assets/images/modal/programmingModal.png'}
            alt={'Programming'}
        />
        <h3 className={'text-center my-4'}>E-Commerce</h3>
        <p className='px-2'>
            We create digital solutions according to the needs of each business.
            We take care of the development of custom websites and applications.
            Each of our projects is unique, as are our clients.
        </p>
    </div>
    ,
    <div className={'bg-cover px-1 relative rounded-md h-full flex flex-col justify-center'}>
        <Image
            layout={"fill"}
            className={'z-[-1] opacity-50'}
            src={'/assets/images/modal/digitalModal.png'}
            alt={'Digital disruption'}
        />
        <h3 className={'text-center my-4'}>Digital transformation</h3>
        <p className='px-2'>We lead digital projects from strategy to implementation
            through the transformation of people, processes and technology
        </p>
        <p className={'px-2'}>We have the ability to adapt and flexibility to deal with exponential changes in technology.</p>
    </div>
];

export { 
    DIALOG_DATA,
    CAROUSEL_SLIDES
}