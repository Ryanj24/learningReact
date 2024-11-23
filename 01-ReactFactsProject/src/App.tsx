import { useState } from 'react'
import ReactLogo from '../src/assets/React-icon.svg'
import Navbar from './components/Navbar'
import FactList from './components/FactList'

function App() {

  return (
    <main className='bg-slate-600 h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Facts List */}
      <FactList />
    </main>
  )
}

export default App
