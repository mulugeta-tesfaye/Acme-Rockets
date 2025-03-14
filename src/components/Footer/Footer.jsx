import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-teal-700 text-white text-xl'>
        <div className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
                555 Astro Way <br />
                Fairfield, New Jersey 12345-5555 <br />
                Email: <a href="mailto:inquires@AcmeRockets.com">Inquires@AcmeRockets.com</a> <br />
                Phone: <a href="tel:+15555555555">(555) 555-5555</a>
            </address>
            <nav className="hidden md:flex flex-col gap-2"aria-label='footer'>
            <Link to="/Rockets" className="hover:opacity-90 cursor-pointer">Our Rockets</Link>
                    <Link to="/Testimonial" className="hover:opacity-90 cursor-pointer">Testimonial</Link>
                    <Link to="/ContactUs" className="hover:opacity-90 cursor-pointer">ContactUs</Link>

            </nav>

        <div className="flex flex-col sm:gap-2">
            <p className="text-right">
            Copyright &copy; <span id='year'>2025</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer