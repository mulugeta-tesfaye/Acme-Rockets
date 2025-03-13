import React from 'react'

const Header = () => {
  return (
    <div className='bg-teal-700 sticky top-0 z-10'>
        <section className='max-w-4xl max-auto p-4 flex justify-between items-center mb-3'>
            <h1 className="text-3xl font-medium pl-3">
               <a href="#hero">🚀 Acme Rockets</a>
            </h1>
            <div>
                <button id='mobile-open-button' className='text-3xl sm:hidden focus:outline-none'> &#9776; </button>
                <nav className="hidden sm:block space-x-8 text-xl" aria-label='main'>
                    <a href="#rocket" className="hover:opacity-90">Rockets</a>
                    <a href="#testimonials" className="hover:opacity-90">Testimonial</a>
                    <a href="#contact" className="hover:opacity-90">Contact</a>
                </nav>
            </div>
        </section>
        
         </div>
  )
}

export default Header