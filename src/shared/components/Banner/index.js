import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='h-[400px] w-full'>
        <Image 
          src={'/assets/images/pro_auction.png'}
          alt="banner-image"  
          className='w-full'
          width={1470} 
          height={400}
          />
      </div>
    </div>
  )
}

export default Banner