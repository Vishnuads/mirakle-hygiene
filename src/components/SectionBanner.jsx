import React from 'react'
// import Banner from '../assets/images/section-bannerr.png'

const SectionBanner = ({title}) => {
  return (
    <>
      <section className='relative'>
        <div className='relative md:mt-20  mt-16 '>
            <div className="absolute inset-0 bg-black/60"></div>
            {/* <img src={Banner} alt="Section banner"  className='md:h-[200px] h-[100px] object-cover w-full'/> */}

            <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h1>{title}</h1>
            <p className='text-xs md:text-md w-full mb-0'>The Essence of Good Food, Born from Nature & Science</p>
            </div>
        </div>
        
      </section>
    </>
  )
}

export default SectionBanner
