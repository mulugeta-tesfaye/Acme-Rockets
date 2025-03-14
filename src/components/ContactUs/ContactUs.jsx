import React from 'react'

const ContactUs = () => {
  return (
      <div>
    <div className='p-6 my-12'>
        <h2 className="-mt-12 text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white ">
           ContactUs
        </h2>
        <form action="" className='max-w-4xl mx-auto text-2xl sm:3xl flex flex-col items-left gap-4'>
          <label htmlFor='subject'>Subject:</label>
          <input type="text" name="subject" id="subject" required minlength="3"  maxlength="60" placeholder='Your Subject' className='w-full text-black text-xl sm:text-xl p-3 rounded-xl border border-solid bg-gray-100 border-slate-900 dark:border-none ' />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" cols="30" rows="10"  className='w-full text-black text-xl sm:text-xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none bg-gray-100 'placeholder='Your Message' required></textarea>

          <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-300 text-white p-3 w-48 rounded-xl border border-solid border-s-slate-900 dark:border-none">Submit</button>
        </form>
    </div>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </div>
  )
}

export default ContactUs