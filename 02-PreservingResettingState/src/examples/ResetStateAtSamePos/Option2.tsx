import { useState } from 'react'
import Counter from '../../components/Counter'

const Option2 = () => {

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
            <h2 className='text-2xl font-semibold mb-2'>Option 2: Give each Component a Key</h2>
            <ul className='list-disc text-left py-4 px-8 flex flex-col gap-2'>
                <li>Each counter is given a unique key attribute</li>
                <li>By default, React uses order within the parent (“first counter”, “second counter”) to discern between components</li>
                <li>The key attribute lets us tell React to use the key itself as part of the position, instead of order within the parent</li>
            </ul>
        </header>
        <div className='flex items-center gap-10'>
            {personIndex === 0
            ?
                <Counter key={0} personName='Person A'/>
            :
                <Counter key={1} personName='Person B'/>
            }
        </div>
        <div className='flex items-center gap-x-2 mt-5'>
            <button onClick={handlePrevClick} disabled={personIndex === 0 ? true : false} className={`p-2 rounded-md bg-slate-200 shadow-md disabled:opacity-40`}>Previous Person</button>
            <button onClick={handleNextClick} disabled={personIndex === 1 ? true : false} className={`p-2 rounded-md bg-slate-200 shadow-md disabled:opacity-40`}>Next Person</button>
        </div>
    </section>
  )
}

export default Option2