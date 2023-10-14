import React from 'react';
import Image from 'next/image';

const Tile = ({ 
    key,
    image,
    title,
    text,  
    }) => {

    return(
        <div className='flex mx-auto my-10 justify-center'>
            <Image 
                alt={`image-${key}`}
                src={image} 
                className={'z-20 relative rounded-xl object-contain'}
                width={300}
                height={250}
            />
            <div className='w-1/3 ml-8'>
                <p className='mb-2'>{title}</p>
                <p className='opacity-50 mb-6'>{text}</p>
            </div>
        </div>
        
    )
};

export default Tile;