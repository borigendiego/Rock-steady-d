import React from 'react';

const CAROUSEL_DATA = [
    {
        id: 0,
        title: 'DISCOVERY',
        icon: '/assets/images/how-we-do-it/discover.svg',
        description: 'A discovery is a preliminary phase that involves researching the problem space, framing the problem to be solved, and gathering enough evidence and initial direction on what to do next.',
    },
    {
        id: 1,
        title: 'INNOVATION',
        icon: '/assets/images/how-we-do-it/innovation.svg',
        description: 'We adopt a human-centred perspective in creating innovative solutions while also integrating logic and research. In order to embrace innovation, we need to ensure that we have the right mindsets, collaborative teams, and conducive environments.',
    },
    {
        id: 2,
        title: 'DEVELOPMENT',
        icon: '/assets/images/how-we-do-it/develop.svg',
        description: "We love to write code!. We specialize in the development of customized websites, and we put them together 100% according to the client's needs.",
    },
    {
        id: 3,
        title: 'ACTION',
        icon: '/assets/images/how-we-do-it/deploy.svg',
        description: "Here the draft solution becomes an actionable. It can be broadly divided into 'Socializing', 'Piloting', and 'Integration'. Socializing is the part where we gain buy-in for the idea and get people on board.",
    },
    {
        id: 4,
        title: 'CONTINUOUS IMPROVEMENT',
        icon: '/assets/images/how-we-do-it/mantainance.svg',
        description: "We follow incremental design and development. We work this way for a different reason – to manage technical risks by breaking big changes down and making small bets instead of big ones.",
    }
]

const CAROUSEL_SLIDES = [
    <div>
        <h3 className={'text-center my-4'}>DISCOVERY</h3>
        <img src={'/assets/images/how-we-do-it/discover.svg'} className={'mx-auto w-8 pb-3'}/>
        <p className='text-center'>
            A discovery is a preliminary phase that involves researching the problem space,
            framing the problem to be solved, and gathering enough evidence and initial direction on what to do next.
        </p>
    </div>
    ,
    <div>
        <h3 className={'text-center my-4'}>INNOVATION</h3>
        <img src={'/assets/images/how-we-do-it/innovation.svg'} className={'mx-auto w-8 pb-3'}/>
        <p className='text-center'>
            We adopt a human-centred perspective in creating innovative solutions while also integrating logic
            and research. In order to embrace innovation, we need to ensure that we have the right mindsets,
            collaborative teams, and conducive environments.
        </p>
    </div>
    ,
    <div>
        <h3 className={'text-center my-4'}>DEVELOPMENT</h3>
        <img src={'/assets/images/how-we-do-it/develop.svg'} className={'mx-auto w-8 pb-3'}/>
        <p className='text-center'>
            We love to write code!. We specialize in the development of customized websites,
            and we put them together 100% according to the client's needs.
        </p>
    </div>
   ,
   <div>
        <h3 className={'text-center my-4'}>ACTION</h3>
        <img src={'/assets/images/how-we-do-it/deploy.svg'} className={'mx-auto w-8 pb-3'}/>
        <p className='text-center'>
            Here the draft solution becomes an actionable. It can be broadly divided into 'Socializing',
            'Piloting', and 'Integration'. Socializing is the part where we gain buy-in for the idea and get people on board.

        </p>
    </div>
    ,
    <div>
        <h3 className={'text-center my-4'}>CONTINUOUS IMPROVEMENT</h3>
        <img src={'/assets/images/how-we-do-it/mantainance.svg'} className={'mx-auto w-8 pb-3'}/>
        <p className='text-center'>
            We follow incremental design and development. We work this way for a different reason – to manage technical risks by
            breaking big changes down and making small bets instead of big ones.
        </p>
    </div>
    ,
];

export { CAROUSEL_DATA, CAROUSEL_SLIDES };