import DiffCompsSamePosResetState from './examples/DiffCompsSamePosResetState'
import ResetStateAtSamePos from './examples/ResetStateAtSamePos/ResetStateAtSamePos'
import SameComponentMultipleRenders from './examples/SameComponentMultipleRenders'
import SameCompSamePosPreservesState from './examples/SameCompSamePosPreservesState'

function App() {

  return (
    <div className='flex flex-col flex-1 gap-8 p-5'>
      <header className='w-full text-center'>
        <h1 className='text-3xl mb-2'>React App</h1>
        <p className='text-lg'>Examples demonstrating state behaviour depending on the position of components in the render tree</p>
      </header>
      <SameComponentMultipleRenders />
      <SameCompSamePosPreservesState />
      <DiffCompsSamePosResetState />
      <ResetStateAtSamePos />
    </div>
  )
}

export default App
