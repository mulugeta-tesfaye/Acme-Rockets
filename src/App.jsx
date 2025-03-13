import React from 'react'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Rockets from './components/Rockets/Rockets'
import Testimonial from './components/Testimonial/Testimonial'
import ContactUs from './components/ContactUs/ContactUs'
const App = () => {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-black dark:text-white  '>
      <Header />
      <Hero />
      <Rockets />
      <Testimonial />
      <ContactUs />
      
    </div>
  )
}

export default App