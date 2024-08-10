import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  function handleNavLink() {
    setNavbar(!navbar);
  }

  return (
    <>
      {
        navbar ? (
          <>
            <div className='min-w-full mt-16 hidden md:block'>
              <div className='md:flex md:flex-row md:justify-between flex-col justify-normal text-center px-10 md:text-left'>
                <div>
                  <p
                    className='text-md md:text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'
                    onClick={() => navigate('/')}
                  >
                    SSNQuestionBank
                  </p>
                </div>
                <div className='flex md:gap-20 flex-col md:flex-row'>
                  <p className='text-md md:text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'>
                    Question Papers
                  </p>
                  <p className='text-md md:text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'>
                    Contribute
                  </p>
                  <p
                    className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500'
                    onClick={() => navigate('/about-us')}
                  >
                    About Us
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute right-5 top-20 md:hidden' onClick={handleNavLink}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer hover:scale-[1.19] duration-500 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className='min-w-full mt-16'>
              <div className='md:flex md:flex-row md:justify-between flex-col justify-normal text-center px-10 md:text-left'>
                <div>
                  <p
                    className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'
                    onClick={() => navigate('/')}
                  >
                    SSNQuestionBank
                  </p>
                </div>
                <div className='flex md:gap-20 flex-col md:flex-row'>
                  <p className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'>
                    Question Papers
                  </p>
                  <p className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500 mb-5'>
                    Contribute
                  </p>
                  <p
                    className='text-2xl cursor-pointer hover:underline hover:scale-[1.09] duration-500'
                    onClick={() => navigate('/about-us')}
                  >
                    About Us
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute right-5 top-20' onClick={handleNavLink}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer hover:scale-[1.19] duration-500 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </>
        )
      }
    </>
  );
};

export default Navbar;
