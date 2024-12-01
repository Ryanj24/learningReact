import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className='w-full text-center'>
        <h1 className='text-3xl mb-2'>React App</h1>
        <p className='text-lg'>Examples demonstrating state behaviour depending on the position of components in the render tree</p>
      </header>
    </div>
  )
}

export default App
