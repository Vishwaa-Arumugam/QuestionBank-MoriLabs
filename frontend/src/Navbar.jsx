import React, { useState } from 'react'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  function handlenavlink(){
    setNavbar(!navbar);
  }

  return (
    <>
      {
        navbar ?  <div className='min-w-full mb-16'></div> :  <div className='min-w-full mb-16'></div>
      }
     
     <div className='md:flex hidden md:flex-row md:justify-between flex-col justify-normal text-center px-10 md:text-left'>
          <div>
            <p className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'>SSNQuestionBank</p>
          </div>
          <div className='flex md:gap-20 flex-col md:flex-row'>
            <p className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'>Question Papers</p>
            <p className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500'>Contribute</p>
          </div>
        </div>
        
        <div className='absolute right-5 top-10 cursor-pointer md:hidden' onClick={handlenavlink}>
          {
            navbar ?
              <div className='flex gap-24'>
                 <p className=''>SSN-QuestionBank</p>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                 </svg>
              </div>
            
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          }

        </div>
      {/* </div> */}
    </>
  )
}

export default Navbar
