import React from 'react'
import RocketDab from '../../assets/RocketDab.png'  


const Body = () => {
  return (
    <main className="max-w-4-l mx-auto">
      <div className=' flex flex-col-reverse justify-center sm:flex-row px-6 items-center gap-8 mb-12'>
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">We Boldy Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket </span>Has Gone Before..</h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">We're buliding rockets for the next century today. From the moon to Mars, Jubiter and beyond...</p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Think Acme Rockets.</p>
        </article>
        <img src={RocketDab} alt="RocketDab" />
      </div>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </main>
  )
}

export default Body