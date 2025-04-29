import React from 'react'

const Topbar = ({ deptName }) => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      {/* Title Section */}
      <div className="mt-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-blue-600">{deptName}</span> Papers
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 mt-4 md:flex-row md:justify-between md:items-center md:px-8 lg:px-16">
        <p className="text-xl leading-10 text-center md:text-left md:text-2xl md:flex-1 md:pr-8">
          Welcome to the treasure trove! Behold, the exclusive repository of {deptName} department papers of CAT exams and the infamous end semester ordeal. Your journey to academic enlightenment begins here. Ready to conquer?
        </p>
        <img 
          className="max-w-xs md:max-w-sm lg:max-w-md h-auto" 
          src='/ranjith/boy.png' 
          alt="Student illustration"
        />
      </div>
    </div>
  )
}

export default Topbar