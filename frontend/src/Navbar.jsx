import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import morilogo from '../src/assets/morilogo.png';

const NavLink = ({ children, onClick, sectionId }) => (
  <div className='cursor-pointer relative group'>
    <span onClick={() => onClick(sectionId)}>{children}</span>
    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full hover:h-2'></span>
  </div>
);

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [bgColor, setBgColor] = useState("bg-white");
  const navigate = useNavigate();

  const navLinks = ['QuestionPapers', 'Contribute', 'AboutUs'];
  const sectionIds = ['/question-papers', '/contribute', '/about-us']; // Adjusted to URLs

  const handleHamburger = () => setHamburger(prev => !prev);

  const handleRedirect = (id) => {
    navigate(id); // Use the navigate function to redirect
  };

  return (
    <>
      <div className={`w-full m-auto ${bgColor} sticky top-0 z-50 py-3 shadow-stone-100 shadow-md`}>
        <div className='w-[60%] m-auto justify-center font-poppins md:text-lg text-md p-5 sm:flex hidden'>
          <div className='flex space-x-7 gap-10 justify-center sm:justify-start'>
            <div className='flex'>
              <img src={morilogo} className='rounded-md h-6 mr-2' alt="MoriLabs logo" />
              <span className='cursor-pointer relative group' onClick={() => navigate('/')}>
                SSNQuestionBank
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full hover:h-2'></span>
              </span>
            </div>
            {navLinks.map((link, index) => (
              <NavLink key={link} onClick={handleRedirect} sectionId={sectionIds[index]}>
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Hamburger Navbar */}
      <div className={`block sm:hidden font-poppins sticky text-lg ${hamburger ? '' : 'shadow-md shadow-gray-200'} ${bgColor} sticky top-0 z-50 py-1`}>
        <div className='p-5 pb-10 text-center space-y-6'>
          <div className='flex gap-1.5 justify-center relative'>
            <img src={morilogo} className='rounded-md h-6' alt="MoriLabs logo" />
            <span className='text-lg cursor-pointer'>SSNQB</span>
            <div onClick={handleHamburger}>
              <box-icon name={hamburger ? 'menu' : 'x'} className='right-0 absolute cursor-pointer' size='md' border='square' />
            </div>
          </div>
          {!hamburger && (
            <section className='space-y-6'>
              {navLinks.map((link, index) => (
                <div key={link} onClick={() => handleRedirect(sectionIds[index])}>
                  {link}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
