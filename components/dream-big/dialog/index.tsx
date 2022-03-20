import React from 'react';

const Tile = ({ 
    key,
    image,
    title,
    text,  
    }) => {

    return(
        <div className='flex mx-auto my-10 justify-center'>
            <img alt={`image-${key}`} src={image} className={'w-1/4 mr-8'}/>
            <div className='w-1/3 ml-8'>
                <p className='mb-2'>{title}</p>
                <p className='opacity-50 mb-6'>{text}</p>
            </div>
        </div>
        
    )
};

export default Tile;