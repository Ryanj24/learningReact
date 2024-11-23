import Navbar from './components/Navbar'
import FactList from './components/FactList'

function App() {

  return (
    <main className='flex flex-col bg-slate-600 h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Facts List */}
      <FactList />
    </main>
  )
}

export default App
