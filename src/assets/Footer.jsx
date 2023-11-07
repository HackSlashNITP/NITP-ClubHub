import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
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
                        <a href="https://www.facebook.com/nitpatnaofficial"><BsFacebook size="40px"/></a>
                        <a href="https://www.instagram.com/beauty_of_nit_patna/?hl=en"><BsInstagram size="40px" /></a>
                        <a href="https://twitter.com/NITPatna1"><FaXTwitter size="40px"/></a>
                        <a href="https://www.linkedin.com/school/national-institute-of-technology-patna/"><BsLinkedin style={{borderRadius:"50%"}} size="40px" /></a>
                        <a href="https://youtube.com/@natvansh?si=imz4xJd_caqVch8L"><BsYoutube size="40px" /></a>                   
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 sm:pt-10 md:pt-10 text-xl place-content-around">
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