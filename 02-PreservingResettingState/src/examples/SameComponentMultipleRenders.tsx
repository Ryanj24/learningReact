import React from 'react'
import Counter from '../components/Counter'

const SameComponentMultipleRenders = () => {

    const componentToRender = <Counter />

  return (
    <section className='border-2 rounded-md p-5'>
        <header className='text-left mb-5'>
            <h2 className='text-2xl font-semibold mb-2'>Same Component Rendered Multiple Times</h2>
            <p className='text-md mb-1'>This example demonstrates the following:</p>
            <ul className='list-disc text-left py-4 px-8 flex flex-col gap-2'>
                <li>The same Counter component rendered 2 times</li>
                <li>Each counter has its own position in the render tree & thus its own independent state</li>
                <li>Shows how each piece of state is linked to its component based on the component's position in the render tree</li>
                <li>When the same component is rendered multiple times, each instance maintains its own independent state based on its unique position in the tree</li>
            </ul>
        </header>
        <div className='flex items-center justify-center gap-10'>
            {componentToRender}
            {componentToRender}
        </div>
    </section>
  )
}

export default SameComponentMultipleRenders