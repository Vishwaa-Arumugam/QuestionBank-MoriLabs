import React from 'react'

const Button = ({name}) => {
  return (
    <a href="#_" className="relative inline-block px-6 py-3 font-medium group mb-20">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white text-xl">{name}</span>
    </a>
  )
}

export default Button
