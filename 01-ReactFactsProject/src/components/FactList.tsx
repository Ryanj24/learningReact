import React from 'react'

const FactList = () => {
  return (
    <section className='flex justify-between flex-1 items-center p-20 relative bg-[url("/src/assets/React-icon.svg")] bg-no-repeat bg-[140%_75%]'>
        <div className='flex flex-col'>
          <h1 className='text-white text-5xl'>Fun Facts About React</h1>
          <ul className='p-10 space-y-5 list-disc text-xl'>
            <li className='text-[#61DBFB]'><span className='text-white'>Was first released in 2013</span></li>
            <li className='text-[#61DBFB]'><span className='text-white'>Was originally created by Jordan Walke</span></li>
            <li className='text-[#61DBFB]'><span className='text-white'>Used by many developers worldwide</span></li>
            <li className='text-[#61DBFB]'><span className='text-white'>Has a vast ecosystem of libraries</span></li>
            <li className='text-[#61DBFB]'><span className='text-white'>Can be used to create mobile apps</span></li>
          </ul>
        </div>
        {/* <img src='/src/assets/React-icon.svg' className='h-80 w-80 '/> */}
    </section>
  )
}

export default FactList