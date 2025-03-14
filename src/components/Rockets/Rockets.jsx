import React from 'react'
import RocateMen from '../../assets/rocketman.png'
import RocateRide from '../../assets/rocketride.png'
import RocateLaunch from '../../assets/rocketlaunch.png'

const Rockets = () => {
  return (
    <div>
    <div className='p-10 pt-0 my-12'>
        <h2 className="widescreen:section-min-height tallscreen:section-min-height text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white -mt-7">
            Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:2/3 flex flex-col items-center border border-solid border-s-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"><img src={RocateMen} alt="" className="mb-6 w-1/2" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explore</h3>
            <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">$</p>
            <p className="sm:hidden m2-2 text-2xl text-center text-slate-500 dark:text-slate-400">Affordable Exploration</p>
            </li>

            <li className="w-2/3 sm:2/3 flex flex-col items-center border border-solid border-s-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"><img src={RocateRide} alt="" className="mb-6 w-1/2" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
            <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">$$</p>
            <p className="sm:hidden m2-2 text-2xl text-center text-slate-500 dark:text-slate-400">Best Selling Rocket</p>
            </li>
            <li className="w-2/3 sm:2/3 flex flex-col items-center border border-solid border-s-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"><img src={RocateLaunch} alt="" className="mb-6 w-1/2" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
            <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">$$$</p>
            <p className="sm:hidden m2-2 text-2xl text-center text-slate-500 dark:text-slate-400">Luxury Starship</p>
            </li>
        </ul>
    </div>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </div>
  )
}

export default Rockets