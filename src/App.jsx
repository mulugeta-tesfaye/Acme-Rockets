import React from 'react'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Rockets from './components/Rockets/Rockets'
import Testimonial from './components/Testimonial/Testimonial'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-black dark:text-white  '>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Rockets' element={<Rockets />} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      
      </Routes>
      <Footer />

      
    </div>
  )
}

export default App