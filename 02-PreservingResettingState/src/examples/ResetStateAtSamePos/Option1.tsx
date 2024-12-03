import { useState } from 'react'
import Counter from '../../components/Counter'

const Option1 = () => {

    const [personIndex, setPersonIndex] = useState(0)

    const handlePrevClick = () => {
        if (personIndex > 0) {
            setPersonIndex(prev => prev - 1)
        }
    }

    const handleNextClick = () => {
        if (personIndex < 1) {
            setPersonIndex(prev => prev + 1)
        }
    }

  return (
    <section className='border-2 rounded-md p-5'>
        <header className='text-left mb-5'>
            <h2 className='text-2xl font-semibold mb-2'>Option 1: Render Component in Different Position</h2>
            <p className='text-md mb-1'>This example demonstrates the following:</p>
            <ul className='list-disc text-left py-4 px-8 flex flex-col gap-2'>
                <li>A person-specific counter component is rendered whenever the button is clicked </li>
                <li>This will treat each counter as independent components as the position changes and reset state as a result</li>
            </ul>
        </header>
        <div className='flex items-center gap-10'>
            {personIndex === 0 && <Counter personName='Person A'/>}
            {personIndex === 1 && <Counter personName='Person B'/>}
        </div>
        <div className='flex items-center gap-x-2 mt-5'>
            <button onClick={handlePrevClick} disabled={personIndex === 0 ? true : false} className={`p-2 rounded-md bg-slate-200 shadow-md disabled:opacity-40`}>Previous Person</button>
            <button onClick={handleNextClick} disabled={personIndex === 1 ? true : false} className={`p-2 rounded-md bg-slate-200 shadow-md disabled:opacity-40`}>Next Person</button>
        </div>
    </section>
  )
}

export default Option1