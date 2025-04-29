import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Alias = () => {
  return (
    <>
      <div className="flex justify-center items-center border border-gray-300 rounded-3xl p-5 max-w-lg mx-auto bg-white shadow-md">
        <div className="w-full text-left">
          <span className="block text-sm font-semibold text-gray-600 mb-2">Enter an alias (For upload credit purposes)</span>
          <input 
            type="text" 
            placeholder="A cool nickname perhaps?" 
            className="w-full py-2 px-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="text-center mt-10">
        <Button name={'Submit My Paper'}/>
      </div>

      <div className="text-center mt-[-25px] mb-12">
        <span className="text-sm text-gray-700">
          Want to request for a Question paper? 
          <Link to="/requestpapers" className="text-blue-600 hover:underline">Request Here</Link>
        </span>
      </div>
    </>
  );
};

export default Alias;
