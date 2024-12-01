import { useState } from 'react'
import Counter from './components/Counter'
import SameComponentMultipleRenders from './examples/SameComponentMultipleRenders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col flex-1 gap-8 p-5'>
      <header className='w-full text-center'>
        <h1 className='text-3xl mb-2'>React App</h1>
        <p className='text-lg'>Examples demonstrating state behaviour depending on the position of components in the render tree</p>
      </header>
      <SameComponentMultipleRenders />
    </div>
  )
}

export default App
