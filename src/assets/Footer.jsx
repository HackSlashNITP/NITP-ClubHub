import React from 'react'

const Footer = () => {
    return (
        <div className='px-16 h-full w-full'>
            <div className='flex flex-col md:flex-row pt-8'>
                <div className="w-full md:w-1/2 sm:w-2/5">
                    <img className='h-48 w-56' src={require('../images/NITP_Logo2 3.png')} alt="logo" />
                    <p className='text-xl pl-4'>
                        Address:<br />
                        NIT Patna, Ashok Rajpath
                    </p>
                    <p className='text-xl pl-4 my-7'>
                        Contact:<br />
                        7047530557349
                    </p>
                    <div className='flex gap-7 pl-3 h-10'>
                        <a href="https://www.facebook.com/nitpatnaofficial"><img className='h-10 hover:h-11' src={require('../images/fb_icon.png')} /></a>
                        <a href="https://www.instagram.com/beauty_of_nit_patna/?hl=en"><img className='h-10 hover:h-11' src={require('../images/instagram-png.webp')} /></a>
                        <a href="https://twitter.com/NITPatna1"><img className='h-10 hover:h-11' src={require('../images/twitter-x-icon3832.logowik.png')} /></a>
                        <a href="https://www.linkedin.com/school/national-institute-of-technology-patna/"><img className='h-10 hover:h-11' src={require('../images/linkedin.png')} /></a>
                        <a href="https://youtube.com/@natvansh?si=imz4xJd_caqVch8L"><img className='h-10 hover:h-11' src={require('../images/free-youtube-logo-icon-2431-thumb.png')} /></a>                   
                    </div>
                </div>
                <div className="flex w-1/2 max-lg:p-20 sm:pt-10 sm:pl-0 md:pt-10 md:pl-0 text-xl place-content-around">
                    <ul>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link one</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link two</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link three</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link four</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link five</a></li>
                    </ul>
                    <ul className='md:place-content-between sm:place-content-between'>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link Six</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link seven</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link eight</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link nine</a></li>
                        <li className='leading-10 font-medium cursor-pointer'><a href={'#'}>Link ten</a></li>
                    </ul>
                </div>
            </div>
            <div className='my-7 pl-5'>
                <hr className='h-px' />
                <div className='flex place-content-between flex-shrink'>
                <p className='my-7'>
                    @{new Date().getFullYear()} all rights reserved
                </p>
                <ul className='flex gap-5 my-7'>
                    <li className='cursor-pointer'>Privacy Policy</li>
                    <li className='cursor-pointer'>Terms of service</li>
                    <li className='cursor-pointer'>Cookies Setting</li>
                </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Footer