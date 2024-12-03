import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(0)

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(prev => prev + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])


  return (
        <div className={`flex flex-col items-center border-2 rounded-md p-4 w-fit gap-2`}>
            <h2 className='text-lg'>Timer</h2>
            <p className='text-lg'>{time}</p>
        </div>
  )
}

export default Timer