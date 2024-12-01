import { useState } from 'react'

const Counter = ({isFancy} : {isFancy?: boolean}) => {

    const [count, setCount] = useState(0)

  return (
    <div className={`flex flex-col items-center border-2 rounded-md p-4 w-fit gap-2 ${isFancy && "bg-green-400"}`}>
        <h2 className='text-lg'>Counter</h2>
        <p className='text-lg'>{count}</p>
        <button className='flex items-center justify-center px-2 rounded-md bg-blue-300 shadow-sm text-lg' onClick={() => setCount(count => count + 1)}>Increment</button>
    </div>
  )
}

export default Counter