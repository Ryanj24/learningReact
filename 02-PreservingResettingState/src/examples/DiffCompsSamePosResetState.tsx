import { useState } from "react"
import Timer from "../components/Timer"

const DiffCompsSamePosResetState = () => {

  const [isStopped, setIsStopped] = useState(true)

  return (
    <section className='border-2 rounded-md p-5'>
        <header className='text-left mb-5'>
            <h2 className='text-2xl font-semibold mb-2'>Different Components at the same Position Reset State</h2>
            <p className='text-md mb-1'>This example demonstrates the following:</p>
            <ul className='list-disc text-left py-4 px-8 flex flex-col gap-2'>
                <li>A components state is reset when it is removed from the component tree</li>
                <li>If that component is then added back, it starts with fresh state values</li>
                <li>If we place another component in its place, the state of the entire sub-tree is reset</li>
                <li>Below we conditionally render a Timer component if the box is unchecked</li>
                <li>
                  When the box is toggled between checked/unchecked, the timer will reset to 0 each time it is rendered to the screen
                  <ul className='list-disc text-left py-2 px-4 flex flex-col gap-2'>
                    <li>This is because we remove it from the component tree and display the message when we stop the timer</li>
                    <li>When the timer is then started, the message is removed and the timer is added back but the state is reset</li>
                  </ul>
                </li>
            </ul>
        </header>
        <div className='flex items-center justify-center gap-10'>
          {isStopped
          ?
            <p>Timer is Stopped. Uncheck the box to start it</p>
          :
            <Timer />
          }
        </div>
        <div>
            <label className='flex items-center gap-1 text-lg'>
                <input type='checkbox' checked={isStopped} onChange={() => setIsStopped(!isStopped)}/>
                Stop/Start Timer
            </label>
        </div>
    </section>
  )
}

export default DiffCompsSamePosResetState