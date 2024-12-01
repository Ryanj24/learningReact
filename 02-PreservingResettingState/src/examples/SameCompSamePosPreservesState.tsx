import { useState } from 'react'
import Counter from '../components/Counter'

const SameCompSamePosPreservesState = () => {

    const [isFancy, setIsFancy] = useState(false)
  return (
    <section className='border-2 rounded-md p-5'>
        <header className='text-left mb-5'>
            <h2 className='text-2xl font-semibold mb-2'>Same Component at the same Position Preserves State</h2>
            <p className='text-md mb-1'>This example demonstrates the following:</p>
            <ul className='list-disc text-left py-4 px-8 flex flex-col gap-2'>
                <li>A components state is preserved as long as it maintains the same position in the render tree</li>
                <li>Changing the style of the counter below will re-render it but the count state will be preserved</li>
                <li>Each time the checkbox is checked or unchecked, the counter re-renders & the background changes colour</li>
                <li>Despite the re-renders, the count state is preserved as the position in the render tree doesn't change</li>
            </ul>
        </header>
        <div className='flex items-center justify-center gap-10'>
            {isFancy
            ?
                <Counter isFancy={true}/>
            :
                <Counter isFancy={false}/>
            }
        </div>
        <div>
            <label className='flex items-center gap-1 text-lg'>
                <input type='checkbox' onChange={() => setIsFancy(!isFancy)}/>
                Change Background Colour
            </label>
        </div>
    </section>
  )
}

export default SameCompSamePosPreservesState