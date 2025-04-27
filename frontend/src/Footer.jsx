import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <div className="relative bg-black h-7 w-full mt-auto">
            <div className="absolute bottom-0 right-2 font-semibold text-sm text-white">
                Mori Labs {currentYear} | &#169; All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;
