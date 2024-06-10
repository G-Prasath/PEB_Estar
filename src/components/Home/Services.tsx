import React from 'react'

const Services = () => {
  return (
    <div className='w-full bg-primary py-5 relative'>
        <img src="" alt="" />
        <div className="sec-heading w-full">
          <h3 className='uppercase font-bold text-center text-white text-[48px]'>Our Service</h3>
        </div>

        <div className='flex my-10 flex-col'>

          <div className='flex max-lg:flex-col my-5'>
            <div className='w-full aspect-video'>
              <img src="/service-1.png" alt="service one"  />
            </div>
            <div className='w-full flex flex-col items-center p-10 max-lg:p-5'>
              <h3 className='uppercase font-bold text-white text-[40px] max-lg:text-[28px]'>PRE ENGINEERED BUILDING</h3>
              <p className='text-white text-[18px] my-4 max-md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente dolore vitae ducimus, consequatur ratione earum culpa accusantium, inventore rem voluptatum libero rerum quis atque. Voluptates quisquam neque corporis repudiandae.</p>
              <p className='text-white text-[18px] my-4 max-md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente dolore vitae ducimus, consequatur ratione earum culpa accusantium, inventore rem voluptatum libero rerum quis atque. Voluptates quisquam neque corporis repudiandae.</p>
            </div>
          </div>
          <img src="/line.png" alt="line" className='w-[40%] absolute right-0 top-[40%] h-[150px] max-lg:hidden' />
          <div className='flex max-lg:flex-col my-5'>
            <div className='w-full flex flex-col items-center p-10 max-lg:p-5 max-lg:order-2 justify-center'>
              <h3 className='uppercase font-bold text-white text-[40px] max-lg:text-[28px]'>CONVENTIONAL BUILDING</h3>
              <p className='text-white text-[18px] my-4 max-md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente dolore vitae ducimus, consequatur ratione earum culpa accusantium, inventore rem voluptatum libero rerum quis atque. Voluptates quisquam neque corporis repudiandae.</p>
              <p className='text-white text-[18px] my-4 max-md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente dolore vitae ducimus, consequatur ratione earum culpa accusantium, inventore rem voluptatum libero rerum quis atque. Voluptates quisquam neque corporis repudiandae.</p>
            </div>
            <div className='w-full aspect-video max-lg:order-1'>
              <img src="/service-2.png" alt="service one"  />
            </div>
          </div>

        </div>
     
    </div>
  )
}

export default Services
