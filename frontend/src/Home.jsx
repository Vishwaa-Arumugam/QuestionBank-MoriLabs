import React from 'react'
import Button from './Button'

const Home = () => {

  const imagePath = {
    'IT' : '/Home/image 2.png',
    'CSE' : '/Home/image 3.png',
    'EEE' : '/Home/image 5.png',
    'MECH' : '/Home/image 6.png',
    'ECE' : '/Home/image 7.png',
    'BME' : '/Home/image 8.png',
    'CIVIL' : '/Home/image 9.png',
    'CHEM' : '/Home/image 10.png'
  }

  return (
    <>
    <div className='w-[90%] mx-auto mt-7 md:mt-10'>
      <div className='flex flex-wrap justify-around items-center p-10 md:p-10'>
        <div className='text-xl text-center md:text-left md:text-6xl font-semibold'>
         <span className='text-[#114AA4]'>SSN Question</span> Papers
        </div>
        <div>
          <img className='object-contain aspect-square hover:scale-[1.09] duration-500 cursor-pointer' src="/Home/8899732.png" alt="" />
        </div>
      </div>
      <div className='w-[85%] mx-auto'>
        <p className='mb-16 text-justify md:text-center text-lg md:text-xl leading-10'>
        Welcome to SSN Question Bank—where we've collected all the past exam papers from SSN College of Engineering, Chennai, so you can pretend you studied. No need to thank us. Just grab a coffee, browse through our user-friendly platform, and voilà! Whether you're cramming at the last minute or just looking for extra practice, SSN Question Bank has got your back. Because let's be real, who doesn't love a shortcut to academic success?
        </p>
      </div>
      <div>
        <p className='text-center text-lg md:text-xl text-[#114AA4] underline'>Choose Your Department</p>
      </div>
      <div className="flex items-center justify-center py-20">
      <div className="grid grid-cols-2 gap-20 md:gap-36 sm:grid-cols-3 lg:grid-cols-4">
        {Object.entries(imagePath).map(([key, path]) => (
          <div key={key} className="flex flex-col items-center justify-center">
            <img 
              src={path} 
              alt={`Image ${key}`} 
              className=" object-contain aspect-square hover:scale-[1.12] size-24 md:size-40 transition-transform duration-300 cursor-pointer" 
            />
            <p className='text-base sm:text-lg md:text-xl pt-2'>{key}</p>
          </div>
        ))}
        
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
        <p className='text-center text-md md:text-xl cursor-pointer hover:underline my-10 hover:scale-[1.09] duration-500'>Department not listed here?</p>
        <Button name={"Contibute"}/>
    </div>
    </div>
    </>
  )
}

export default Home
