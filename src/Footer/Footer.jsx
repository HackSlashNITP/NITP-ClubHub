import React from 'react'
import logo from '../assets/nitpLogo.png'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='px-12 h-full w-full overflow-hidden bg-violet-200'>
            <div className='flex flex-col md:flex-row pt-8'>
                <div className="md:w-1/2 w-2/5">
                    <img className='h-48 w-56' src={logo} alt="logo" />
                    <p className='text-xl px-4'>
                        Address:<br />
                        NIT Patna, Ashok Rajpath
                    </p>
                    <p className='text-xl px-4 my-7'>
                        Contact:<br />
                        7047530557349
                    </p>
                    <div className='flex gap-3 md:gap-7 px-0 md:px-3 h-10'>
                        <a href="https://www.facebook.com/nitpatnaofficial"><BsFacebook size={'30px'} /></a>
                        <a href="https://www.instagram.com/beauty_of_nit_patna/?hl=en"><BsInstagram size={'30px'} /></a>
                        <a href="https://twitter.com/NITPatna1"><FaXTwitter size={'30px'} /></a>
                        <a href="https://www.linkedin.com/school/national-institute-of-technology-patna/"><BsLinkedin style={{ borderRadius: "50%" }} size={'30px'} /></a>
                        <a href="https://youtube.com/@natvansh?si=imz4xJd_caqVch8L"><BsYoutube size={'30px'} /></a>
                    </div>
                </div>
                <div className="flex w-2/3 pt-3 md:pt-10 text-xl place-content-evenly">
                    <ul>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link one</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link two</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link three</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link four</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link five</a></li>
                    </ul>
                    <ul className='md:place-content-between sm:place-content-between'>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link Six</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link seven</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link eight</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link nine</a></li>
                        <li className='mr-3 leading-10 font-medium cursor-pointer'><a href={'#'}>Link ten</a></li>
                    </ul>
                </div>
            </div>
            <div className='my-7 min-sm:px-2 px-5'>
                <hr className='h-px' />
                <div className='flex place-content-between flex-shrink'>
                    <p className='mt-7'>
                        @{new Date().getFullYear()} all rights reserved
                    </p>
                    <ul className='flex gap-2 lg:gap-5 mt-7 text-[16] md:text-[18]'>
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